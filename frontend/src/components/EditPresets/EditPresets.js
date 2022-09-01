import { useState } from 'react';
import axios from 'axios';
import backend from '../../userConfig/backendIP';
import './EditPresets.css';


const EditPresets = ({
    presets,
    setPresets,
    setEditPresets,
    setRedValue,
    setGrnValue,
    setBluValue,
    setWhtValue,
    setMasterValue
}) => {

    const minColor = 0;
    const maxColor = 255;

    const [selectedPreset, setSelectedPreset] = useState(presets[0]);
    const [tempPreset, setTempPreset] = useState({
        preset: "",
        label: "",
        red: "",
        grn: "",
        blu: "",
        wht: "",
        duration: "",
        master: ""
    });

    const selectPresetToEdit = (selected) => {
        setSelectedPreset(presets[selected]);
        setTempPreset({
            preset: "",
            label: "",
            red: "",
            grn: "",
            blu: "",
            wht: "",
            duration: "",
            master: ""
        });
    };

    const testChanges = () => {
        if (tempPreset.preset === "") tempPreset.preset = selectedPreset.preset;
        if (tempPreset.label === "") tempPreset.label = selectedPreset.label;
        if (tempPreset.red === "") tempPreset.red = selectedPreset.red;
        if (tempPreset.grn === "") tempPreset.grn = selectedPreset.grn;
        if (tempPreset.blu === "") tempPreset.blu = selectedPreset.blu;
        if (tempPreset.wht === "") tempPreset.wht = selectedPreset.wht;
        if (tempPreset.duration === "") tempPreset.duration = selectedPreset.duration;
        if (tempPreset.master === "") tempPreset.master = selectedPreset.master;

        try {
            axios
                .post(`${backend.IP}/api/dmx/presetSelect`, tempPreset)
                .then((res) => {
                    console.log(`From backend: ${JSON.stringify(res.data)}`);
                    setRedValue(parseInt(res.data.red));
                    setGrnValue(parseInt(res.data.grn));
                    setBluValue(parseInt(res.data.blu));
                    setWhtValue(parseInt(res.data.wht));
                    setMasterValue(parseInt(res.data.master));
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        }

    };

    const discardChanges = () => {
        setTempPreset({
            preset: "",
            label: "",
            red: "",
            grn: "",
            blu: "",
            wht: "",
            duration: "",
            master: ""
        });

        const reset = {
            preset: "",
            label: "",
            red: 0,
            grn: 0,
            blu: 0,
            wht: 0,
            duration: 0,
            master: 255
        }

        try {
            axios
                .post(`${backend.IP}/api/dmx/presetSelect`, reset)
                .then((res) => {
                    console.log(`From backend: ${JSON.stringify(res.data)}`);
                    setRedValue(parseInt(res.data.red));
                    setGrnValue(parseInt(res.data.grn));
                    setBluValue(parseInt(res.data.blu));
                    setWhtValue(parseInt(res.data.wht));
                    setMasterValue(parseInt(res.data.master));
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        }
    };

    const saveChanges = () => {
        if (tempPreset.preset === "") tempPreset.preset = selectedPreset.preset;
        if (tempPreset.label === "") tempPreset.label = selectedPreset.label;
        if (tempPreset.red === "") tempPreset.red = selectedPreset.red;
        if (tempPreset.grn === "") tempPreset.grn = selectedPreset.grn;
        if (tempPreset.blu === "") tempPreset.blu = selectedPreset.blu;
        if (tempPreset.wht === "") tempPreset.wht = selectedPreset.wht;
        if (tempPreset.duration === "") tempPreset.duration = selectedPreset.duration;
        if (tempPreset.master === "") tempPreset.master = selectedPreset.master;

        try {
            axios
                .post(`${backend.IP}/api/dmx/presetUpdate`, tempPreset)
                .then((res) => {
                    setPresets(res.data);
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        }
    };

    const finished = () => {
        setEditPresets(false);
    };

    const handleLabelChange = (event) => {
        setTempPreset({ ...tempPreset, label: event.target.value });
    };

    const handleColorValueChange = (event) => {
        const { name } = event.target;
        let value = Math.max(minColor, Math.min(maxColor, Number(event.target.value)));

        if (isNaN(value) || value < 0) {
            value = 0;
        } else if (value > 255) {
            value = 255;
        }

        switch (name) {
            case "redValue":
                setTempPreset({ ...tempPreset, red: value });
                break;
            case "grnValue":
                setTempPreset({ ...tempPreset, grn: value });
                break;
            case "bluValue":
                setTempPreset({ ...tempPreset, blu: value });
                break;
            case "whtValue":
                setTempPreset({ ...tempPreset, wht: value });
                break;
            case "durationValue":
                setTempPreset({ ...tempPreset, duration: value });
                break;
            case "masterValue":
                setTempPreset({ ...tempPreset, master: value });
                break;
            default:
                break;
        }
    };

    return (

        <div className="editPresets">

            <div className="preset-editor">

                <div className="preset-select">

                    <div className="preset-select-label">
                        <label className="cove-label">Preset to Edit</label>
                    </div>

                    <div className="preset-row">

                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(0) }}
                        >
                            {presets[0].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(1) }}
                        >
                            {presets[1].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(2) }}
                        >
                            {presets[2].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(3) }}
                        >
                            {presets[3].label}
                        </button>

                    </div>

                    <div className="preset-row">

                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(4) }}
                        >
                            {presets[4].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(5) }}
                        >
                            {presets[5].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(6) }}
                        >
                            {presets[6].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(7) }}
                        >
                            {presets[7].label}
                        </button>

                    </div>

                    <div className="preset-row">

                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(8) }}
                        >
                            {presets[8].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(9) }}
                        >
                            {presets[9].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(10) }}
                        >
                            {presets[10].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(11) }}
                        >
                            {presets[11].label}
                        </button>

                    </div>

                    <div className="preset-row">

                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(12) }}
                        >
                            {presets[12].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(13) }}
                        >
                            {presets[13].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(14) }}
                        >
                            {presets[14].label}
                        </button>
                        <button
                            className="cove-button"
                            onClick={() => { selectPresetToEdit(15) }}
                        >
                            {presets[15].label}
                        </button>

                    </div>


                </div>

                <div className="edit-values">

                    <label className="cove-label">Edit Preset Values</label>

                    <div className="edit-selected-label">
                        <label className="cove-label-medium">Currently Selected:</label>
                        <label className="edit-selected-number">{selectedPreset.preset}</label>
                    </div>

                    <div>

                        <div className="preset-value">

                            <label className="preset-label">
                                Label:
                            </label>

                            <input
                                className="preset-input"
                                type="text"
                                name="label"
                                maxLength={10}
                                placeholder={selectedPreset.label}
                                value={tempPreset.label}
                                onChange={handleLabelChange}
                            />

                        </div>

                        <div className="preset-value">

                            <label className="preset-label">
                                Red Value:
                            </label>

                            <input
                                className="preset-input"
                                type="text"
                                name="redValue"
                                maxLength={3}
                                placeholder={selectedPreset.red}
                                value={tempPreset.red}
                                onChange={handleColorValueChange}
                            />

                        </div>

                        <div className="preset-value">

                            <label className="preset-label">
                                Green Value:
                            </label>

                            <input
                                className="preset-input"
                                type="text"
                                name="grnValue"
                                maxLength={3}
                                placeholder={selectedPreset.grn}
                                value={tempPreset.grn}
                                onChange={handleColorValueChange}
                            />

                        </div>

                        <div className="preset-value">

                            <label className="preset-label">
                                Blue Value:
                            </label>

                            <input
                                className="preset-input"
                                type="text"
                                name="bluValue"
                                maxLength={3}
                                placeholder={selectedPreset.blu}
                                value={tempPreset.blu}
                                onChange={handleColorValueChange}
                            />

                        </div>

                        <div className="preset-value">

                            <label className="preset-label">
                                White Value:
                            </label>

                            <input
                                className="preset-input"
                                type="text"
                                name="whtValue"
                                maxLength={3}
                                placeholder={selectedPreset.wht}
                                value={tempPreset.wht}
                                onChange={handleColorValueChange}
                            />

                        </div>

                        <div className="preset-value">

                            <label className="preset-label">
                                Fade Duration:
                            </label>

                            <input
                                className="preset-input"
                                type="text"
                                name="durationValue"
                                maxLength={3}
                                placeholder={selectedPreset.duration}
                                value={tempPreset.duration}
                                onChange={handleColorValueChange}
                            />

                        </div>

                        <div className="preset-value">

                            <label className="preset-label">
                                Master Value:
                            </label>

                            <input
                                className="preset-input"
                                type="text"
                                name="masterValue"
                                maxLength={3}
                                placeholder={selectedPreset.master}
                                value={tempPreset.master}
                                onChange={handleColorValueChange}
                            />

                        </div>

                    </div>

                </div>

            </div>

            <div className="edit-buttons">

                <button
                    className="edit-button"
                    onClick={() => { testChanges() }}
                >
                    Test
                </button>

                <button
                    className="edit-button"
                    onClick={() => { discardChanges() }}
                >
                    Discard
                </button>

                <button
                    className="edit-button"
                    onClick={() => { saveChanges() }}
                >
                    Save
                </button>

                <button
                    className="edit-button"
                    onClick={() => { finished() }}
                >
                    Done
                </button>


            </div>

        </div>

    );

};


export default EditPresets;