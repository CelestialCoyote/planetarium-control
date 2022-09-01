import './FadeRateSelect.css';


const FadeRateSelect = ({ duration, setDuration }) => {

    const handleRateSelect = (e) => {
        setDuration(e.target.value);
    }

    return (

        <div className="fadeRateSelect">

            <label
                className="cove-label"
            >
                Fade Rate Selection
            </label>

            <div className="rateSelection">

                <div className="rate-select-value">

                    <label
                        className="cove-label-small"
                        style={{ marginRight: "1.0rem" }}
                    >
                        Currnt Fade Rate (Duration):
                    </label>

                    <label
                        className="cove-label-small"
                        style={{ fontWeight: "bold" }}
                    >
                        {duration}
                    </label>

                    <label
                        className="cove-label-small"
                        style={{ marginLeft: "1.0rem" }}
                    >
                        seconds
                    </label>

                </div>

                <div className="buttonRow">

                    <input
                        type="radio"
                        name="fade"
                        id="fade01"
                        value="2"
                        onChange={handleRateSelect}
                    />
                    <label htmlFor="fade01">2 Sec</label>

                    <input
                        type="radio"
                        name="fade"
                        id="fade02"
                        value="3"
                        onChange={handleRateSelect}
                        defaultChecked
                    />
                    <label htmlFor="fade02">3 Sec</label>

                    <input
                        type="radio"
                        name="fade"
                        id="fade03"
                        value="5"
                        onChange={handleRateSelect}
                    />
                    <label htmlFor="fade03">5 Sec</label>

                </div>

                <div className="buttonRow">

                <input
                        type="radio"
                        name="fade"
                        id="fade04"
                        value="10"
                        onChange={handleRateSelect}
                    />
                    <label htmlFor="fade04">10 Sec</label>

                    <input
                        type="radio"
                        name="fade"
                        id="fade05"
                        value="30"
                        onChange={handleRateSelect}
                    />
                    <label htmlFor="fade05">30 Sec</label>

                    <input
                        type="radio"
                        name="fade"
                        id="fade06"
                        value="60"
                        onChange={handleRateSelect}
                    />
                    <label htmlFor="fade06">60 Sec</label>

                </div>

            </div>

        </div>

    )

};


export default FadeRateSelect;
