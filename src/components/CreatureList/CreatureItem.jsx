import { useState } from "react";
import axios from "axios";

function CreatureItem({ creature, fetchCreatureList }) {
    const [creatureColor, setCreatureColor] = useState('');

    // This same pattern can be used for update
    // Marking something complete
    let removeCreature = event => {
        console.log(`removeCreature ${creature.id}`)
        axios.delete(`/creature/${creature.id}`).then((response) => {
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in removeCreature ${error}`);
            alert('Something went wrong.');
        })
    }

    let increaseSightings = event => {
        console.log(`Updating ${creature.name} sightings`)
        axios.put(`/creature/sighting/${creature.id}`).then((response) => {
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in increaseSightings ${error}`);
            alert('Something went wrong.');
        })
    }

    let sumbitColor = event => {
        event.preventDefault();
        let colorObject = {
            color: creatureColor
        }

        axios.put(`/creature/color/${creature.id}`, colorObject).then((response) => {
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        // what we want to render
        <li style={creature.name[0] === 'J' ? {textDecoration: 'underline'} : {textDecoration: 'none'}}>
            {creature.color} {creature.name} from {creature.origin}
            <p>Sightings: {creature.sightings}</p>
            <button onClick={(event) => {increaseSightings()}}>Increase Sightings</button>
            <button onClick={(event) => {removeCreature()}}>Delete</button>
            <form onSubmit={sumbitColor}>
                Edit color: <input type="text" onChange={(event) => setCreatureColor(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
            
        </li>
        
    );
}

export default CreatureItem; 