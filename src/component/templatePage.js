import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import EditPanel from './editPanel';
import './template.css';
import Specs from './specsGrid/specs';
import logo from '../logo.png';
import bgText from '../thumbnail.png';
import noABS from '../noABs.png';
import onechnlAbs from '../OnechnlABS.png';
import twochnlAbs from '../TwochnlABS.png';
export default function TemplatePage() {
    const [isclicked, setIsClicked] = useState(false);
    const [uploaded, setUploaded] = useState('')
    const [absSelect, setAbsSelect] = useState(noABS)
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [power, setPower] = useState('');
    const [torq, setTorq] = useState('');
    const [accel, setAccel] = useState('');
    const [brakes, setBrakes] = useState('');
    const [mileage, setMileage] = useState('');
    const [fuelCapacity, setFuelCapacity] = useState('');
    const [topSpeed, setTopSpeed] = useState('');
    const [seatHeight, setSeatHeight] = useState('');
    const [connectivity, setConnectivity] = useState('');
    const [variants, setVariants] = useState('');

    const objUpload = useRef(null)
    const handleClick = () => {
        setIsClicked(!isclicked)
    }
    const elementToCapture = useRef(null);

    const handleCaptureAndSave = async () => {
        if (elementToCapture.current) {
            // Capture the HTML element as an image using html2canvas
            const canvas = await html2canvas(elementToCapture.current);

            // Convert the canvas image to a data URL (JPG format)
            const dataUrl = canvas.toDataURL('image/jpeg');

            // Create a Blob from the data URL
            const blob = dataURLtoBlob(dataUrl);

            // Save the Blob as a file using FileSaver.js
            saveAs(blob, 'captured_image.jpg');
        }
    };
    function dataURLtoBlob(dataURL) {
        const byteString = atob(dataURL.split(',')[1]);
        const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];

        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab)

        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }
    const imageMap = {
        'noABS': noABS,
        '1chnlAbs': onechnlAbs,
        '2chnlAbs': twochnlAbs,
    }
    const selectedImage = imageMap[absSelect];
    return (
        <React.Fragment>
            <div className='templateWrap d-flex flex-row flex-wrap'>
                <div className='templateView my-5 m-2' ref={elementToCapture}>
                    <h2 className='blogTitle'><img src={logo} className='imhLogo' /> Indian Metal Horse</h2>
                    {/* <img className='bgThumb' src={bgText} /> */}
                    <div>
                        <Specs name={name} price={price} hp={power} torque={torq} accel={accel} brakes={brakes} mileage={mileage} fuelCapacity={fuelCapacity} topSpeed={topSpeed} seatHeight={seatHeight} connectivity={connectivity} variants={variants}></Specs>
                    </div>
                    <div className='objectImg'>
                        <img src={uploaded} style={{ maxWidth: '440px' }} alt='image'></img>
                    </div>
                    <div className='absImg'>
                        {selectedImage && <img src={selectedImage} alt={selectedImage} />}
                    </div>
                </div>
                <div className='editPanel'>
                    <EditPanel nameInp={setName} priceInp={setPrice} powerInp={setPower} torqInp={setTorq} accelInp={setAccel} brakesInp={setBrakes} mileageInp={setMileage} fuelCapInp={setFuelCapacity} topSpeedInp={setTopSpeed} seatHeightInp={setSeatHeight} connectivityInp={setConnectivity} variantsInp={setVariants} imageUpl={setUploaded} AbsSelectInp={setAbsSelect}></EditPanel>
                </div>
            </div>
            <button className='btn btn-outline-success' onClick={handleCaptureAndSave}>Save</button>
        </React.Fragment>
    )
}