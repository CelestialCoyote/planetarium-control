import axios from 'axios';
import backend from '../../userConfig/backendIP';
import './PresetButtons.css';


const PresetButtons = ({
    presets,
    setEditPresets,
    setRedValue,
    setGrnValue,
    setBluValue,
    setWhtValue,
    setMasterValue
}) => {

    const selectPreset = (preset) => {

        let data = presets[preset];
        setRedValue(parseInt(presets[preset].red));
        setGrnValue(parseInt(presets[preset].grn));
        setBluValue(parseInt(presets[preset].blu));
        setWhtValue(parseInt(presets[preset].wht));
        setMasterValue(parseInt(presets[preset].master));

        try {
            axios
                .post(`${backend.IP}/api/dmx/colorChangePreset`, data)
                .then((res) => {
                    console.log(res.data);
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        }

    };

    const editPresets = () => {
        setEditPresets(true);
    }

    return (

        <div className="preset-buttons">

            <label className="cove-label">Cove Level Presets</label>

            <div className="preset-row">

                <button
                    className="cove-button"
                    onClick={() => { selectPreset(0) }}
                >
                    {presets[0].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(1) }}
                >
                    {presets[1].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(2) }}
                >
                    {presets[2].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(3) }}
                >
                    {presets[3].label}
                </button>

            </div>

            <div className="preset-row">

                <button
                    className="cove-button"
                    onClick={() => { selectPreset(4) }}
                >
                    {presets[4].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(5) }}
                >
                    {presets[5].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(6) }}
                >
                    {presets[6].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(7) }}
                >
                    {presets[7].label}
                </button>

            </div>

            <div className="preset-row">

                <button
                    className="cove-button"
                    onClick={() => { selectPreset(8) }}
                >
                    {presets[8].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(9) }}
                >
                    {presets[9].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(10) }}
                >
                    {presets[10].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(11) }}
                >
                    {presets[11].label}
                </button>

            </div>

            <div className="preset-row">

                <button
                    className="cove-button"
                    onClick={() => { selectPreset(12) }}
                >
                    {presets[12].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(13) }}
                >
                    {presets[13].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(14) }}
                >
                    {presets[14].label}
                </button>
                <button
                    className="cove-button"
                    onClick={() => { selectPreset(15) }}
                >
                    {presets[15].label}
                </button>

            </div>

            <button
                className="edit-button"
                onClick={() => { editPresets() }}
            >
                Edit Presets
            </button>

        </div>

    );

};


export default PresetButtons;
