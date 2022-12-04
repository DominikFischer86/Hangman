const Victory = ({ handleNewGame }: any) => (
    <div className="victory">
        <p>Gewonnen!</p>
        <button onClick={() => handleNewGame("victory")}>Nochmal spielen!</button>
    </div>
)

export default Victory
