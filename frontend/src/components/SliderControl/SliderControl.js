import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Slider } from '@mui/material';
import PresetButtons from '../PresetButtons/PresetButtons';
import EditPresets from '../EditPresets/EditPresets';
import FadeRateSelect from '../FadeRateSelect/FadeRateSelect';
import backend from '../../userConfig/backendIP';
import './SliderControl.css';


const SliderControl = () => {

    const [presets, setPresets] = useState([]);
    const [editPresets, setEditPresets] = useState(false);
    const [redValue, setRedValue] = useState(0);
    const [grnValue, setGrnValue] = useState(0);
    const [bluValue, setBluValue] = useState(0);
    const [whtValue, setWhtValue] = useState(0);
    const [masterValue, setMasterValue] = useState(255);
    const [duration, setDuration] = useState(3);

    const handleChange = (colorChange) => {
        try {
            axios
                .post(`${backend.IP}/api/dmx/colorChangeButton`, colorChange)
                .then((res) => {
                    console.log(res.data);
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        }
    };

    const handleSliderChange = async () => {
        let data = {
            "redLevel": redValue,
            "grnLevel": grnValue,
            "bluLevel": bluValue,
            "whtLevel": whtValue,
            "masterLevel": masterValue
        };

        try {
            await axios
                .post(`${backend.IP}/api/dmx/colorChangeSlider`, data)
                .then((res) => {
                    console.log(res.data);
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        };
    };

    // Get Preset information from backend.
    useEffect(() => {

        try {
            axios
                .get(`${backend.IP}/api/dmx/getPresets`)
                .then((res) => {
                    setPresets(res.data);
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        }

    }, []);

    if (presets.length === 0) {
        return <h1>Loading.....</h1>;
    }

    return (

        <>

            {!editPresets &&

                <div className="slider-control">

                    <div className="cove-slider-control">

                        <div className="rgbw-container">

                            <div className="rgbw-slider-container">

                                <div className="fade-buttons">

                                    <button
                                        className="cove-button red-button"
                                        onClick={() => {
                                            setRedValue(255);
                                            handleChange(
                                                [
                                                    { "red": 255 },
                                                    { "grn": -1 },
                                                    { "blu": -1 },
                                                    { "wht": -1 },
                                                    { "master": masterValue },
                                                    { "duration": duration }
                                                ])
                                        }}
                                    >
                                        Red On
                                    </button>

                                    <button
                                        className="cove-button red-button"
                                        onClick={() => {
                                            setRedValue(0);
                                            handleChange(
                                                [
                                                    { "red": 0 },
                                                    { "grn": -1 },
                                                    { "blu": -1 },
                                                    { "wht": -1 },
                                                    { "master": masterValue },
                                                    { "duration": duration }
                                                ])
                                        }}
                                    >
                                        Red Off
                                    </button>

                                </div>

                                <label
                                    className="slider-label slider-red"
                                >
                                    Red<br />{redValue}
                                </label>

                                <Slider
                                    sx={{
                                        color: "#bb0000",
                                        height: "100%",
                                        '& .MuiSlider-thumb': {
                                            borderRadius: '0.25rem',
                                            height: "1.5rem",
                                            width: "3.0rem"
                                        },
                                        '& .MuiSlider-rail': {
                                            borderRadius: '0.25rem',
                                            width: "1.0rem"
                                        },
                                        '& .MuiSlider-track': {
                                            width: "0.5rem"
                                        },
                                        '& input[type="range"]': {
                                            WebkitAppearance: 'slider-vertical',
                                        },
                                    }}
                                    orientation="vertical"
                                    defaultValue={0}
                                    min={0}
                                    max={255}
                                    value={redValue}
                                    onChange={(e) => {
                                        setRedValue(e.target.value);
                                        handleSliderChange();
                                    }}
                                />

                            </div>

                            <div className="rgbw-slider-container">

                                <div className="fade-buttons">

                                    <button
                                        className="cove-button grn-button"
                                        onClick={() => {
                                            setGrnValue(255);
                                            handleChange(
                                                [
                                                    { "red": -1 },
                                                    { "grn": 255 },
                                                    { "blu": -1 },
                                                    { "wht": -1 },
                                                    { "master": masterValue },
                                                    { "duration": duration }
                                                ])
                                        }}
                                    >
                                        Grn On
                                    </button>

                                    <button
                                        className="cove-button grn-button"
                                        onClick={() => {
                                            setGrnValue(0);
                                            handleChange(
                                                [
                                                    { "red": -1 },
                                                    { "grn": 0 },
                                                    { "blu": -1 },
                                                    { "wht": -1 },
                                                    { "master": masterValue },
                                                    { "duration": duration }
                                                ])
                                        }}
                                    >
                                        Grn Off
                                    </button>

                                </div>

                                <label
                                    className="slider-label slider-grn"
                                >
                                    Grn<br />{grnValue}
                                </label>

                                <Slider
                                    sx={{
                                        color: "#00bb00",
                                        height: "100%",
                                        '& .MuiSlider-thumb': {
                                            borderRadius: '0.25rem',
                                            height: "1.5rem",
                                            width: "3.0rem"
                                        },
                                        '& .MuiSlider-rail': {
                                            borderRadius: '0.25rem',
                                            width: "1.0rem"
                                        },
                                        '& .MuiSlider-track': {
                                            width: "0.5rem"
                                        },
                                        '& input[type="range"]': {
                                            WebkitAppearance: 'slider-vertical',
                                        },
                                    }}
                                    orientation="vertical"
                                    defaultValue={0}
                                    min={0}
                                    max={255}
                                    value={grnValue}
                                    onChange={(e) => {
                                        setGrnValue(e.target.value);
                                        handleSliderChange();
                                    }}
                                />

                            </div>

                            <div className="rgbw-slider-container">

                                <div className="fade-buttons">

                                    <button
                                        className="cove-button blu-button"
                                        onClick={() => {
                                            setBluValue(255);
                                            handleChange(
                                                [
                                                    { "red": -1 },
                                                    { "grn": -1 },
                                                    { "blu": 255 },
                                                    { "wht": -1 },
                                                    { "master": masterValue },
                                                    { "duration": duration }
                                                ])
                                        }}
                                    >
                                        Blu On
                                    </button>

                                    <button
                                        className="cove-button blu-button"
                                        onClick={() => {
                                            setBluValue(0);
                                            handleChange(
                                                [
                                                    { "red": -1 },
                                                    { "grn": -1 },
                                                    { "blu": 0 },
                                                    { "wht": -1 },
                                                    { "master": masterValue },
                                                    { "duration": duration }
                                                ])
                                        }}
                                    >
                                        Blu Off
                                    </button>

                                </div>

                                <label
                                    className="slider-label slider-blu"
                                >
                                    Blu<br />{bluValue}
                                </label>

                                <Slider
                                    sx={{
                                        color: "#0077bb",
                                        height: "100%",
                                        '& .MuiSlider-thumb': {
                                            borderRadius: '0.25rem',
                                            height: "1.5rem",
                                            width: "3.0rem"
                                        },
                                        '& .MuiSlider-rail': {
                                            borderRadius: '0.25rem',
                                            width: "1.0rem"
                                        },
                                        '& .MuiSlider-track': {
                                            width: "0.5rem"
                                        },
                                        '& input[type="range"]': {
                                            WebkitAppearance: 'slider-vertical',
                                        },
                                    }}
                                    orientation="vertical"
                                    defaultValue={0}
                                    min={0}
                                    max={255}
                                    value={bluValue}
                                    onChange={(e) => {
                                        setBluValue(e.target.value);
                                        handleSliderChange();
                                    }}
                                />

                            </div>

                            <div className="rgbw-slider-container">

                                <div className="fade-buttons">

                                    <button
                                        className="cove-button wht-button"
                                        onClick={() => {
                                            setWhtValue(255);
                                            handleChange(
                                                [
                                                    { "red": -1 },
                                                    { "grn": -1 },
                                                    { "blu": -1 },
                                                    { "wht": 255 },
                                                    { "master": masterValue },
                                                    { "duration": duration }
                                                ])
                                        }}
                                    >
                                        Wht On
                                    </button>

                                    <button
                                        className="cove-button wht-button"
                                        onClick={() => {
                                            setWhtValue(0);
                                            handleChange(
                                                [
                                                    { "red": -1 },
                                                    { "grn": -1 },
                                                    { "blu": -1 },
                                                    { "wht": 0 },
                                                    { "master": masterValue },
                                                    { "duration": duration }
                                                ])
                                        }}
                                    >
                                        Wht Off
                                    </button>

                                </div>

                                <label
                                    className="slider-label slider-wht"
                                >
                                    Wht<br />{whtValue}
                                </label>

                                <Slider
                                    sx={{
                                        color: "#888888",
                                        height: "100%",
                                        '& .MuiSlider-thumb': {
                                            borderRadius: '0.25rem',
                                            height: "1.5rem",
                                            width: "3.0rem"
                                        },
                                        '& .MuiSlider-rail': {
                                            borderRadius: '0.25rem',
                                            width: "1.0rem"
                                        },
                                        '& .MuiSlider-track': {
                                            width: "0.5rem"
                                        },
                                        '& input[type="range"]': {
                                            WebkitAppearance: 'slider-vertical',
                                        },
                                    }}
                                    orientation="vertical"
                                    defaultValue={0}
                                    min={0}
                                    max={255}
                                    value={whtValue}
                                    onChange={(e) => {
                                        setWhtValue(e.target.value);
                                        handleSliderChange();
                                    }}
                                />

                            </div>

                        </div>

                        <div className="master-control">

                            <label
                                className="cove-label"
                            >
                                Master / Intensity
                            </label>

                            <div className="master-container">

                                <Slider
                                    sx={{
                                        color: "#aa5500",
                                        marginLeft: "1.5rem",
                                        marginRight: "1.5rem",
                                        width: "100%",
                                        '& .MuiSlider-thumb': {
                                            borderRadius: '0.25rem',
                                            height: "3.0rem",
                                            width: "1.5rem"
                                        },
                                        '& .MuiSlider-rail': {
                                            borderRadius: '0.25rem',
                                            height: "1.0rem"
                                        },
                                        '& .MuiSlider-track': {
                                            height: "0.5rem"
                                        },
                                        '& input[type="range"]': {
                                            WebkitAppearance: 'slider-vertical',
                                        },
                                    }}
                                    defaultValue={255}
                                    min={0}
                                    max={255}
                                    value={masterValue}
                                    onChange={(e) => {
                                        setMasterValue(e.target.value);
                                        handleSliderChange();
                                    }}
                                />

                                <div>

                                    <label
                                        className="slider-label"
                                    >
                                        {masterValue}
                                    </label>

                                </div>

                            </div>

                            <div className="master-buttons">

                                <button
                                    className="cove-button"
                                    onClick={() => {
                                        setMasterValue(255);
                                        handleChange(
                                            [
                                                { "red": redValue },
                                                { "grn": grnValue },
                                                { "blu": bluValue },
                                                { "wht": whtValue },
                                                { "master": 255 },
                                                { "duration": duration }
                                            ])
                                    }}
                                >
                                    Master On
                                </button>

                                <button
                                    className="cove-button"
                                    onClick={() => {
                                        setMasterValue(0);
                                        handleChange(
                                            [
                                                { "red": redValue },
                                                { "grn": grnValue },
                                                { "blu": bluValue },
                                                { "wht": whtValue },
                                                { "master": 0 },
                                                { "duration": duration }
                                            ])
                                    }}
                                >
                                    Master Off
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="presetsAndFadeRate">


                        <PresetButtons
                            presets={presets}
                            setEditPresets={setEditPresets}
                            setRedValue={setRedValue}
                            setGrnValue={setGrnValue}
                            setBluValue={setBluValue}
                            setWhtValue={setWhtValue}
                            setMasterValue={setMasterValue}
                        />

                        <FadeRateSelect
                            duration={duration}
                            setDuration={setDuration}
                        />

                    </div>

                </div>
            }

            {editPresets &&
                <EditPresets
                    presets={presets}
                    setPresets={setPresets}
                    setEditPresets={setEditPresets}
                    setRedValue={setRedValue}
                    setGrnValue={setGrnValue}
                    setBluValue={setBluValue}
                    setWhtValue={setWhtValue}
                    setMasterValue={setMasterValue}
                />
            }
        </>

    );
};


export default SliderControl;