const ZombieFighter = ({ zombieFighter, handleAddFighter }) => {

    // console.log(zombieFighter)

    return (
        <li>
            <img src={ zombieFighter.img } />
            <p>Name: { zombieFighter.name }</p>
            <p>Price: ${ zombieFighter.price }</p>
            <p>Strength: { zombieFighter.strength }</p>
            <p>Agility: { zombieFighter.agility }</p>
            <button onClick={() => handleAddFighter(zombieFighter, zombieFighter.id)}>Add to Team</button>
        </li>
    )
}

export default ZombieFighter
