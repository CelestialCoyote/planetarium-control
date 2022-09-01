import axios from "axios";


export async function getPresets() {

    try {
        const response = axios.get(`http://localhost:3042/api/dmx/getPresets`);
        console.log(`response from axios: ${response}`);

        return await response.data;
    } catch (error) {
        console.log('Get User Presets failed.', error);

        return [];
    };
};
