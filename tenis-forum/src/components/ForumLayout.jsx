import { Layout, Button } from 'antd'
import { useState } from 'react';
import { ToggleCollapsedButton } from './ToggleCollapsedButton';
import { MenuComponent } from './MenuComponent';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';

const { Content, Sider } = Layout;

function ForumLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderComponent />
        <Layout>
          <Sider collapsible
            theme='dark'
            collapsed={collapsed}
            trigger={<ToggleCollapsedButton collapsed={collapsed} toggleCollapsed={toggleCollapsed} />}
            className="sidebar">
            <MenuComponent/>
          </Sider>
          <Content style={{margin: '5px', backgroundColor: 'rgb(0, 21, 41)'}}>
            {children}
          </Content>
        </Layout>
      </Layout> 
  )
}

export default ForumLayout
