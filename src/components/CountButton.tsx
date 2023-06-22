interface IProps {
    count: number;
    setCount: (count:number) => void;
}
export const CountButton = ({count, setCount}: IProps) => {
    return (
        <button onClick={() => setCount(count + 1)}>Count up</button>
    )
}