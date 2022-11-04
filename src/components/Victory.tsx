const Victory = () => (
    <div className="victory">
        <p>Winner!</p>
        <button onClick={() => window.open("/","_self")}>Play again!</button>
    </div>
)

export default Victory