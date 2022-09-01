const express = require("express");
const fs = require("fs");
const router = express.Router();


const getPresetsFromFile = () => {
    try {
        const data = JSON.parse(fs.readFileSync('./config/presets.json', "utf8"));
        return data;
    } catch (error) {
        console.error(error);
        return;
    }
};

// Determine actual color level based on master value.
const getLevel = (primary, master) => {
    let level = parseInt(primary) * (parseInt(master) * 0.00392157);

    return Math.round(level);
};

const getRGBWValues = (redVal, grnVal, bluVal, whtVal, master) => {
    let red = redVal < 0 ? -1 : getLevel(redVal, master);
    let grn = grnVal < 0 ? -1 : getLevel(grnVal, master);
    let blu = bluVal < 0 ? -1 : getLevel(bluVal, master);
    let wht = whtVal < 0 ? -1 : getLevel(whtVal, master);

    return [red, grn, blu, wht];
};

// Send Preset buttons data to Frontend.
router.get('/getPresets', (req, res) => {
    const presets = getPresetsFromFile();

    try {
        return res
            .status(200)
            .send(presets);
    } catch (error) {
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});


module.exports = router;
