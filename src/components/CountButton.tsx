interface IProps {
    kind: string
    count: number;
    setCount: (count: number) => void;
}
export const CountButton = ({ kind, count, setCount }: IProps) => {
    return (
        <>
            {kind === 'up' && (
                <button className="up" onClick={() => setCount(count + 1)}>Count up</button>
            )}
            {kind === 'down' && (
                <button className="down" onClick={() => setCount(count - 1)}>Count down</button>
            )}
        </>
    )
}