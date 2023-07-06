import { useState } from 'react';
import { data, IItem } from './data';
import './styles.css';
import { ThemeProvider, useTheme } from './Context';

type Theme = 'light' | 'dark';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const className = `app app_${currentTheme}`;
    return (
        <ThemeProvider theme={currentTheme}>
            <div className={className}>
                <button onClick={changeTheme}>Toggle theme</button>
                <List data={data} />
            </div>
        </ThemeProvider>
    );
}

function List(props: { data: IItem[] }) {
    return (
        <div>
            {data.map((item) => (
                <ListItem caption={item.name} key={item.id} />
            ))}
        </div>
    );
}

function ListItem(props: { caption: string }) {
    const theme = useTheme();
    const className = `listItem listItem_${theme}`;
    return <div className={className}>{props.caption}</div>;
}
