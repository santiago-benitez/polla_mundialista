import { Form, Modal, Select, Spin } from "antd";
import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Player, SubscriptionBonus, Team } from "../../../API";
import * as queries from "../../../graphql/queries";
import Styles from "./SaveBonusForm.styles";
import { SaveBonusFormProps as Props } from "./SaveBonusForm.types";

const SaveBonusForm: React.FC<Props> = props => {
  const [form] = Form.useForm();
  const { open, onCreate, onCancel, loading, subscriptionId } = props;
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
        {!loading && (
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
      </Modal>
    </Styles>
  );
};

SaveBonusForm.defaultProps = {};

export default SaveBonusForm;
