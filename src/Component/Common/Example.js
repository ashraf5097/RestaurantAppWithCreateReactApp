import React, { useState, useEffect } from 'react';


const Example = () => {
    
    const [count, setCount] = useState(0);
    const [displaycount, setDisplaycount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
    //   document.title = `You clicked ${count} times`;
    setDisplaycount(count)
    });

    
  return (
    <div style={{paddingTop:'5%'}}>
      <p>You clicked {displaycount} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
       </button>
    </div>
  );
}




export default Example;



// export default SearchBar;
