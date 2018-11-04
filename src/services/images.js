import axios from 'axios';
import { IMAGES_SERVICE_URL, IMAGES_SERVICE_KEY } from '../config';

export const analyze = async ({ buffer }) => {
	try {
        const res = await axios({
            method: 'post',
            url: `${IMAGES_SERVICE_URL}?visualFeatures=Categories,Description,Color`,
            data: buffer,
            headers: {
                'Ocp-Apim-Subscription-Key': IMAGES_SERVICE_KEY,
                'Content-Type': 'application/octet-stream'
            }
        });
        return res.data;
    } catch (error) {
        console.log('ERROR', error);
    }
};