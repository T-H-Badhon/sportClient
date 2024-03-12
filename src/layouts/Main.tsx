import { Button, Layout } from "antd";

import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logOut } from "../redux/slices/authSlice";

const { Header, Content } = Layout;

const Main = () => {
  const dispatch = useAppDispatch();

  const role = useAppSelector((state) => state.auth.role);

  const navigate = useNavigate();

  const signOut = () => {
    dispatch(logOut());

    navigate("/login");
  };

  return (
    <Layout
      style={{
        height: "100vh",
        margin: "auto",
        padding: 0,
        textAlign: "center",
        maxWidth: "1280px",
      }}
    >
      <Header
        style={{
          padding: 0,
          color: "white",
          fontWeight: 700,
          fontSize: "32px",
          display: "flex",
        }}
      >
        <div style={{ flex: 1 }}> Sports Item System</div>
        <div>
          {role ? (
            <Button
              onClick={signOut}
              style={{ marginRight: 5, backgroundColor: "white" }}
            >
              Logout
            </Button>
          ) : null}
        </div>
      </Header>

      <Layout>
        <Sidebar></Sidebar>
        <div className="w-full overflow-y-scroll">
          <Layout>
            <Content>
              <Outlet></Outlet>
            </Content>
          </Layout>
        </div>
      </Layout>
    </Layout>
  );
};

export default Main;
