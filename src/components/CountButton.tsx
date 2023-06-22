interface IProps {
    count: number;
    setCount: any;
}
export const CountButton = ({count, setCount}: IProps) => {
    return (
        <button onClick={() => setCount(count + 1)}>Count up</button>
    )
}