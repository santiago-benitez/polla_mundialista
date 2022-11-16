import React from "react";
import { useAuthenticator, Image } from "@aws-amplify/ui-react";
import { Layout, Menu, message, Spin, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { API } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { PollaSubscription } from "../../../API";
import Card from "antd/lib/card/Card";

const { Header, Content } = Layout;

const Home: React.FC<Props> = props => {
  const { signOut, user } = useAuthenticator(context => [context.user]);
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        if (user?.attributes?.sub) {
          const filter = {
            userId: {
              eq: user.attributes.sub
            }
          };
          setLoading(true);
          const response: any = await API.graphql({
            query: queries.listPollaSubscriptions,
            variables: { filter, limit: "10000" }
          });
          const pollaSubscriptions =
            response?.data?.listPollaSubscriptions?.items;
          if (pollaSubscriptions && pollaSubscriptions.length) {
            const mappedSubscriptions = pollaSubscriptions.map(
              (subscription: PollaSubscription) => {
                return {
                  ...subscription,
                  name: subscription.pollaMundialista?.name
                };
              }
            );
            setSubscriptions(mappedSubscriptions);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user]);

  const signOutHandler = () => {
    signOut();
    router.push("/login");
  };

  const searchTournamentsHandler = () => {
    router.push("/search");
  };

  const onGoToPolla = (record: any) => {
    if (record?.status !== "Aceptado") {
      message.warn(
        "Tu solicitud se encuentra en estado pendiente, podrás participar cuando el administrador del torneo te acepte"
      );
      return;
    }
    router.push({
      pathname: "/tournament/[pid]",
      query: { pid: record.pollaMundialista.id }
    });
  };

  const columns: any = [
    {
      title: "Torneo",
      key: "name",
      render: (_: any, record: any) => (
        <span
          onClick={() => onGoToPolla(record)}
          className="Home__body__table__link"
        >
          {record.name}
        </span>
      )
    },
    {
      title: "Estado Solicitud",
      key: "status",
      dataIndex: "status",
      align: "right"
    }
  ];

  return (
    <Styles className="Home">
      <Layout className="Home__layout">
        <Header className="Home__header">
          <Image
            src="assets/images/logo.png"
            alt="logo"
            className="Home__header__logo"
          />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="Home__header__menu"
            selectedKeys={["myTournaments"]}
          >
            <Menu.Item key="myTournaments">Mis Torneos</Menu.Item>
            <Menu.Item
              key="searchTournaments"
              onClick={searchTournamentsHandler}
            >
              Buscar Torneos
            </Menu.Item>
            <Menu.SubMenu
              key="userSubMenu"
              className="Home__header__submenu"
              icon={<UserOutlined className="Home__header__submenu__logo" />}
            >
              <Menu.Item key="signOut" onClick={signOutHandler}>
                Cerrar Sesión
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Header>
        <Content className="Home__body">
          <Card className="Home__body__table">
            {loading && <Spin />}
            {!!subscriptions.length && !loading && (
              <Table dataSource={subscriptions} columns={columns}></Table>
            )}
            {!subscriptions.length && !loading && (
              <div>
                <p>No tienes torneos en los cuáles estés participando.</p>
                <p>
                  Si deseas participar en un torneo presiona click en{" "}
                  <span
                    className="Home__body__table__link"
                    onClick={searchTournamentsHandler}
                  >
                    Buscar Torneos
                  </span>
                </p>
              </div>
            )}
          </Card>
        </Content>
      </Layout>
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
