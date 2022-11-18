import {
  Card,
  Col,
  Layout,
  Menu,
  message,
  Popconfirm,
  Row,
  Spin,
  Table,
  Tabs
} from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import Styles from "./Tournament.styles";
import { TournamentProps as Props } from "./Tournament.types";
import { useAuthenticator, Image } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import * as mutations from "../../../graphql/mutations";
import { addMinutes, format } from "date-fns";
import { es } from "date-fns/locale";
import {
  Group,
  PollaSubscription,
  Round,
  // SubscriptionGroupTeam,
  SubscriptionMatch,
  UpdatePollaSubscriptionInput,
  Match,
  UpdateSubscriptionMatchTeamInput,
  CreateSubscriptionMatchTeamInput,
  CreateSubscriptionMatchInput,
  SubscriptionMatchTeam,
  CreateSubscriptionBonusInput,
  UpdateSubscriptionBonusInput
} from "../../../API";
import {
  getGroupPositionsByGroup,
  orderGroupsByName,
  orderMatchesByDate
} from "./Tournament.utils";
import { now } from "moment";
import SaveMatchForm from "../SaveMatchForm/SaveMatchForm";
import SaveBonusForm from "../SaveBonusForm/SaveBonusForm";
import { HomeOutlined, FileSearchOutlined } from "@ant-design/icons";

const Tournament: React.FC<Props> = props => {
  const router = useRouter();
  const { signOut, user } = useAuthenticator(context => [context.user]);
  const { pid } = router.query;
  const [loading, setLoading] = useState<boolean>(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [matchBlocked, setMatchBlocked] = useState<boolean>(false);
  const [bonusBlocked, setBonusBlocked] = useState<boolean>(false);
  const [saveBonusLoading, setSaveBonusLoading] = useState<boolean>(false);
  const [subscriptions, setSubscriptions] = useState<PollaSubscription[]>([]);
  const [subscriptionMatches, setSubscriptionMatches] = useState<
    SubscriptionMatch[]
  >([]);
  const [rounds, setRounds] = useState<Round[] | undefined>(undefined);
  const [mySubscription, setMySubscription] =
    useState<PollaSubscription | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [bonusOpen, setBonusOpen] = useState<boolean>(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      if (pid) {
        try {
          setLoading(true);
          // fetch subscriptions
          const filter = {
            pollaMundialistaPollaSubscriptionsId: {
              eq: pid
            }
          };
          const subscriptionsResult: any = await API.graphql({
            query: queries.listPollaSubscriptions,
            variables: { filter, limit: "10000" }
          });
          const fetchedSubscriptions =
            subscriptionsResult?.data?.listPollaSubscriptions?.items;
          setSubscriptions(fetchedSubscriptions);
          // set my subscription
          const mySubscriptionFound = fetchedSubscriptions.find(
            (sub: PollaSubscription) => {
              return sub.userId === user?.attributes?.sub;
            }
          );
          setMySubscription(mySubscriptionFound);
          // Fetch and Set Rounds
          const roundsResult: any = await API.graphql({
            query: queries.listRounds,
            variables: { limit: "10000" }
          });
          const fetchedRounds = roundsResult?.data?.listRounds?.items;
          setRounds(fetchedRounds);
          // fetch subscription matches
          const subscriptionMatchesFilter = {
            pollaSubscriptionSubscriptionMatchesId: {
              eq: mySubscriptionFound.id
            }
          };
          const subscriptionMatchesResult: any = await API.graphql({
            query: queries.listSubscriptionMatches,
            variables: { filter: subscriptionMatchesFilter, limit: "10000" }
          });
          const fetchedSubscriptionMatches =
            subscriptionMatchesResult?.data?.listSubscriptionMatches?.items;
          setSubscriptionMatches(fetchedSubscriptionMatches);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    })();
  }, [pid, user]);

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const searchTournamentsHandler = () => {
    router.push("/search");
  };

  const myTournamentsHandler = () => {
    router.push("/");
  };

  const signOutHandler = () => {
    signOut();
    router.push("/login");
  };

  const changeStatusHandler = async (record: PollaSubscription) => {
    const input: UpdatePollaSubscriptionInput = {
      id: record.id,
      status: "Aceptado"
    };
    setLoading(true);
    try {
      await API.graphql({
        query: mutations.updatePollaSubscription,
        variables: { input }
      });
      const filter = {
        pollaMundialistaPollaSubscriptionsId: {
          eq: pid
        }
      };
      const subscriptionsResult: any = await API.graphql({
        query: queries.listPollaSubscriptions,
        variables: { filter, limit: "10000" }
      });

      const fetchedSubscriptions =
        subscriptionsResult?.data?.listPollaSubscriptions?.items;
      setSubscriptions(fetchedSubscriptions);
    } catch (error) {
      console.log(error);
      message.error("Error al crear el torneo");
    }
    setLoading(false);
  };

  const onMatchClicked = (match: Match | null) => {
    let blocked = false;
    if (
      new Date(now()) >= new Date("2022-11-20 09:30") &&
      pid !== "4548399e-b0fd-4438-84d2-56c1826ef68b"
    ) {
      blocked = true;
    }
    if (match) {
      if (
        addMinutes(new Date(now()), 15) >=
          new Date(match?.matchDate ?? now()) &&
        pid === "4548399e-b0fd-4438-84d2-56c1826ef68b"
      ) {
        blocked = true;
      }
      setMatchBlocked(blocked);
      setSelectedMatch(match);
      setOpen(true);
    }
  };
  const onCancel = () => {
    setOpen(false);
  };
  const onCreate = async (values: any) => {
    const { result } = values;
    setSaveLoading(true);
    const subscriptionMatch = subscriptionMatches.find(
      (subMatch: SubscriptionMatch) =>
        subMatch.matchSubscriptionMatchesId === values.match.id
    );
    if (subscriptionMatch) {
      const { subscriptionMatchTeams } = subscriptionMatch;
      if (
        subscriptionMatchTeams &&
        subscriptionMatchTeams.items &&
        subscriptionMatchTeams.items[0] &&
        subscriptionMatchTeams.items[1]
      ) {
        subscriptionMatchTeams.items.find(
          (matchTeam: SubscriptionMatchTeam | null) => {
            return (
              matchTeam?.team?.id === values.match.matchTeams.items[0].team.id
            );
          }
        );
        const updateTeamAInput: UpdateSubscriptionMatchTeamInput = {
          id:
            subscriptionMatchTeams.items.find(
              (matchTeam: SubscriptionMatchTeam | null) => {
                return (
                  matchTeam?.team?.id ===
                  values.match.matchTeams.items[0].team.id
                );
              }
            )?.id ?? subscriptionMatchTeams.items[0].id,
          score: result.teamA,
          points:
            +result.teamA >= +result.teamB
              ? +result.teamA > +result.teamB
                ? 3
                : 1
              : 0,
          teamSubscriptionMatchTeamsId:
            values.match.matchTeams.items[0].team.id,
          subscriptionMatchSubscriptionMatchTeamsId: subscriptionMatch.id
        };
        // Update subscription match team A
        try {
          await API.graphql({
            query: mutations.updateSubscriptionMatchTeam,
            variables: { input: updateTeamAInput }
          });
        } catch (error) {
          console.log(error);
          message.error("Error al guardar el pronóstico");
        }
        const updateTeamBInput: UpdateSubscriptionMatchTeamInput = {
          id:
            subscriptionMatchTeams.items.find(
              (matchTeam: SubscriptionMatchTeam | null) => {
                return (
                  matchTeam?.team?.id ===
                  values.match.matchTeams.items[1].team.id
                );
              }
            )?.id ?? subscriptionMatchTeams.items[1].id,
          score: result.teamB,
          points:
            +result.teamB >= +result.teamA
              ? +result.teamB > +result.teamA
                ? 3
                : 1
              : 0,
          teamSubscriptionMatchTeamsId:
            values.match.matchTeams.items[1].team.id,
          subscriptionMatchSubscriptionMatchTeamsId: subscriptionMatch.id
        };
        // Update subscription match team B
        try {
          await API.graphql({
            query: mutations.updateSubscriptionMatchTeam,
            variables: { input: updateTeamBInput }
          });
        } catch (error) {
          console.log(error);
          message.error("Error al guardar el pronóstico");
        }
      } else {
        const createTeamAInput: CreateSubscriptionMatchTeamInput = {
          score: result.teamA,
          points:
            +result.teamA >= +result.teamB
              ? +result.teamA > +result.teamB
                ? 3
                : 1
              : 0,
          teamSubscriptionMatchTeamsId:
            values.match.matchTeams.items[0].team.id,
          subscriptionMatchSubscriptionMatchTeamsId: subscriptionMatch.id
        };
        // Create subscription match team A
        try {
          await API.graphql({
            query: mutations.createSubscriptionMatchTeam,
            variables: { input: createTeamAInput }
          });
        } catch (error) {
          console.log(error);
          message.error("Error al guardar el pronóstico");
        }
        const createTeamBInput: CreateSubscriptionMatchTeamInput = {
          score: result.teamB,
          points:
            +result.teamB >= +result.teamA
              ? +result.teamB > +result.teamA
                ? 3
                : 1
              : 0,
          teamSubscriptionMatchTeamsId:
            values.match.matchTeams.items[1].team.id,
          subscriptionMatchSubscriptionMatchTeamsId: subscriptionMatch.id
        };
        // Create subscription match team B
        try {
          await API.graphql({
            query: mutations.createSubscriptionMatchTeam,
            variables: { input: createTeamBInput }
          });
        } catch (error) {
          console.log(error);
          message.error("Error al guardar el pronóstico");
        }
      }
    } else {
      const createSubscriptionMatchInput: CreateSubscriptionMatchInput = {
        subscriptionPoints: 0,
        pollaSubscriptionSubscriptionMatchesId: mySubscription?.id,
        matchSubscriptionMatchesId: values.match.id
      };
      // Create subscription match
      try {
        const newSubscriptionMatchResult: any = await API.graphql({
          query: mutations.createSubscriptionMatch,
          variables: { input: createSubscriptionMatchInput }
        });
        const newSubscriptionMatch: SubscriptionMatch =
          newSubscriptionMatchResult.data.createSubscriptionMatch;
        const createTeamAInput: CreateSubscriptionMatchTeamInput = {
          score: result.teamA,
          points:
            +result.teamA >= +result.teamB
              ? +result.teamA > +result.teamB
                ? 3
                : 1
              : 0,
          teamSubscriptionMatchTeamsId:
            values.match.matchTeams.items[0].team.id,
          subscriptionMatchSubscriptionMatchTeamsId: newSubscriptionMatch.id
        };
        // Create subscription match team A
        await API.graphql({
          query: mutations.createSubscriptionMatchTeam,
          variables: { input: createTeamAInput }
        });
        const createTeamBInput: CreateSubscriptionMatchTeamInput = {
          score: result.teamB,
          points:
            +result.teamB >= +result.teamA
              ? +result.teamB > +result.teamA
                ? 3
                : 1
              : 0,
          teamSubscriptionMatchTeamsId:
            values.match.matchTeams.items[1].team.id,
          subscriptionMatchSubscriptionMatchTeamsId: newSubscriptionMatch.id
        };
        // Create subscription match team B
        await API.graphql({
          query: mutations.createSubscriptionMatchTeam,
          variables: { input: createTeamBInput }
        });
      } catch (error) {
        console.log(error);
        message.error("Error al guardar el pronóstico");
      }
    }
    // fetch subscription matches
    const subscriptionMatchesFilter = {
      pollaSubscriptionSubscriptionMatchesId: {
        eq: mySubscription?.id
      }
    };
    const subscriptionMatchesResult: any = await API.graphql({
      query: queries.listSubscriptionMatches,
      variables: { filter: subscriptionMatchesFilter, limit: "10000" }
    });
    const fetchedSubscriptionMatches =
      subscriptionMatchesResult?.data?.listSubscriptionMatches?.items;
    setSubscriptionMatches(fetchedSubscriptionMatches);
    message.success("Pronóstico guardado");
    setSaveLoading(false);
    setOpen(false);
  };
  const onCancelBonus = () => {
    setBonusOpen(false);
  };
  const onCreateBonus = async (values: any) => {
    const {
      championId,
      secondId,
      thirdId,
      fourthId,
      bestPlayerId,
      maxScorerId
    } = values;
    setSaveBonusLoading(true);
    try {
      // fetch bonuses
      const filter = {
        pollaSubscriptionSubscriptionBonusesId: {
          eq: mySubscription?.id
        }
      };
      const bonusResult: any = await API.graphql({
        query: queries.listSubscriptionBonuses,
        variables: { filter, limit: "10000" }
      });
      const fetchedBonuses = bonusResult?.data?.listSubscriptionBonuses?.items;
      if (fetchedBonuses && fetchedBonuses.length) {
        const updateBonusInput: UpdateSubscriptionBonusInput = {
          id: fetchedBonuses[0].id,
          championId,
          secondId,
          thirdId,
          fourthId,
          bestPlayerId,
          maxScorerId
        };
        // Create subscription match team B
        await API.graphql({
          query: mutations.updateSubscriptionBonus,
          variables: { input: updateBonusInput }
        });
      } else {
        const createBonusInput: CreateSubscriptionBonusInput = {
          championId,
          secondId,
          thirdId,
          fourthId,
          bestPlayerId,
          maxScorerId,
          subscriptionPoints: 0,
          pollaSubscriptionSubscriptionBonusesId: mySubscription?.id
        };
        // Create subscription match team B
        await API.graphql({
          query: mutations.createSubscriptionBonus,
          variables: { input: createBonusInput }
        });
      }
      message.success("Bonificaciones guardadas con éxito");
    } catch (error) {
      console.log(error);
      message.error("Error al guardar las bonificaciones");
    }

    setSaveBonusLoading(false);
    setBonusOpen(false);
  };

  const onBonusClicked = () => {
    let blocked = false;
    if (new Date(now()) >= new Date("2022-11-20 09:30")) {
      blocked = true;
    }
    setBonusBlocked(blocked);
    setBonusOpen(true);
  };
  const columns: any = [
    {
      title: "Usuario",
      key: "email",
      dataIndex: "email"
    },
    {
      title: "Estado",
      key: "status",
      render: (_: any, record: any) => (
        <div key={record.id}>
          {mySubscription?.isAdmin && record.status === "Pendiente" && (
            <Popconfirm
              title={
                record.status === "Pendiente"
                  ? "¿Deseas aceptar a este usuario? Esto puede tardar unos minutos."
                  : "¿Deseas quitar el acceso a este usuario?"
              }
              okText="Sí"
              cancelText="No"
              icon={null}
              onConfirm={() => changeStatusHandler(record)}
            >
              <span className="Tournament__body__table__link">
                {record.status}
              </span>
            </Popconfirm>
          )}
          {(!mySubscription?.isAdmin || record.status === "Aceptado") && (
            <span>{record.status}</span>
          )}
        </div>
      ),
      align: "right"
    }
  ];

  const positionColumns: any = [
    {
      title: "Equipo",
      key: "name",
      render: (_: any, record: any) => (
        <div
          key={record.id}
          className="Tournament__body__card__group__positions__team"
        >
          <Image
            src={record.flagUrl}
            alt={record.name}
            className="Tournament__body__card__group__positions__image"
          />
          <p>{record.name}</p>
        </div>
      )
    },
    {
      title: "Pts",
      key: "pts",
      dataIndex: "pts",
      align: "center"
    },
    {
      title: "Gf",
      key: "gf",
      dataIndex: "gf",
      align: "center"
    },
    {
      title: "Ga",
      key: "ga",
      dataIndex: "ga",
      align: "center"
    },
    {
      title: "Gd",
      key: "gd",
      dataIndex: "gd",
      align: "center"
    }
  ];

  return (
    <Styles className="Tournament">
      <Layout className="Tournament__layout">
        <Header className="Tournament__header">
          <Image
            src="../../../assets/images/logo.png"
            alt="logo"
            className="Tournament__header__logo"
          />
          <Menu mode="horizontal" className="Tournament__header__menu">
            <Menu.Item key="myTournaments" onClick={myTournamentsHandler}>
              {size.width >= 610 && "Mis Torneos"}
              {size.width < 610 && <HomeOutlined />}
            </Menu.Item>
            <Menu.Item
              key="searchTournaments"
              onClick={searchTournamentsHandler}
            >
              {size.width >= 610 && "Buscar Torneos"}
              {size.width < 610 && <FileSearchOutlined />}
            </Menu.Item>
            <Menu.SubMenu
              key="use rSubMenu"
              className="Tournament__header__submenu"
              icon={
                <UserOutlined className="Tournament__header__submenu__logo" />
              }
            >
              <Menu.Item key="signOut" onClick={signOutHandler}>
                Cerrar Sesión
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Header>
        <Content className="Tournament__body">
          <Card className="Tournament__body__card">
            {!loading && (
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Reglas" key="1">
                  <div className="Tournament__body__card__instructions">
                    <h2>Fase de grupos</h2>
                    <p>
                      En esta fase debes llenar solo los pronósticos de los
                      partidos de la fase de grupos.
                      <br />
                      Adicional debes llenar las bonificaciones extra en donde
                      seleccionas un campeón, subcampeón, 3ro, 4to, mejor
                      jugador y goleador.
                      <br />
                      Los pronósticos debes llenar hasta antes de que empiece el
                      mundial, el 20 de noviembre a las 9h30 se deshabilitará la
                      edición de pronósticos.
                    </p>
                    <h2>Octavos, Cuartos, Semifinal y Final</h2>
                    <p>
                      La fase de octavos se activará una vez que finalice la
                      fase de grupos, la de cuartos una vez que finalice la de
                      octavos y así sucesivamente.
                      <br />
                      La forma de llenar los pronósticos y puntuar será la misma
                      que en la fase de grupos.
                      <br />
                      El período que tienes para llenar lós pronósticos es el
                      tiempo que se tiene entre que se finalizá la fase anterior
                      y empieza la nueva fase.
                    </p>

                    <h3>Explicación puntuación</h3>
                    <p>
                      La puntuación aplica para cada partido en el que llenaste
                      un pronóstico.
                    </p>
                    <p>
                      Se otorga 3 pts por atinar el resultado (ganador o
                      empate).
                    </p>
                    <p>
                      Se otorga 1 pt por atinar a los goles marcados por cada
                      equipo
                    </p>
                    <p>
                      Se otorga 2 pts extras si atinas los goles marcados de los
                      dos equipos
                    </p>
                    <h3>Ejemplos</h3>
                    <p>
                      Pronóstico: Ecuador 1 - 0 Qatar, Real: Ecuador 2 - 1
                      Qatar.
                      <br />
                      <strong>
                        Ganas 3 puntos por atinar el resultado, 0 pts ya que no
                        atinaste ningún marcador, total: 3 pts
                      </strong>
                    </p>
                    <p>
                      Pronóstico: Ecuador 1 - 0 Qatar, Real: Ecuador 2 - 0
                      Qatar.
                      <br />
                      <strong>
                        Ganas 3 puntos por atinar el resultado, 1 pt por atinar
                        el marcador de Qatar, total: 4 pts
                      </strong>
                    </p>
                    <p>
                      Pronóstico: Ecuador 1 - 0 Qatar, Real: Ecuador 1 - 0
                      Qatar.
                      <br />
                      <strong>
                        Ganas 3 puntos por atinar el resultado, 2 pts por atinar
                        el marcador de Ecuador y Qatar y 2 pts extras por atinar
                        los dos marcadores, total: 7 pts
                      </strong>
                    </p>
                    <p>
                      Pronóstico: Ecuador 1 - 0 Qatar, Real: Ecuador 1 - 1
                      Qatar.
                      <br />
                      <strong>
                        Ganas 0 puntos por no atinar el resultado, 1 pt por
                        atinar el marcador de Ecuador, total: 1 punto.
                      </strong>
                    </p>
                    <p>
                      Pronóstico: Ecuador 1 - 0 Qatar, Real: Ecuador 0 - 1
                      Qatar.
                      <br />
                      <strong>
                        Ganas 0 puntos por no atinar el resultado, 0 pts ya que
                        no atinaste ningún marcador, total 0 pts.
                      </strong>
                    </p>
                    <h3>Bonificación extra</h3>
                    <p>Campeón: 15 pts</p>
                    <p>Subcampeón: 10 pts</p>
                    <p>Tercer lugar: 7 pts</p>
                    <p>Cuarto lugar: 5 pts</p>
                    <p>Mejor jugador: 7 pts</p>
                    <p>Máximo goleador: 7 pts</p>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Mis pronósticos" key="2">
                  <h3 className="Tournament__body__card__title">
                    Fase de Grupos
                  </h3>
                  {!!rounds &&
                    !!rounds.length &&
                    orderGroupsByName(
                      rounds.find(
                        (round: Round) => round.name === "Fase de grupos"
                      )?.groups?.items
                    )?.map((group: Group | null, index: number) => (
                      <Card
                        key={index}
                        title={group?.name}
                        type="inner"
                        className="Tournament__body__card__group"
                      >
                        <Row key={index}>
                          <Col sm={24} xs={24} lg={12} md={12}>
                            {!!group &&
                              orderMatchesByDate(group.matches?.items)?.map(
                                (match, key: number) => (
                                  <div
                                    key={key}
                                    className="Tournament__body__card__group__match"
                                    onClick={() => onMatchClicked(match)}
                                  >
                                    <div className="Tournament__body__card__group__container">
                                      <div className="Tournament__body__card__group__match__team">
                                        <Image
                                          src={
                                            match?.matchTeams?.items[0]?.team
                                              ?.flagUrl ?? undefined
                                          }
                                          alt={
                                            match?.matchTeams?.items[0]?.team
                                              ?.name
                                          }
                                          className="Tournament__body__card__group__match__team__flag"
                                        />
                                        <p className="Tournament__body__card__group__match__team__name">
                                          {
                                            match?.matchTeams?.items[0]?.team
                                              ?.name
                                          }
                                        </p>
                                      </div>
                                      <div className="Tournament__body__card__group__match__board">
                                        <span className="Tournament__body__card__group__match__score">
                                          {
                                            subscriptionMatches
                                              .find(
                                                (subMatch: SubscriptionMatch) =>
                                                  subMatch.matchSubscriptionMatchesId ===
                                                  match?.id
                                              )
                                              ?.subscriptionMatchTeams?.items.find(
                                                (
                                                  matchTeam: SubscriptionMatchTeam | null
                                                ) => {
                                                  return (
                                                    matchTeam?.teamSubscriptionMatchTeamsId ===
                                                    match?.matchTeams?.items[0]
                                                      ?.team?.id
                                                  );
                                                }
                                              )?.score
                                          }
                                        </span>
                                        <span className="Tournament__body__card__group__match__team__name">
                                          -
                                        </span>
                                        <span className="Tournament__body__card__group__match__score">
                                          {
                                            subscriptionMatches
                                              .find(
                                                (subMatch: SubscriptionMatch) =>
                                                  subMatch.matchSubscriptionMatchesId ===
                                                  match?.id
                                              )
                                              ?.subscriptionMatchTeams?.items.find(
                                                (
                                                  matchTeam: SubscriptionMatchTeam | null
                                                ) => {
                                                  return (
                                                    matchTeam?.teamSubscriptionMatchTeamsId ===
                                                    match?.matchTeams?.items[1]
                                                      ?.team?.id
                                                  );
                                                }
                                              )?.score
                                          }
                                        </span>
                                      </div>
                                      <div className="Tournament__body__card__group__match__team">
                                        <Image
                                          src={
                                            match?.matchTeams?.items[1]?.team
                                              ?.flagUrl ?? undefined
                                          }
                                          alt={
                                            match?.matchTeams?.items[1]?.team
                                              ?.name
                                          }
                                          className="Tournament__body__card__group__match__team__flag"
                                        />
                                        <p className="Tournament__body__card__group__match__team__name">
                                          {
                                            match?.matchTeams?.items[1]?.team
                                              ?.name
                                          }
                                        </p>
                                      </div>
                                    </div>
                                    <p className="Tournament__body__card__group__match__date">
                                      {format(
                                        new Date(match?.matchDate ?? now()),
                                        "MMMM dd, hh:mm",
                                        { locale: es }
                                      )}
                                    </p>
                                  </div>
                                )
                              )}
                          </Col>
                          <Col
                            sm={24}
                            xs={24}
                            lg={12}
                            md={12}
                            className="Tournament__body__card__group__positions"
                          >
                            <Table
                              key={index}
                              columns={positionColumns}
                              dataSource={getGroupPositionsByGroup(
                                subscriptionMatches,
                                group
                              )}
                              pagination={false}
                            />
                          </Col>
                        </Row>
                      </Card>
                    ))}
                  <Card
                    title="Bonificaciónes"
                    type="inner"
                    className="Tournament__body__card__group"
                  >
                    <Row>
                      <Col sm={24} xs={24} lg={12} md={12}>
                        <div
                          className="Tournament__body__card__group__bonus"
                          onClick={onBonusClicked}
                        >
                          <p className="Tournament__body__card__group__bonus__text">
                            Llena tus bonificaciones!
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Inscritos" key="3">
                  <Table
                    dataSource={subscriptions}
                    columns={columns}
                    loading={loading}
                    pagination={{ defaultPageSize: 50 }}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Posiciones" key="4">
                  Se habilitará una vez que inicien los partidos
                </Tabs.TabPane>
              </Tabs>
            )}
            {loading && <Spin />}
          </Card>
          <SaveMatchForm
            onCancel={onCancel}
            onCreate={onCreate}
            open={open}
            match={selectedMatch}
            loading={saveLoading}
            blocked={matchBlocked}
            pollaId={pid as string}
          />
          <SaveBonusForm
            onCancel={onCancelBonus}
            onCreate={onCreateBonus}
            open={bonusOpen}
            loading={saveBonusLoading}
            subscriptionId={mySubscription?.id}
            blocked={bonusBlocked}
            pollaId={pid as string}
          />
        </Content>
      </Layout>
    </Styles>
  );
};

Tournament.defaultProps = {};

export default Tournament;
