import { Form, Input, Modal, Select, Spin } from "antd";
import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Tournament } from "../../../API";
import * as queries from "../../../graphql/queries";

import Styles from "./CreateTournamentForm.styles";
import { CreateTournamentFormProps as Props } from "./CreateTournamentForm.types";

const CreateTournamentForm: React.FC<Props> = props => {
  const [form] = Form.useForm();
  const { open, onCreate, onCancel, loading } = props;
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response: any = await API.graphql({
          query: queries.listTournaments,
          variables: { limit: "10000" }
        });
        const fetchedTournaments = response?.data?.listTournaments?.items;
        if (fetchedTournaments && fetchedTournaments.length) {
          const mappedTournaments = fetchedTournaments.map(
            (tournament: Tournament) => {
              return {
                value: tournament.id,
                label: tournament.name
              };
            }
          );
          setTournaments(mappedTournaments);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Styles className="CreateTournamentForm">
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
              name="tournamentPollasMundialistasId"
              label="Competición"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select
                placeholder="Selecciona una competición"
                options={tournaments}
              />
            </Form.Item>
            <Form.Item
              name="name"
              label="Nombre"
              rules={[
                {
                  required: true,
                  message: "Nombre es obligatorio"
                }
              ]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
            name="subscriptionPrice"
            label="Precio por usuario"
            rules={[
              {
                required: true,
                message: "Precio es obligatorio"
              }
            ]}
          >
            <Input />
          </Form.Item> */}
          </Form>
        )}
        {loading && (
          <div
            className="CreateTournamentForm__loading"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <p className="TEST">
              Se están creando los grupos, cuadros y tu subscripción, esto puede
              tardar unos minutos
            </p>
            <Spin />
          </div>
        )}
      </Modal>
    </Styles>
  );
};

CreateTournamentForm.defaultProps = {};

export default CreateTournamentForm;
