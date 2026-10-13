import Creature from './Creature.jsx';
import { useState } from 'react';

function CreatureField() {
    const creatureData =[
        {
            id: 1, name: "Mr. Fresh", age: 3,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140
        },
        {
            id: 2, name: "Meimei", age: 5,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260
        },
        {
            id: 3, name: "Bingus", age: 2,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40
        },
        {
            id: 4, name: "Leipä", age: 4,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420
        },
        {
            id: 5, name: "Mista", age: 4,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590
        }
    ]

    const [creatures, setCreatures] = useState(
        creatureData.map(creatures =>  ({...creatures, isAwake: false}))
    );

    const handleWake = (id) => {
        setCreatures(prev => prev.map(creatures => {
            if (creatures.id !== id) return creatures;
            const willAwake = !creatures.isAwake;
            return {
                ...creatures,
                isAwake: willAwake,
                x: willAwake ? Math.floor(Math.random() * 700) : creatures.x,
                y: willAwake ? Math.floor(Math.random() * 700) : creatures.y
            };
        }));
    };

    const awakeCount = creatures.filter(c => c.isAwake).length;


    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: '#6b8c66'
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{awakeCount} out of {creatures.length} creatures are awake</h2>
            <div style={fieldStyle}>
                {creatures.map(creature => (
                    <Creature
                        key={creature.id}
                        {...creature}
                        onWake={() => handleWake(creature.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CreatureField;
