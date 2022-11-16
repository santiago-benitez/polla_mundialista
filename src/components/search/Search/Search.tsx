import React from "react";
import { useAuthenticator, Image } from "@aws-amplify/ui-react";
import {
  Button,
  Input,
  Layout,
  Menu,
  message,
  Popconfirm,
  Space,
  Table
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { API } from "aws-amplify";

import Styles from "./Search.styles";
import { SearchProps as Props } from "./Search.types";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as queries from "../../../graphql/queries";
import Card from "antd/lib/card/Card";
import CreateTournamentForm from "../CreateTournamentForm/CreateTournamentForm";
import { CreateTournamentFormValues } from "../CreateTournamentForm/CreateTournamentForm.types";
import { createPollaMundialistaService } from "../../../services/pollaMundialista.service";
import { CreatePollaSubscriptionInput, PollaMundialista } from "../../../API";
import { createSubscriptionService } from "../../../services/subscription.service";
import { HomeOutlined, FileSearchOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const SearchInput = Input.Search;

const Search: React.FC<Props> = props => {
  const { signOut, user } = useAuthenticator(context => [context.user]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const router = useRouter();
  const [pollasMundialistas, setPollasMundialistas] = useState([]);
  const [filteredPollas, setFilteredPollas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  useEffect(() => {
    if (user && user.attributes) {
      (async () => {
        try {
          setLoadingPage(true);
          const pollasResult: any = await API.graphql({
            query: queries.listPollaMundialistas,
            variables: { limit: "10000" }
          });

          const pollas = pollasResult?.data?.listPollaMundialistas?.items;
          if (pollas && pollas.length) {
            for (const polla of pollas) {
              const fetchedPollaResult: any = await API.graphql({
                query: queries.getPollaMundialista,
                variables: { id: polla.id }
              });
              const fetchedPolla: PollaMundialista =
                fetchedPollaResult.data.getPollaMundialista;
              const alreadyIn = fetchedPolla.pollaSubscriptions?.items.find(
                subscription => {
                  return user.attributes?.sub === subscription?.userId;
                }
              );
              polla["alreadyIn"] = !!alreadyIn;
            }
            setPollasMundialistas(pollas);
            setFilteredPollas(pollas);
            setLoadingPage(false);
          }
        } catch (error) {
          setLoadingPage(false);
          console.log(error);
        }
      })();
    }
  }, [user]);

  useEffect(() => {
    const updateSize = () => {
      console.log(window.innerWidth);
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const signOutHandler = () => {
    signOut();
    router.push("/login");
  };

  const myTournamentsHandler = () => {
    router.push("/");
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch = (value: string) => {
    const filteredPollasMundialistas = pollasMundialistas.filter(
      (polla: PollaMundialista) => {
        return polla.name.toLowerCase().includes(value.toLowerCase());
      }
    );
    setFilteredPollas(filteredPollasMundialistas);
  };

  const createTournamentHandler = () => {
    setIsModalOpen(true);
  };

  const onInvitation = async (record: PollaMundialista) => {
    if (user && user.attributes && user.attributes.sub) {
      const subscriptionInput: CreatePollaSubscriptionInput = {
        isAdmin: false,
        totalPoints: 0,
        status: "Pendiente",
        pollaMundialistaPollaSubscriptionsId: record.id,
        userId: user.attributes.sub,
        email: user.attributes.email
      };
      try {
        await createSubscriptionService(subscriptionInput);
        message.success(
          `Se ha enviado una solicitud para que participes en el torneo ${record.name}`
        );
        try {
          setLoadingPage(true);
          const pollasResult: any = await API.graphql({
            query: queries.listPollaMundialistas,
            variables: { limit: "10000" }
          });

          const pollas = pollasResult?.data?.listPollaMundialistas?.items;
          if (pollas && pollas.length) {
            for (const polla of pollas) {
              const fetchedPollaResult: any = await API.graphql({
                query: queries.getPollaMundialista,
                variables: { id: polla.id }
              });
              const fetchedPolla: PollaMundialista =
                fetchedPollaResult.data.getPollaMundialista;
              const alreadyIn = fetchedPolla.pollaSubscriptions?.items.find(
                subscription => {
                  return user.attributes?.sub === subscription?.userId;
                }
              );
              polla["alreadyIn"] = !!alreadyIn;
            }
            setPollasMundialistas(pollas);
            setFilteredPollas(pollas);
            setLoadingPage(false);
          }
        } catch (error) {
          setLoadingPage(false);
          console.log(error);
        }
      } catch (error) {
        message.error("Error al enviar la solicitud");
      }
    }
  };

  const onCreate = async (values: CreateTournamentFormValues) => {
    if (user.attributes && user.attributes.sub) {
      const input = {
        ...values,
        subscriptionPrice: 0,
        firstPrize: 100,
        secondPrize: 0,
        thirdPrize: 0,
        fourthPrize: 0,
        fifthPrize: 0
      };
      setLoading(true);
      const { sub, email } = user.attributes;
      try {
        await createPollaMundialistaService(input, sub, email);
      } catch (error) {
        console.log("error");
        message.error("Error al crear el torneo");
      }
      setLoading(false);
      setIsModalOpen(false);
      message.success("Torneo creado exitosamente");
    } else {
      message.error("Error al crear el torneo");
    }
  };

  const columns: any = [
    {
      title: "Torneo",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "",
      key: "action",
      align: "right",
      render: (_: any, record: any) => (
        <Space size="middle" className="Search__body__table__action">
          {record.alreadyIn && <span>Solicitud enviada!</span>}
          {!record.alreadyIn && (
            <span className="Search__body__table__link">
              <Popconfirm
                title="¿Deseas participar en este torneo?"
                okText="Sí"
                cancelText="No"
                icon={null}
                onConfirm={() => onInvitation(record)}
              >
                Quiero participar!
              </Popconfirm>
            </span>
          )}
        </Space>
      )
    }
  ];

  return (
    <Styles className="Search">
      <Layout className="Search__layout">
        <Header className="Search__header">
          <Image
            src="assets/images/logo.png"
            alt="logo"
            className="Search__header__logo"
          />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="Search__header__menu"
            selectedKeys={["searchTournaments"]}
          >
            <Menu.Item key="myTournaments" onClick={myTournamentsHandler}>
              {size.width >= 610 && "Mis Torneos"}
              {size.width < 610 && <HomeOutlined />}
            </Menu.Item>
            <Menu.Item key="searchTournaments">
              {size.width >= 610 && "Buscar Torneos"}
              {size.width < 610 && <FileSearchOutlined />}
            </Menu.Item>
            <Menu.SubMenu
              key="userSubMenu"
              className="Search__header__submenu"
              icon={<UserOutlined className="Search__header__submenu__logo" />}
            >
              <Menu.Item key="signOut" onClick={signOutHandler}>
                Cerrar Sesión
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Header>
        <Content className="Search__body">
          <Card
            extra={
              <div className="Search__body__header">
                <SearchInput
                  className="Search__body__header__search"
                  placeholder="Buscar torneo"
                  onSearch={onSearch}
                />
                <Button type="primary" onClick={createTournamentHandler}>
                  Nuevo
                </Button>
              </div>
            }
          >
            <Table
              dataSource={filteredPollas}
              columns={columns}
              loading={loadingPage}
            />
            {/* MODAL */}
            <CreateTournamentForm
              loading={loading}
              open={isModalOpen}
              onCreate={onCreate}
              onCancel={onCancel}
            />
          </Card>
        </Content>
      </Layout>
    </Styles>
  );
};

Search.defaultProps = {};

export default Search;
