import { Layout, Button } from 'antd'
import { useState } from 'react';
import { ToggleCollapsedButton } from './ToggleCollapsedButton';
import { ToggleThemeButton } from './ToggleThemeButton';
import { Logo } from './Logo';
import { MenuComponent } from './MenuComponent';

const { Content, Sider } = Layout;

function ForumLayout({ children }) {

  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible
        collapsed={collapsed}
        trigger={
          <>
            <ToggleCollapsedButton collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
            <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
          </>}
        theme={darkTheme ? 'dark' : 'light'}
        className="sidebar">
        <Logo collapsed={collapsed} />
        <MenuComponent darkTheme={darkTheme} />
      </Sider>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {children}
      </Content>
    </Layout>
  )
}

export default ForumLayout
