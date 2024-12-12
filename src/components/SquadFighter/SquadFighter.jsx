const SquadFighter = ({ squadFighter }) => {

    // console.log(squadFighter)

    return (
        <li>
            <img src={ squadFighter.img } />
            <p>Name: { squadFighter.name }</p>
            <p>Price: ${ squadFighter.price }</p>
            <p>Strength: { squadFighter.strength }</p>
            <p>Agility: { squadFighter.agility }</p>
            <button>Remove</button>
        </li>
    )
}

export default SquadFighter