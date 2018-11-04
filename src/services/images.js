import axios from 'axios';
import { IMAGES_SERVICE_URL, IMAGES_SERVICE_KEY } from '../config';


let config = {
    url: IMAGES_SERVICE_URL,
    key: IMAGES_SERVICE_KEY
};

export const setConfig = (arg) => config = { ...config, ...arg };

export const getConfig = () => {
    const result = { ...config };
    console.log('Requested config', result);
    return result;
};

export const analyze = async ({ buffer }) => {
	try {
        const res = await axios({
            method: 'post',
            url: `${config.url}?visualFeatures=Categories,Description,Color`,
            data: buffer,
            headers: {
                'Ocp-Apim-Subscription-Key': config.key,
                'Content-Type': 'application/octet-stream'
            }
        });
        return res.data;
    } catch (error) {
        console.log('ERROR', error);
    }
};