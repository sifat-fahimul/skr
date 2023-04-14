import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsCardChecklist, BsTable } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { CgUserList } from "react-icons/cg";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo !bg-indigo-700 rounded !mx-0">
          <h2 className="text-white text-lg text-center py-1">
            <span className="sm-logo ">DI</span>
            <span className="lg-logo">Dev Inventory</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
              navigate("/");
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="!text-xl" />,
              label: "Dashboard",
            },
            {
              key: "CPU",
              icon: <UserOutlined className="!text-xl" />,
              label: "CPU",
              children: [
                {
                  key: "cpu-list",
                  icon: <CgUserList className="!text-xl" />,
                  label: "cpu List",
                },
                {
                  key: "add-cpu",
                  icon: <AiOutlineUserAdd className="!text-xl" />,
                  label: "Add cpu",
                },
              ],
            },
            {
              key: "monitor",
              icon: <FaShoppingBag className="!text-xl" />,
              label: "monitor",
              children: [
                {
                  key: "monitor-list",
                  icon: <BsCardChecklist className="!text-xl" />,
                  label: "monitor List",
                },

                {
                  key: "add-monitor",
                  icon: <MdAddShoppingCart className="!text-xl" />,
                  label: "Add monitor",
                },
              ],
            },
            {
              key: "printer",
              icon: <FaShoppingBag className="!text-xl" />,
              label: "printer",
              children: [
                {
                  key: "printer-list",
                  icon: <BsCardChecklist className="!text-xl" />,
                  label: "printer List",
                },

                {
                  key: "add-printer",
                  icon: <MdAddShoppingCart className="!text-xl" />,
                  label: "Add printer",
                },
              ],
            },
            {
              key: "scanner",
              icon: <FaShoppingBag className="!text-xl" />,
              label: "scanner",
              children: [
                {
                  key: "scanner-list",
                  icon: <BsCardChecklist className="!text-xl" />,
                  label: "scanner List",
                },

                {
                  key: "add-scanner",
                  icon: <MdAddShoppingCart className="!text-xl" />,
                  label: "Add scanner",
                },
              ],
            },
            // {
            //   key: "order-list",
            //   icon: <AiOutlineShoppingCart className="!text-xl" />,
            //   label: "Order List",
            // },
            {
              key: "signout",
              icon: <AiOutlineLogout className="!text-xl" />,
              label: "Sign Out",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="flex justify-between"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="pr-6 flex gap-3 align-middle ">
            <div className="flex gap-3 align-middle">
              <div>
                <img
                  className="mt-2 rounded-full"
                  width={48}
                  height={48}
                  src="https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar2.jpg"
                  alt="profile-pic"
                />
              </div>
              <div>
                <h5 className="mb-0 mt-2">user name</h5>
                <p className="mb-0">example@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          className="!bg-gray-100"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
