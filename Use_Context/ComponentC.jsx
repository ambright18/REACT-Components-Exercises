
import ComponentD from "./ComponentD";
/**
 * useContext() = React Hook that allows you to share values
 *                betwen multiple levels of components
 *                without passing props through each level
 */
import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

    const ComponentC = () => {

      const user = useContext(UserContext);

        return (
           <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again, ${user}`}</h2>
            <ComponentD />
           </div>
        )
    }

    export default ComponentC;