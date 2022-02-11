import React, { useEffect } from "react";
import PropTypes from 'prop-types';

const Child = ({incrNum, num, title})=>{

    useEffect(()=>{
        if(num == 3){
            throw new Error('This is not fine')
        }
    })


    return (
        <>
            <h4>{title}</h4>
            <h5>{num}</h5>
            <button onClick={() => incrNum(1)}>Increase</button>
        </>
    )

}

Child.propTypes = {
    num: PropTypes.number,
    title: PropTypes.string
}


export default Child;