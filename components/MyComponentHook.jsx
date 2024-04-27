/**
 * REACT Hook = Special function that allows functional components t
 * to use react features without writing class components (React v16.8)
 * (useState, useEffect, useContext, useReducer, useCallback, ane more..)
 * 
 * 
 * useState() = A React hook that allows the creation of a stateful variable
 * AND a setter function to update its value in the virtual DOM
 */
import React, {useState} from 'react';
const MyComponentHook = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Alexander");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )

}

export default MyComponentHook