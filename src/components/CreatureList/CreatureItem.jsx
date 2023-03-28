import axios from "axios";

function CreatureItem({ creature, fetchCreatureList }) {
    
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
        axios.put(`/creature/sighting/${creature.id}`).then((response) => {
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in increaseSightings ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        // what we want to render
        <li style={creature.name[0] === 'J' ? {textDecoration: 'underline'} : {textDecoration: 'none'}}>
            {creature.name} from {creature.origin}
            <p>Sightings: {creature.sightings}</p>
            <button onClick={(event) => {increaseSightings()}}>Increase Sightings</button>
            <button onClick={(event) => {removeCreature()}}>Delete</button>
        </li>
        
    );
}

export default CreatureItem; 