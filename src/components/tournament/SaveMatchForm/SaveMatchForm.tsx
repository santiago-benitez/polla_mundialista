import { Image } from "@aws-amplify/ui-react";
import { Form, Modal, Spin, InputNumber } from "antd";
import React from "react";

import Styles from "./SaveMatchForm.styles";
import { SaveMatchFormProps as Props } from "./SaveMatchForm.types";

const SaveMatchForm: React.FC<Props> = props => {
  const [form] = Form.useForm();
  const { open, onCreate, onCancel, loading, match } = props;
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
        okButtonProps={{ disabled: loading }}
      >
        {!loading && (
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
        {loading && (
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
      </Modal>
    </Styles>
  );
};

SaveMatchForm.defaultProps = {};

export default SaveMatchForm;
