import React ,{Component} from 'react';
const SUB=(props)=>{
    if(props.val1<0) {
        return (
            <div>
                <button onClick={() => props.val(-1)}>-</button>
            </div>
        );
    }
return(
    <div>
    <button onClick={() =>props.val((props.val1)-1)}>-</button>
        </div>
        );

};

export default SUB;