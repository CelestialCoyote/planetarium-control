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
router.get('/presets', (req, res) => {
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

// Set color(s) instantly, no fades.
router.post('/colorChangeSlider', (req, res) => {
    try {
        let channelData = req.body;

        // Set color level state with incoming values.
        stateRed = channelData.redLevel;
        stateGrn = channelData.grnLevel;
        stateBlu = channelData.bluLevel;
        stateWht = channelData.whtLevel;
        stateMaster = channelData.masterLevel;

        if (!channelData)
            return res
                .status(400)
                .send('No channelData received.');

        let red = getLevel(channelData.redLevel, channelData.masterLevel);
        let grn = getLevel(channelData.grnLevel, channelData.masterLevel);
        let blu = getLevel(channelData.bluLevel, channelData.masterLevel);
        let wht = getLevel(channelData.whtLevel, channelData.masterLevel);

        //
        console.log(`From slider: ${stateRed}, ${stateGrn}, ${stateBlu}, ${stateWht}, ${stateMaster}`);

        return res
            .status(200)
            .send('Fader status: 200');
    } catch (error) {
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});

router.post('/colorChangeButton', (req, res) => {
    try {
        const data = req.body;
        console.log(`button data: ${JSON.stringify(req.body)}`);

        // Update stateMaster with incoming values.
        //stateMaster = data[4].master;
        //console.log(`stateMaster: ${stateMaster}`);


        //const red = getLevel(data[0].red, data[4].master);
        //const grn = getLevel(data[1].grn, data[4].master);
        //const blu = getLevel(data[2].blu, data[4].master);
        //const wht = getLevel(data[3].wht, data[4].master);
        //const duration = parseInt(data[5].duration);
        //const timer = parseInt(duration) * 1000;

        //let channels = {};

//        if (red[0] >= 0) {
//            channels[dmxChannels.redLSB] = red[0];
//            channels[dmxChannels.redMSB] = red[1];
//            stateRed = data[0].red;
//            console.log(`stateRed: ${stateRed}`);
//        }
//        if (grn[0] >= 0) {
//            channels[dmxChannels.grnLSB] = grn[0];
//            channels[dmxChannels.grnMSB] = grn[1];
//            stateGrn = data[1].grn;
//            console.log(`stateGrn: ${stateGrn}`);
//        }
//        if (blu[0] >= 0) {
//            channels[dmxChannels.bluLSB] = blu[0];
//            channels[dmxChannels.bluMSB] = blu[1];
//            stateBlu = data[2].blu;
//            console.log(`stateBlu: ${stateBlu}`);
//        }
//        if (wht[0] >= 0) {
//            channels[dmxChannels.whtLSB] = wht[0];
//            channels[dmxChannels.whtMSB] = wht[1];
//            stateWht = data[3].wht;
//            console.log(`stateWht: ${stateWht}`);
//        }
//
//        new DMX.Animation().add(channels, timer).run(universe);

        if (!data)
            return res
                .status(400)
                .send('No channelData received.');

        return res
            .status(200)
            .send('Button status: 200');

    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});


module.exports = router;
