import React from 'react';

function Cheker(props) {
    return (
        <div data-testid="checker">
           {props.value} I am checker
           <div></div>
            <input type="text"></input>
        </div>
    )
}

export default Cheker;