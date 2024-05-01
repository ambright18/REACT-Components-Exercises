
import ComponentC from "./ComponentC";
/**
 * useContext() = React Hook that allows you to share values
 *                betwen multiple levels of components
 *                without passing props through each level
 */

    const ComponentB = () => {


        return (
           <div className="box">
            <h1>Component B</h1>
            <ComponentC />
           </div>
        )
    }

    export default ComponentB;