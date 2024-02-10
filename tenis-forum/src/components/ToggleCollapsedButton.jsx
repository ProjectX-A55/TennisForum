import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Button } from 'antd';

export function ToggleCollapsedButton({collapsed, toggleCollapsed}) {
    return (
        <Button onClick={toggleCollapsed} className="menu-button">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
    )
}