import { Layout, Button } from 'antd'
import { useState } from 'react';
import { ToggleCollapsedButton } from './ToggleCollapsedButton';
import { ToggleThemeButton } from './ToggleThemeButton';
import { Logo } from './Logo';
import { MenuComponent } from './MenuComponent';
import { NavLink } from 'react-router-dom';

import { HeaderComponent } from './HeaderComponent/HeaderComponent';

const { Content, Header, Sider } = Layout;

function ForumLayout({ children }) {
  if (localStorage.getItem('dark') === null) {
    localStorage.getItem('dark', true)
  }

  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('dark'));
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem('dark', !darkTheme);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderComponent />
      <Layout>
        <Sider collapsible
          collapsed={collapsed}
          trigger={
            <>
              <ToggleCollapsedButton collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
              <ToggleThemeButton darkTheme={!darkTheme} toggleTheme={toggleTheme} />
            </>}
          theme={!darkTheme ? 'dark' : 'light'}
          className="sidebar">
          <Logo darkTheme={!darkTheme} collapsed={collapsed} />
          <MenuComponent darkTheme={!darkTheme} />
        </Sider>
        <Content style={{ background: 'rgb(0, 21, 41)', margin: '5px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default ForumLayout
