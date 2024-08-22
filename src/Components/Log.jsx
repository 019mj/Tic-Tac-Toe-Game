export default function Log({gameTurns}) {
    return <ol id="log">
        {gameTurns.map((elemnt, elementKey) => {
            return <li key={elementKey}>{"It is " + elemnt.player}</li>
        })}
    </ol>
}