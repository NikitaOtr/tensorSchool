import React, {
    useState,
    VFC,
    useEffect,
    KeyboardEvent,
    ChangeEvent,
} from 'react';
import { IItem } from './index';

interface IProps {
    initialData: IItem[];
    sorting: 'ASC' | 'DESC';
}

export const Keys: VFC<IProps> = ({ initialData, sorting }) => {
    const [sortInitialData, setSortInitialData] = useState<Array<IItem>>([]);

    const changeText = (id: number, name: string) => {
        setSortInitialData((prevData) => {
            return prevData.map((item) => {
                if (item.id === id) {
                    item.name = name;
                }
                return item;
            });
        });
    };

    useEffect(() => {
        const test = [...initialData];
        if (sorting === 'DESC') {
            return setSortInitialData(
                test.sort((a, b) => (a.id >= b.id ? -1 : 1)),
            );
        }

        if (sorting === 'ASC') {
            return setSortInitialData(
                test.sort((a, b) => (a.id >= b.id ? 1 : -1)),
            );
        }
    }, [initialData, sorting]);

    return (
        <div>
            {sortInitialData.map((item) => (
                <Item key={item.id} item={item} changeText={changeText} />
            ))}
        </div>
    );
};

const Item: VFC<{ item: IItem; changeText: any }> = ({ item, changeText }) => {
    const [inputValue, setInputValue] = useState(item.name);
    const [editMode, setEditMode] = useState(false);

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditMode(false);
            changeText(item.id, inputValue);
        }

        if (e.key === 'Escape') {
            setEditMode(false);
            setInputValue(item.name);
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            {editMode ? (
                <input
                    autoFocus
                    value={inputValue}
                    onKeyDown={onKeyDownHandler}
                    onChange={onChangeHandler}
                    type="text"
                />
            ) : (
                <span onClick={() => setEditMode(true)}>{item.name}</span>
            )}
        </div>
    );
};
