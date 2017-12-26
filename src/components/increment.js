import React ,{Component} from 'react';
const ADD=(props)=>{
const val=props.val;
const val1=props.val1;
if(props.val1>100) {
    return (
        <div>
            <button onClick={() => props.val(101)}>+</button>
        </div>
    );
}
    return <div>
        <button onClick={() => val(val1 + 1)}>+</button>
    </div>;

};

export default ADD;