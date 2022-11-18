import { Col, Form, Modal, Row, Select, Spin, Tabs } from "antd";
import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Player, SubscriptionBonus, Team } from "../../../API";
import * as queries from "../../../graphql/queries";
import { removeEmailFromText } from "../Tournament/Tournament.utils";
import Styles from "./SaveBonusForm.styles";
import { SaveBonusFormProps as Props } from "./SaveBonusForm.types";

const SaveBonusForm: React.FC<Props> = props => {
  const [form] = Form.useForm();
  const {
    open,
    onCreate,
    onCancel,
    loading,
    subscriptionId,
    blocked,
    pollaId
  } = props;
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [bonuses, setBonuses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (blocked) {
          const bonusesResult: any = await API.graphql({
            query: queries.listSubscriptionBonuses,
            variables: { limit: "10000" }
          });
          const fetchedBonuses =
            bonusesResult?.data?.listSubscriptionBonuses?.items;
          if (fetchedBonuses && fetchedBonuses.length) {
            const filteredBonuses = fetchedBonuses.filter(
              (fetchedBonus: SubscriptionBonus) => {
                return (
                  fetchedBonus.subscription
                    ?.pollaMundialistaPollaSubscriptionsId === pollaId
                );
              }
            );
            const sortedBonuses = filteredBonuses.sort(
              (a: SubscriptionBonus, b: SubscriptionBonus) => {
                if (a.subscriptionPoints > b.subscriptionPoints) {
                  return 1;
                }
                if (a.subscriptionPoints < b.subscriptionPoints) {
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
            setBonuses(sortedBonuses);
          }
        } else {
          const teamsResult: any = await API.graphql({
            query: queries.listTeams,
            variables: { limit: "10000" }
          });
          const fetchedTeams = teamsResult?.data?.listTeams?.items;
          if (fetchedTeams && fetchedTeams.length) {
            const mappedTeams = fetchedTeams.map((team: Team) => {
              return {
                value: team.id,
                label: team.name
              };
            });
            const sortedTeams = mappedTeams.sort((a: any, b: any) => {
              return a?.label.localeCompare(b?.label ?? "") ?? 0;
            });
            setTeams(sortedTeams);
          }
          const playersResult: any = await API.graphql({
            query: queries.listPlayers,
            variables: { limit: "10000" }
          });
          const fetchedPlayers = playersResult?.data?.listPlayers?.items;
          if (fetchedPlayers && fetchedPlayers.length) {
            const mappedPlayers = fetchedPlayers.map((player: Player) => {
              return {
                value: player.id,
                label: player.name
              };
            });
            const sortedPlayers = mappedPlayers.sort((a: any, b: any) => {
              return a?.label.localeCompare(b?.label ?? "") ?? 0;
            });
            setPlayers(sortedPlayers);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [blocked, pollaId]);

  useEffect(() => {
    (async () => {
      try {
        // fetch bonuses
        if (open && subscriptionId) {
          const filter = {
            pollaSubscriptionSubscriptionBonusesId: {
              eq: subscriptionId
            }
          };
          const bonusResult: any = await API.graphql({
            query: queries.listSubscriptionBonuses,
            variables: { filter, limit: "10000" }
          });
          const fetchedBonuses: SubscriptionBonus[] =
            bonusResult?.data?.listSubscriptionBonuses?.items;
          if (fetchedBonuses && fetchedBonuses[0]) {
            form.setFieldsValue(fetchedBonuses[0]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [subscriptionId, open, form]);

  return (
    <Styles className="SaveBonusForm">
      <Modal
        open={open}
        title="Bonificaciones"
        okText="Guardar"
        cancelText="Cancelar"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
            })
            .catch(info => {});
        }}
        okButtonProps={{ disabled: loading }}
      >
        {!loading && !blocked && (
          <Form form={form} layout="vertical" name="form_in_modal">
            <Form.Item
              name="championId"
              label="Campeón"
              rules={[{ required: true, message: "Obligatorio!" }]}
            >
              <Select
                filterOption={(input, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                showSearch
                placeholder="Selecciona al campeón"
                options={teams}
              />
            </Form.Item>
            <Form.Item
              name="secondId"
              label="Subcampeón"
              rules={[{ required: true, message: "Obligatorio!" }]}
            >
              <Select
                filterOption={(input, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                showSearch
                placeholder="Selecciona al subcampeón"
                options={teams}
              />
            </Form.Item>
            <Form.Item
              name="thirdId"
              label="Tercero"
              rules={[{ required: true, message: "Obligatorio!" }]}
            >
              <Select
                filterOption={(input, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                showSearch
                placeholder="Selecciona al tercero"
                options={teams}
              />
            </Form.Item>
            <Form.Item
              name="fourthId"
              label="Cuarto"
              rules={[{ required: true, message: "Obligatorio!" }]}
            >
              <Select
                filterOption={(input, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                showSearch
                placeholder="Selecciona al cuarto"
                options={teams}
              />
            </Form.Item>
            <Form.Item
              name="bestPlayerId"
              label="Mejor jugador"
              rules={[{ required: true, message: "Obligatorio!" }]}
            >
              <Select
                placeholder="Selecciona el mejor jugador"
                filterOption={(input, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                showSearch
                options={players}
              />
            </Form.Item>
            <Form.Item
              name="maxScorerId"
              label="Máximo goleador"
              rules={[{ required: true, message: "Obligatorio!" }]}
            >
              <Select
                filterOption={(input, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                showSearch
                placeholder="Selecciona el goleador"
                options={players}
              />
            </Form.Item>
          </Form>
        )}
        {loading && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Spin />
          </div>
        )}
        {blocked && !loading && (
          <div>
            <Row>
              <p>
                El periodo para llenar las bonificaciones concluyó. Los
                pronósticos de los participantes son los siguientes:
              </p>
            </Row>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="1ro" key="1">
                {!!bonuses &&
                  bonuses.map((bonus: SubscriptionBonus) => (
                    <Row key={bonus.id}>
                      <Col span="12">
                        {removeEmailFromText(bonus.subscription?.email)}:
                      </Col>
                      <Col span="12">{bonus.champion?.name}</Col>
                    </Row>
                  ))}
              </Tabs.TabPane>
              <Tabs.TabPane tab="2do" key="2">
                {!!bonuses &&
                  bonuses.map((bonus: SubscriptionBonus) => (
                    <Row key={bonus.id}>
                      <Col span="12">
                        {removeEmailFromText(bonus.subscription?.email)}:
                      </Col>
                      <Col span="12">{bonus.second?.name}</Col>
                    </Row>
                  ))}
              </Tabs.TabPane>
              <Tabs.TabPane tab="3ro" key="3">
                {!!bonuses &&
                  bonuses.map((bonus: SubscriptionBonus) => (
                    <Row key={bonus.id}>
                      <Col span="12">
                        {removeEmailFromText(bonus.subscription?.email)}:
                      </Col>
                      <Col span="12">{bonus.third?.name}</Col>
                    </Row>
                  ))}
              </Tabs.TabPane>
              <Tabs.TabPane tab="4to" key="4">
                {!!bonuses &&
                  bonuses.map((bonus: SubscriptionBonus) => (
                    <Row key={bonus.id}>
                      <Col span="12">
                        {removeEmailFromText(bonus.subscription?.email)}:
                      </Col>
                      <Col span="12">{bonus.fourth?.name}</Col>
                    </Row>
                  ))}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Mejor J." key="5">
                {!!bonuses &&
                  bonuses.map((bonus: SubscriptionBonus) => (
                    <Row key={bonus.id}>
                      <Col span="12">
                        {removeEmailFromText(bonus.subscription?.email)}:
                      </Col>
                      <Col span="12">{bonus.bestPlayer?.name}</Col>
                    </Row>
                  ))}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Goleador" key="6">
                {!!bonuses &&
                  bonuses.map((bonus: SubscriptionBonus) => (
                    <Row key={bonus.id}>
                      <Col span="12">
                        {removeEmailFromText(bonus.subscription?.email)}:
                      </Col>
                      <Col span="12">{bonus.maxScorer?.name}</Col>
                    </Row>
                  ))}
              </Tabs.TabPane>
            </Tabs>
          </div>
        )}
      </Modal>
    </Styles>
  );
};

SaveBonusForm.defaultProps = {};

export default SaveBonusForm;
