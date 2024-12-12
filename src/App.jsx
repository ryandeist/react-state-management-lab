import { useState } from 'react'
import SquadFighter from './components/SquadFighter/SquadFighter';
import ZombieFighter from './components/ZombieFighter/ZombieFighter';
import './App.css'


const App = () => {
  const [squadFighters, setSquadFighters] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/56a8c2',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )

  const handleAddFighter = (hiredSquadFighter, hiredSquadFighterId) => {
    if (money >= hiredSquadFighter.price) {
      const newSquadFighters = [...squadFighters, hiredSquadFighter];
      const updatedZombieFighters = zombieFighters.filter(hiredSquadFighter => hiredSquadFighter.id !== hiredSquadFighterId);
      setSquadFighters(newSquadFighters);
      setMoney(money - hiredSquadFighter.price);
      setTotalStrength(totalStrength + hiredSquadFighter.strength);
      setTotalAgility(totalAgility + hiredSquadFighter.agility);
      setZombieFighters(updatedZombieFighters);
    } else {
      console.log(`'You don't have enough money to hire a ${hiredSquadFighter.name}!`)
    }
  };

  const handleRemoveFighter = (firedSquadFighter, firedSquadFighterId) => {
    const newSquadFighters = squadFighters.filter(firedSquadFighter => firedSquadFighter.id !== firedSquadFighterId);
    setSquadFighters(newSquadFighters);
    const updatedZombieFighters = [...zombieFighters, firedSquadFighter];
    setZombieFighters(updatedZombieFighters);
    setMoney(money + firedSquadFighter.price);
    setTotalStrength(totalStrength - firedSquadFighter.strength);
    setTotalAgility(totalAgility - firedSquadFighter.agility);
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: ${money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Our Squad:</h3>
      <ul>
        {squadFighters.length === 0 ? <p>Hire some fighters!</p> : squadFighters.map((squadFighter) => (
          <SquadFighter
            handleRemoveFighter={handleRemoveFighter}
            key={squadFighter.id}
            squadFighter={squadFighter}
          />
        ))}
      </ul>
      <h3>Fighters for Hire:</h3>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <ZombieFighter
            handleAddFighter={handleAddFighter}
            key={zombieFighter.id}
            zombieFighter={zombieFighter}
          />
        ))}
      </ul>
    </>
  );
}

export default App
