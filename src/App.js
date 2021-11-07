// libs
import { Layout } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// others
import 'antd/dist/antd.css';
import './App.css';
import './index.css';
import Image from "./components/Image/Image";
import Menu from "./components/Menu/Menu"

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      {/* <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background">
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout> */}
      {/* <Image /> */}
      <Menu />
    </Layout>
  );
}

export default App;
