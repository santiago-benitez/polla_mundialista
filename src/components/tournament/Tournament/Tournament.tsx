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
import { format } from "date-fns";
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
  SubscriptionMatchTeam
} from "../../../API";
import { orderGroupsByName, orderMatchesByDate } from "./Tournament.utils";
import { now } from "moment";
import SaveMatchForm from "../SaveMatchForm/SaveMatchForm";

const Tournament: React.FC<Props> = props => {
  const router = useRouter();
  const { signOut, user } = useAuthenticator(context => [context.user]);
  const { pid } = router.query;
  const [loading, setLoading] = useState<boolean>(false);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [subscriptions, setSubscriptions] = useState<PollaSubscription[]>([]);
  const [subscriptionMatches, setSubscriptionMatches] = useState<
    SubscriptionMatch[]
  >([]);
  // const [subscriptionGroupTeams, setSubscriptionGroupTeams] = useState<
  //   SubscriptionGroupTeam[]
  // >([]);
  const [rounds, setRounds] = useState<Round[] | undefined>(undefined);
  const [mySubscription, setMySubscription] =
    useState<PollaSubscription | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
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
        // // fetch subscription group teams
        // const subscriptionGroupTeamsFilter = {
        //   pollaSubscriptionSubscriptionGroupsId: {
        //     eq: mySubscriptionFound.id
        //   }
        // };
        // const subscriptionGroupTeamsResult: any = await API.graphql({
        //   query: queries.listSubscriptionGroupTeams,
        //   variables: { filter: subscriptionGroupTeamsFilter }
        // });
        // const fetchedSubscriptionGroupTeams =
        //   subscriptionGroupTeamsResult?.data?.listSubscriptionGroupTeams?.items;
        // setSubscriptionGroupTeams(fetchedSubscriptionGroupTeams);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, [pid, user]);

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
      console.log("error");
      message.error("Error al crear el torneo");
    }
    setLoading(false);
  };

  const onMatchClicked = (match: Match | null) => {
    if (match) {
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
        console.log("Opcion A");
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
        console.log("Opcion B");
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
      console.log("Opcion C");
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
        console.log(newSubscriptionMatchResult, "NEW SUBSCRIPTION MATCH");
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
        console.log(createTeamAInput, "Input TEAM A");
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
        console.log(createTeamBInput, "Input TEAM B");
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
        <div>
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
              Mis Torneos
            </Menu.Item>
            <Menu.Item
              key="searchTournaments"
              onClick={searchTournamentsHandler}
            >
              Buscar Torneos
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
                      En esta fase solo puntuarán los resultados de la fase de
                      grupos.
                      <br />
                      Sin embargo debes llenar todos los resultados incluídos
                      octavos de final, cuartos de final, semifinal, 3ro y 4to
                      puesto y final. <br />
                      Adicional habrá una bonificación si atinas al campeón,
                      subcampeón, 3ro y 4to.
                    </p>

                    <h3>Explicación puntuación</h3>
                    <p>3 pts por atinar el resultado (ganador o empate)</p>
                    <p>1 pt por atinar a los goles marcados por cada equipo</p>
                    <p>
                      2 pts extras si atinas los goles marcados de los dos
                      equipos
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
                    {/* <p>Bono al Goleador: 5 pts</p>
                    <p>Bono al Mejor jugador: 5 pts</p> */}
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Mis prónosticos" key="2">
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
                        <Row>
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
                          <Col sm={24} xs={24} lg={12} md={12}></Col>
                        </Row>
                      </Card>
                    ))}
                </Tabs.TabPane>
                <Tabs.TabPane tab="Inscritos" key="3">
                  <Table
                    dataSource={subscriptions}
                    columns={columns}
                    loading={loading}
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
          />
        </Content>
      </Layout>
    </Styles>
  );
};

Tournament.defaultProps = {};

export default Tournament;
