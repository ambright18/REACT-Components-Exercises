import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";
/**
 * useContext() = React Hook that allows you to share values
 *                betwen multiple levels of components
 *                without passing props through each level
 * 
 * PROVIDE COMPONENT 
 * 1. import {createContext} from 'react';
 * 2. export const myContext = createContext();
 * 3. <MyComponent.Provider value = {value};
 *       <Child />
 *    </MyComponent.Provider>
 * 
 * CONSUMER COMPONENTS
 * 1. import React, {useContext} from 'react';
 *    import {MyContext} from './ComponentA'
 * 2. const value = useContext(MyContext);
 *  
 */

export const UserContext = createContext();


    const ComponentA = () => {

        const [user, setUser] = useState("Ambright");

        return (
           <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello, ${user}`}</h2>
            <UserContext.Provider value={user}>
            <ComponentB />
            </UserContext.Provider>
           </div>
        )
    }

    export default ComponentA;