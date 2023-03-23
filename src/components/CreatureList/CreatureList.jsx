import { useState, useEffect } from "react";
// we must import axios in each component
import axios from 'axios';
import CreatureForm from "./CreatureForm";
import CreatureItem from "./CreatureItem";

function CreatureList() {
    const [creatureName, setCreatureName] = useState('');
    const [creatureOrigin, setCreatureOrigin] = useState('');
    const [listOfCreatures, setListOfCreatures] = useState([]);
    
    const fetchCreatureList = () => {
        axios.get('/creature').then((response) => {
            // Update the array, React does the rest
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    }
    //! Don't call function like this below
    //! Could mess up React's timing
    // fetchCreatureList();

    // Do this instead
    useEffect(() => {
        fetchCreatureList();
    }, []); //!Don't forget the empty Array!

    // All components return what you 
    // want to be displayed.
    return ( 
        <div>
            <CreatureForm
                creatureName={creatureName}
                setCreatureName={setCreatureName}
                creatureOrigin={creatureOrigin}
                setCreatureOrigin={setCreatureOrigin}
                fetchCreatureList={fetchCreatureList}
            />
            <h2>Creature List</h2>
            {/* {
                // This turns our Array into a string
                JSON.stringify(listOfCreatures)
            } */}
            <ul>
                {
                    listOfCreatures.map((creature) => (
                        <CreatureItem 
                            key={creature.id}
                            creature={creature}
                            fetchCreatureList={fetchCreatureList}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

// All components must export
export default CreatureList;