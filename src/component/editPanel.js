import React, { useRef, useState } from 'react';
import './editpanel.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EditPanel({ AbsSelectInp, nameInp, priceInp, powerInp, torqInp, accelInp, brakesInp, mileageInp, fuelCapInp, topSpeedInp, seatHeightInp, connectivityInp, variantsInp, imageUpl }) {

    const myName = useRef(null);
    const myPrice = useRef(null);
    const myPower = useRef(null);
    const myTorq = useRef(null);
    const myAccel = useRef(null);
    const myBrakes = useRef(null);
    const myMileage = useRef(null);
    const myFuelCap = useRef(null);
    const myTopspeed = useRef(null);
    const mySeatHeight = useRef(null);
    const myConnectivity = useRef(null);
    const myVariants = useRef(null);

    const handleInput = () => {
        nameInp(myName.current.value)
        priceInp(myPrice.current.value)
        powerInp(myPower.current.value)
        torqInp(myTorq.current.value)
        accelInp(myAccel.current.value)
        brakesInp(myBrakes.current.value)
        mileageInp(myMileage.current.value)
        fuelCapInp(myFuelCap.current.value)
        topSpeedInp(myTopspeed.current.value)
        seatHeightInp(mySeatHeight.current.value)
        connectivityInp(myConnectivity.current.value)
        variantsInp(myVariants.current.value)
    }
    const handleUpload = (e) => {
        const imgFile = e.target.files[0];
        imageUpl(URL.createObjectURL(imgFile))
        // console.log(uploaded)
    }
    const handleRadioChange = (e) => {
        const value = e.target.value
        AbsSelectInp(value)
    }
    return (
        <React.Fragment>
            <div className='editBox row'>
                <div className='col-sm col-md col-lg'>
                    <input type='text' className='form-control' ref={myName} onChange={handleInput} placeholder='Name' />
                    <input type='text' className='form-control' ref={myPrice} onChange={handleInput} placeholder='Price' />
                    <input type='text' className='form-control' ref={myPower} onChange={handleInput} placeholder='Power' />
                    <input type='text' className='form-control' ref={myTorq} onChange={handleInput} placeholder='Torque' />
                </div>
                <div className='col-sm col-md col-lg'>
                    <input type='text' className='form-control' ref={myAccel} onChange={handleInput} placeholder='Acceleration' />
                    <input type='text' className='form-control' ref={myTopspeed} onChange={handleInput} placeholder='Top Speed' />
                    <input type='text' className='form-control' ref={myBrakes} onChange={handleInput} placeholder='Brakes' />
                    <input type='text' className='form-control' ref={myMileage} onChange={handleInput} placeholder='Mileage' />
                </div>
                <div className='col-sm col-md col-lg'>
                    <input type='text' className='form-control' ref={myFuelCap} onChange={handleInput} placeholder='FuelCapacity' />
                    <input type='text' className='form-control' ref={mySeatHeight} onChange={handleInput} placeholder='Seat Height' />
                    <input type='text' className='form-control' ref={myConnectivity} onChange={handleInput} placeholder='Connectivity' />
                    <input type='text' className='form-control' ref={myVariants} onChange={handleInput} placeholder='Variants' />
                </div>
            </div>
            <div className='mt-4'>
                <label className="form-check-label px-2">Upload Bike Image: </label>
                <input className='custom-file-input btn btn-outline-success' type='file' accept='image/png, image/gif, image/jpeg' onChange={handleUpload} />
            </div>
            <div className='absCounterBox d-flex flex-row gap-3 mt-3'>
                <div className="form-check">
                    <label className="form-check-label" for="noAbs">
                        <input className="form-check-input" type="radio" onChange={handleRadioChange} value="noABS" name="flexRadioDefault" id="noAbs" defaultChecked />
                        No ABS
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label" for="chnl1Abs">
                        <input className="form-check-input" type="radio" onChange={handleRadioChange} value="1chnlAbs" name="flexRadioDefault" id="chnl1Abs" />
                        Single Channel ABS
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label" for="chnl2Abs">
                        <input className="form-check-input" type="radio" onChange={handleRadioChange} value="2chnlAbs" name="flexRadioDefault" id="chnl2Abs" />
                        Dual Channel ABS
                    </label>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditPanel