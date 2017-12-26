import React ,{Component} from 'react';
const Disp1 =(props)=>{
    if ((props.val <= 100 && props.val >= 0)) {
        return (

            <div>{props.val}</div>
        );
    } else {
        return (
            <div>Not Possible</div>
        );
    }
};
export default Disp1;