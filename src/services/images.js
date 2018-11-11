import axios from 'axios';
import { IMAGES_SERVICE_URL, IMAGE_SERVICE_ITERATION_ID, IMAGES_SERVICE_PREDICTION_KEY } from '../config';


let config = {
    url: IMAGES_SERVICE_URL,
    iteration: IMAGE_SERVICE_ITERATION_ID,
    key: IMAGES_SERVICE_PREDICTION_KEY
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
            url: `${config.url}?iterationId=${config.iteration}`,
            data: buffer,
            headers: {
                'Prediction-Key': config.key,
                'Content-Type': 'application/octet-stream'
            }
        });
        return res.data.predictions.map(prediction => ({
            probability: prediction.probability,
            name: prediction.tagName
        }));
    } catch (error) {
        console.log('ERROR', error);
        throw error;
    }
};