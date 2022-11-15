import {
  Card,
  Layout,
  Menu,
  message,
  Popconfirm,
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
import { PollaSubscription, UpdatePollaSubscriptionInput } from "../../../API";
import { createSubscriptionBundleService } from "../../../services/subscription.service";

const Tournament: React.FC<Props> = props => {
  const router = useRouter();
  const { signOut, user } = useAuthenticator(context => [context.user]);
  const { pid } = router.query;
  const [loading, setLoading] = useState<boolean>(false);
  const [subscriptions, setSubscriptions] = useState<PollaSubscription[]>([]);
  const [mySubscription, setMySubscription] =
    useState<PollaSubscription | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const filter = {
          pollaMundialistaPollaSubscriptionsId: {
            eq: pid
          }
        };
        const subscriptionsResult: any = await API.graphql({
          query: queries.listPollaSubscriptions,
          variables: { filter }
        });

        const fetchedSubscriptions =
          subscriptionsResult?.data?.listPollaSubscriptions?.items;
        setSubscriptions(fetchedSubscriptions);
        const mySubscription = fetchedSubscriptions.find(
          (sub: PollaSubscription) => {
            return sub.userId === user?.attributes?.sub;
          }
        );
        setMySubscription(mySubscription);
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
      const updateSubscriptionResult: any = await API.graphql({
        query: mutations.updatePollaSubscription,
        variables: { input }
      });
      const updatedSubscription =
        updateSubscriptionResult.data.updatePollaSubscription;
      const filter = {
        pollaMundialistaPollaSubscriptionsId: {
          eq: pid
        }
      };
      await createSubscriptionBundleService(updatedSubscription);
      const subscriptionsResult: any = await API.graphql({
        query: queries.listPollaSubscriptions,
        variables: { filter }
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
                <Tabs.TabPane tab="Mis pronósticos" key="1"></Tabs.TabPane>
                <Tabs.TabPane tab="Inscritos" key="2">
                  <Table
                    dataSource={subscriptions}
                    columns={columns}
                    loading={loading}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Posiciones" key="3">
                  Se habilitará una vez que inicien los partidos
                </Tabs.TabPane>
              </Tabs>
            )}
            {loading && <Spin />}
          </Card>
        </Content>
      </Layout>
    </Styles>
  );
};

Tournament.defaultProps = {};

export default Tournament;
