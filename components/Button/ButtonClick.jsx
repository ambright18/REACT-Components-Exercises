
// click event  = An interaction when a user clicks on a specific element
                  // We can respnd to clicks by passing 
                  // a callback to the onClick event handler


const BtnClick = () => {
    // const handleClick2 = (name) => console.log(`${name} stop clicking me!!`);
   
   /* let count = 0;
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    };
    */

    const handleClick = (e) => e.target.textContent = "Ouch!!";

    

    return (
       <button onDoubleClick={(e) => handleClick(e)}>Click Me :</button>
    );
}

export default BtnClick;