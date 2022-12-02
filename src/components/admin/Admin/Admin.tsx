import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

import Styles from "./Admin.styles";
import { AdminProps as Props } from "./Admin.types";
import * as queries from "../../../graphql/queries";
import * as mutations from "../../../graphql/mutations";
import { orderMatchesByDate } from "../../tournament/Tournament/Tournament.utils";
import {
  Match,
  PollaMundialista,
  PollaSubscription,
  SubscriptionMatch,
  UpdateMatchTeamInput,
  UpdateSubscriptionMatchInput
} from "../../../API";
import {
  Button,
  Form,
  InputNumber,
  message,
  Radio,
  Row,
  Select,
  Table
} from "antd";
import { calculatePoints } from "./Admin.utils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

const Admin: React.FC<Props> = props => {
  const { user } = useAuthenticator(context => [context.user]);
  const [matches, setMatches] = useState<any>([]);
  const [pollas, setPollas] = useState<any>([]);
  const [validatedSubscriptions, setValidatedSubscriptions] = useState<any>([]);
  const [teamAScore, setTeamAScore] = useState<string | null | undefined>();
  const [teamBScore, setTeamBScore] = useState<string | null | undefined>();
  const [completedMatches, setCompletedMatches] = useState<
    (Match | null)[] | undefined
  >([]);
  const [completedPollas, setCompletedPollas] = useState<
    (PollaMundialista | null)[] | undefined
  >([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | undefined>();
  const [selectedPolla, setSelectedPolla] = useState<
    PollaMundialista | undefined
  >();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (user?.attributes?.sub) {
      setLoading(false);
      if (user.attributes.sub !== "9bc4bd2f-1e2a-4900-81a8-88f30c00d129") {
        router.push("/");
      }
    }
  }, [user, router]);

  useEffect(() => {
    (async () => {
      try {
        // get Matches
        const resultMatches: any = await API.graphql({
          query: queries.listMatches,
          variables: { limit: "10000" }
        });
        const fetchedMatches = resultMatches?.data?.listMatches?.items;
        if (fetchedMatches && fetchedMatches.length) {
          const sortedMatches = orderMatchesByDate(fetchedMatches);
          setCompletedMatches(sortedMatches);
          const mappedMatches = sortedMatches?.map(sortedMatch => {
            return {
              value: sortedMatch?.id,
              label: `${sortedMatch?.matchTeams?.items[0]?.team?.name} vs ${sortedMatch?.matchTeams?.items[1]?.team?.name}`
            };
          });
          setMatches(mappedMatches);
        }
        // get Pollas
        const resultPollas: any = await API.graphql({
          query: queries.listPollaMundialistas,
          variables: { limit: "10000" }
        });
        const fetchedPollas = resultPollas?.data?.listPollaMundialistas?.items;
        setCompletedPollas(fetchedPollas);
        const mappedPollas = fetchedPollas.map((polla: PollaMundialista) => {
          return {
            value: polla.id,
            label: polla.name
          };
        });
        setPollas(mappedPollas);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSelect = (value: string) => {
    if (completedMatches) {
      const foundMatch = completedMatches.find((matchToFind: Match | null) => {
        return matchToFind?.id === value;
      });
      if (foundMatch) {
        setSelectedMatch(foundMatch);
      }
    }
  };

  const onSelectPolla = (value: string) => {
    if (completedPollas) {
      const foundPolla = completedPollas?.find(
        (polla: PollaMundialista | null) => {
          return value === polla?.id;
        }
      );
      if (foundPolla) {
        setSelectedPolla(foundPolla);
      }
    }
  };

  const onFinish = async (values: any) => {
    const teamScoreA = values.teamAScore;
    const teamScoreB = values.teamBScore;
    const winner = values.winner;

    // 1.- get Subscription Matches
    let nextToken = null;
    let fetchedSubscriptionMatches: any = [];
    const filter = {
      matchSubscriptionMatchesId: {
        eq: selectedMatch?.id
      }
    };
    do {
      const subscriptionMatchesResult: any = await API.graphql({
        query: queries.listSubscriptionMatches,
        variables: { filter, limit: "10000", nextToken }
      });
      if (subscriptionMatchesResult?.data?.listSubscriptionMatches) {
        fetchedSubscriptionMatches = [
          ...fetchedSubscriptionMatches,
          ...subscriptionMatchesResult.data.listSubscriptionMatches.items
        ];
        nextToken =
          subscriptionMatchesResult.data.listSubscriptionMatches.nextToken;
      }
    } while (nextToken != null);

    // 2.- save match teams results
    if (
      selectedMatch?.matchTeams?.items[0]?.id &&
      selectedMatch?.matchTeams?.items[1]?.id
    ) {
      const teamPointsA =
        +teamScoreA >= +teamScoreB
          ? +teamScoreA > +teamScoreB
            ? 3
            : !winner
            ? 1
            : winner === "A"
            ? 3
            : 0
          : 0;
      const teamPointsB =
        +teamScoreB >= +teamScoreA
          ? +teamScoreB > +teamScoreA
            ? 3
            : !winner
            ? 1
            : winner === "B"
            ? 3
            : 0
          : 0;
      const matchTeamAInput: UpdateMatchTeamInput = {
        id: selectedMatch?.matchTeams?.items[0]?.id,
        score: teamScoreA,
        points: teamPointsA
      };

      await API.graphql({
        query: mutations.updateMatchTeam,
        variables: { input: matchTeamAInput }
      });
      const matchTeamBInput: UpdateMatchTeamInput = {
        id: selectedMatch?.matchTeams?.items[1]?.id,
        score: teamScoreB,
        points: teamPointsB
      };
      await API.graphql({
        query: mutations.updateMatchTeam,
        variables: { input: matchTeamBInput }
      });

      // 3.- save subscription match teams results
      if (fetchedSubscriptionMatches) {
        let savedSubscriptionMatches = 0;
        fetchedSubscriptionMatches.forEach(
          async (fetchedSubscriptionMatch: SubscriptionMatch) => {
            try {
              if (fetchedSubscriptionMatch?.subscriptionMatchTeams?.items) {
                const { items } =
                  fetchedSubscriptionMatch?.subscriptionMatchTeams ?? [];
                const subscriptionMatchTeamA = items.find(
                  (subsMatchTeam: any) => {
                    return (
                      subsMatchTeam.teamSubscriptionMatchTeamsId ===
                      selectedMatch?.matchTeams?.items[0]?.teamMatchTeamsId
                    );
                  }
                );
                const subscriptionMatchTeamB = items.find(
                  (subsMatchTeam: any) => {
                    return (
                      subsMatchTeam.teamSubscriptionMatchTeamsId ===
                      selectedMatch?.matchTeams?.items[1]?.teamMatchTeamsId
                    );
                  }
                );
                if (subscriptionMatchTeamA && subscriptionMatchTeamB) {
                  const updateSubscriptionMatchInput: UpdateSubscriptionMatchInput =
                    {
                      id: fetchedSubscriptionMatch.id,
                      subscriptionPoints: calculatePoints(
                        teamScoreA,
                        teamScoreB,
                        teamPointsA,
                        teamPointsB,
                        subscriptionMatchTeamA,
                        subscriptionMatchTeamB
                      )
                    };
                  await API.graphql({
                    query: mutations.updateSubscriptionMatch,
                    variables: { input: updateSubscriptionMatchInput }
                  });
                }
              }
              savedSubscriptionMatches++;
            } catch (error) {
              console.log(error);
            }
          }
        );
        setTimeout(() => {
          message.success(
            `${savedSubscriptionMatches} de ${fetchedSubscriptionMatches.length} guardados exitosamente`
          );
        }, 4000);
      }
    }
  };

  const onFinishValidate = (value: any) => {
    const validateSubscriptions = selectedPolla?.pollaSubscriptions?.items.map(
      (subscription: PollaSubscription | null) => {
        let validatedMatches = 0;
        subscription?.subscriptionMatches?.items.forEach(
          (subscriptionMatch: SubscriptionMatch | null) => {
            if (
              subscriptionMatch?.subscriptionMatchTeams?.items?.length === 2
            ) {
              validatedMatches++;
            }
          }
        );
        return {
          email: subscription?.email,
          validatedMatches,
          validatedBonus: subscription?.subscriptionBonuses?.items.length
            ? "SI"
            : "NO"
        };
      }
    );
    setValidatedSubscriptions(validateSubscriptions);
  };

  const columns: any = [
    {
      title: "Usuario",
      key: "email",
      dataIndex: "email"
    },
    {
      title: "Pr.",
      key: "validatedMatches",
      dataIndex: "validatedMatches"
    },
    {
      title: "Bonus",
      key: "validatedBonus",
      dataIndex: "validatedBonus"
    }
  ];

  return (
    <Styles className="Admin">
      {!loading && (
        <div>
          <Row>
            <Form
              form={form}
              className="Admin__Form"
              onFinish={onFinish}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            >
              <Form.Item
                name="matchId"
                label="Equipo"
                rules={[{ required: true, message: "Obligatorio!" }]}
              >
                <Select
                  filterOption={(input, option: any) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  showSearch
                  placeholder="Selecciona un equipo"
                  options={matches}
                  onSelect={onSelect}
                />
              </Form.Item>
              <Form.Item
                name="teamAScore"
                label={selectedMatch?.matchTeams?.items[0]?.team?.name}
                rules={[
                  {
                    required: true,
                    message: "Obligatorio!"
                  }
                ]}
              >
                <InputNumber
                  onChange={(value: string | null) => setTeamAScore(value)}
                />
              </Form.Item>
              <Form.Item
                name="teamBScore"
                label={selectedMatch?.matchTeams?.items[1]?.team?.name}
                rules={[
                  {
                    required: true,
                    message: "Obligatorio!"
                  }
                ]}
              >
                <InputNumber
                  onChange={(value: string | null) => setTeamBScore(value)}
                />
              </Form.Item>
              {teamAScore !== null &&
                teamAScore !== undefined &&
                teamAScore === teamBScore && (
                  <Form.Item name="winner" label={null}>
                    <Radio.Group>
                      <Radio value={"A"}>
                        {selectedMatch?.matchTeams?.items[0]?.team?.name}
                      </Radio>
                      <Radio value={"B"}>
                        {selectedMatch?.matchTeams?.items[1]?.team?.name}
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                )}
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Guardar Resultado
                </Button>
              </Form.Item>
            </Form>
          </Row>
          <Row style={{ padding: "0 2rem", marginBottom: "1rem" }}>
            <Select
              filterOption={(input, option: any) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              showSearch
              placeholder="Selecciona una polla"
              options={pollas}
              onSelect={onSelectPolla}
            />
          </Row>
          <Row style={{ padding: "0 2rem", marginBottom: "1rem" }}>
            <Button type="primary" htmlType="submit" onClick={onFinishValidate}>
              Validar Polla
            </Button>
          </Row>
          <Row style={{ padding: "0 2rem" }}>
            <Table
              dataSource={validatedSubscriptions}
              pagination={false}
              columns={columns}
              size="small"
            ></Table>
          </Row>
        </div>
      )}
    </Styles>
  );
};

Admin.defaultProps = {};

export default Admin;
