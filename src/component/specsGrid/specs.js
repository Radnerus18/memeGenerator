import React, { useEffect } from 'react';

function Specs(props) {
    useEffect(() => {
        require('./specs.css')
    }, [])
    return (
        <React.Fragment>
            <div className='specsWrap'>
                <div className='introSpecs'>
                    <div id="name">Name: {props.name}</div>
                    <div id="price">Price: {props.price}</div>
                </div>
                <div className='engineSpec'>
                    <div id="power">Power: {props.hp}</div>
                    <div id="torque">Torque: {props.torque}</div>
                    <div id="acceleration">Acceleration: {props.accel}</div>
                    <div id="topspeed">Top Speed: {props.topSpeed}</div>
                </div>
                <div className='mustSpec'>
                    <div id="brakes">Brakes: {props.brakes}</div>
                    <div id="mileage">Mileage: {props.mileage}</div>
                    <div id="fueltank">Fuel Capacity: {props.fuelCapacity}</div>
                </div>
                <div className='comfortableSpec'>
                    <div id="seatHeight">Seat Height: {props.seatHeight}</div>
                    <div id="connectivity">Connectivity: {props.connectivity}</div>
                    <div id="variants">Variants: {props.variants}</div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Specs