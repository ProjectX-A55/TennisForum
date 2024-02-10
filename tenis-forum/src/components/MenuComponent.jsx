import { Menu } from 'antd';
import { Logo } from './Logo';
import { HomeOutlined, PlayCircleOutlined, HighlightOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons'
import { ToggleThemeButton } from './ToggleThemeButton';

export function MenuComponent({darkTheme, inlineCollapsed = false}) {
    return (
        <Menu
            theme={darkTheme ? "dark" : "light"}
            mode="inline"
            inlineCollapsed={inlineCollapsed}
            selectedKeys={["home"]}
            style={{
                borderRight: 0,
                textAlign: 'left',
            }}>
           
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="general-discussions" icon={<HighlightOutlined />}>
                General Discussions
            </Menu.Item>
            <Menu.Item key="live-matches" icon={<PlayCircleOutlined />}>
                Live Matches
            </Menu.Item>
            <Menu.Item key="mens-tennis" icon={<ManOutlined />}>
                Men's Tennis
            </Menu.Item>
            <Menu.Item key="womens-tennis" icon={<WomanOutlined />}>
                Women's Tennis
            </Menu.Item>
            
        </Menu>
    )
}