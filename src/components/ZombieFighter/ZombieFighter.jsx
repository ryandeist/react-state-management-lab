const ZombieFighter = ({ name, price, strength, agility, img }) => {
    return (
        <li>
            <img src={ img } />
            <p>Name: { name }</p>
            <p>Price: { price }</p>
            <p>Strength: { strength }</p>
            <p>Agility: { agility }</p>
            <button>Add to Team</button>
        </li>
    )
}

export default ZombieFighter
