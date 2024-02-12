import { Menu } from 'antd';
import { HomeOutlined, PlayCircleOutlined, HighlightOutlined, ManOutlined, WomanOutlined, PlusOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';

export function MenuComponent({ inlineCollapsed = false }) {
    return (
        <Menu
            mode="inline"
            inlineCollapsed={inlineCollapsed}
            selectedKeys={["home"]}
            theme={'dark'}
            style={{
                borderRight: 0,
                textAlign: 'left',
            }}>
           
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="createPost" icon={<PlusOutlined />}>
                <NavLink to="/posts-create">Create post</NavLink>
            </Menu.Item>
            <Menu.Item key="general-discussions" icon={<HighlightOutlined />}>
                <NavLink to="/posts">General Discussions</NavLink>
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