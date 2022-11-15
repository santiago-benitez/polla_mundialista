import { Form, Modal, Select, Spin } from "antd";
import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Team } from "../../../API";
import * as queries from "../../../graphql/queries";
import Styles from "./SaveBonusForm.styles";
import { SaveBonusFormProps as Props } from "./SaveBonusForm.types";

const SaveBonusForm: React.FC<Props> = props => {
  const [form] = Form.useForm();
  const { open, onCreate, onCancel, loading } = props;
  const [teams, setTeams] = useState([]);
  // const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const teamsResult: any = await API.graphql({
          query: queries.listTeams
        });
        const fetchedTeams = teamsResult?.data?.listTeams?.items;
        if (fetchedTeams && fetchedTeams.length) {
          const mappedTeams = fetchedTeams.map((team: Team) => {
            return {
              value: team.id,
              label: team.name
            };
          });
          setTeams(mappedTeams);
        }
        // const playersResult: any = await API.graphql({
        //   query: queries.listPlayers
        // });
        // const fetchedPlayers = playersResult?.data?.listTeams?.items;
        // if (fetchedPlayers && fetchedPlayers.length) {
        //   const mappedPlayers = fetchedPlayers.map((player: Player) => {
        //     return {
        //       value: player.id,
        //       label: player.name
        //     };
        //   });
        // setPlayers(mappedPlayers);
        // }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Styles className="SaveBonusForm">
      <Modal
        open={open}
        title="Nuevo Torneo"
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
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: "public" }}
          >
            <Form.Item
              name=""
              label="Campeón"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="Selecciona al campeón" options={teams} />
            </Form.Item>
            <Form.Item
              name="tournamentPollasMundialistasId"
              label="Subcampeón"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="Selecciona al subcampeón" options={teams} />
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
