import React from 'react';


const Scroll = (props) => {
    // console.log(props);
    // return props.children;
    // return <h1>Hi</h1>
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}} >
            {props.children}
        </div>
    )
};

export default Scroll;