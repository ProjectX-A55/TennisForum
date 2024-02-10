import { Button } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

export function ToggleThemeButton({ darkTheme, toggleTheme }) {
    return <Button onClick={toggleTheme} className="menu-button">
        {darkTheme ? <SunOutlined /> : <MoonOutlined />}
    </Button>
}