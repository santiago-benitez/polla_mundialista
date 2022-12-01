import { Image } from "@aws-amplify/ui-react";
import { Form, Modal, Spin, InputNumber, Row, Col } from "antd";
import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { SubscriptionMatch } from "../../../API";
import * as queries from "../../../graphql/queries";
import { removeEmailFromText } from "../Tournament/Tournament.utils";

import Styles from "./SaveMatchForm.styles";
import { SaveMatchFormProps as Props } from "./SaveMatchForm.types";

const SaveMatchForm: React.FC<Props> = props => {
  const [form] = Form.useForm();
  const { open, onCreate, onCancel, loading, match, blocked, pollaId } = props;
  const [subscriptionMatches, setSubscriptionMatches] = useState([]);
  const [loadingMatches, setLoadingMatches] = useState<boolean>(false);

  useEffect(() => {
    if (blocked) {
      (async () => {
        try {
          if (match?.id) {
            setLoadingMatches(true);
            const subscriptionMatchesFilter = {
              matchSubscriptionMatchesId: {
                eq: match?.id
              }
            };
            let nextToken = null;
            let fetchedSubscriptionMatches: any = [];
            do {
              const subscriptionMatchesResult: any = await API.graphql({
                query: queries.listSubscriptionMatches,
                variables: {
                  filter: subscriptionMatchesFilter,
                  limit: "10000",
                  nextToken
                }
              });
              if (subscriptionMatchesResult?.data?.listSubscriptionMatches) {
                fetchedSubscriptionMatches = [
                  ...fetchedSubscriptionMatches,
                  ...subscriptionMatchesResult.data.listSubscriptionMatches
                    .items
                ];
                nextToken =
                  subscriptionMatchesResult.data.listSubscriptionMatches
                    .nextToken;
              }
            } while (nextToken != null);
            if (
              fetchedSubscriptionMatches &&
              fetchedSubscriptionMatches.length
            ) {
              const filteredMatches = fetchedSubscriptionMatches.filter(
                (fetchedMatch: SubscriptionMatch) => {
                  return (
                    fetchedMatch.subscription
                      ?.pollaMundialistaPollaSubscriptionsId === pollaId
                  );
                }
              );
              const sortedMatches = filteredMatches.sort(
                (a: SubscriptionMatch, b: SubscriptionMatch) => {
                  if (a.subscriptionPoints < b.subscriptionPoints) {
                    return 1;
                  }
                  if (a.subscriptionPoints > b.subscriptionPoints) {
                    return -1;
                  }
                  if (a.subscriptionPoints === b.subscriptionPoints) {
                    return (
                      a?.subscription?.email.localeCompare(
                        b?.subscription?.email ?? ""
                      ) ?? 0
                    );
                  }
                  return 0;
                }
              );
              const mappedMatches = sortedMatches.map(
                (sortedMatch: SubscriptionMatch) => {
                  const matchTeams =
                    sortedMatch.subscriptionMatchTeams?.items.sort((a, b) => {
                      return (
                        a?.team?.name.localeCompare(b?.team?.name ?? "") ?? 0
                      );
                    });
                  return {
                    ...sortedMatch,
                    subscriptionMatchTeams: {
                      ...sortedMatch.subscriptionMatchTeams,
                      items: matchTeams
                    }
                  };
                }
              );
              setSubscriptionMatches(mappedMatches);
            }
          }
          setLoadingMatches(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [blocked, match?.id, pollaId]);

  return (
    <Styles className="CreateTournamentForm">
      <Modal
        open={open}
        title="Pronóstico"
        okText="Guardar"
        cancelText="Cancelar"
        onCancel={onCancel}
        width={500}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              const payload = {
                match,
                result: values
              };
              onCreate(payload);
            })
            .catch(info => {});
        }}
        okButtonProps={{ disabled: loading || blocked }}
      >
        {!loading && !blocked && !!match?.matchTeams?.items.length && (
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: "public" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "6rem"
                }}
              >
                <Image
                  src={match?.matchTeams?.items[0]?.team?.flagUrl ?? undefined}
                  alt={match?.matchTeams?.items[0]?.team?.name}
                  style={{
                    width: "5rem",
                    height: "3rem",
                    marginBottom: "0.4rem"
                  }}
                />
                <p>{match?.matchTeams?.items[0]?.team?.name}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "9rem"
                }}
              >
                <Form.Item
                  name="teamA"
                  label={null}
                  rules={[
                    {
                      required: true,
                      message: "!"
                    }
                  ]}
                >
                  <InputNumber
                    style={{
                      width: "3.5rem"
                    }}
                  />
                </Form.Item>
                <span
                  style={{
                    paddingTop: "0.2rem"
                  }}
                >
                  -
                </span>
                <Form.Item
                  name="teamB"
                  label={null}
                  rules={[
                    {
                      required: true,
                      message: "!"
                    }
                  ]}
                >
                  <InputNumber
                    style={{
                      width: "3.5rem"
                    }}
                  />
                </Form.Item>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "6rem"
                }}
              >
                <Image
                  src={match?.matchTeams?.items[1]?.team?.flagUrl ?? undefined}
                  alt={match?.matchTeams?.items[1]?.team?.name}
                  style={{
                    width: "5rem",
                    marginBottom: "0.4rem"
                  }}
                />
                <p>{match?.matchTeams?.items[1]?.team?.name}</p>
              </div>
            </div>
          </Form>
        )}
        {!loading && !blocked && !match?.matchTeams?.items.length && (
          <Row>
            <p>Espera a que se definan los que clasifican para este partido</p>
          </Row>
        )}
        {(loading || loadingMatches) && (
          <div
            className="CreateTournamentForm__loading"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Spin />
          </div>
        )}
        {blocked && !loadingMatches && (
          <div>
            <Row>
              <p>
                El periodo para llenar el pronóstico de este partido concluyó.
                Los pronósticos de los participantes son los siguientes:
              </p>
            </Row>
            {!!subscriptionMatches &&
              subscriptionMatches.map(
                (subscriptionMatch: SubscriptionMatch) => (
                  <Row key={subscriptionMatch.id} justify="space-around">
                    <Col span="12">
                      {removeEmailFromText(
                        subscriptionMatch.subscription?.email
                      )}
                      :
                    </Col>
                    <Col
                      span="12"
                      style={{
                        display: "flex",
                        justifyContent: "space-around"
                      }}
                    >
                      <div>
                        <Image
                          src={
                            subscriptionMatch.subscriptionMatchTeams?.items[0]
                              ?.team?.flagUrl ?? ""
                          }
                          alt="flag"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />
                      </div>
                      <div>
                        {
                          subscriptionMatch.subscriptionMatchTeams?.items[0]
                            ?.score
                        }{" "}
                        -{" "}
                        {
                          subscriptionMatch.subscriptionMatchTeams?.items[1]
                            ?.score
                        }
                      </div>
                      <div>
                        <Image
                          src={
                            subscriptionMatch.subscriptionMatchTeams?.items[1]
                              ?.team?.flagUrl ?? ""
                          }
                          alt="flag"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />
                      </div>
                      <div>Pts: {subscriptionMatch.subscriptionPoints}</div>
                    </Col>
                  </Row>
                )
              )}
          </div>
        )}
      </Modal>
    </Styles>
  );
};

SaveMatchForm.defaultProps = {};

export default SaveMatchForm;
