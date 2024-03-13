import fs from 'fs';
import path from 'path';
const tf = require('@tensorflow/tfjs-node');
// @ts-ignore
import Upscaler from 'upscaler/node';

export class EnchancerController {
    static async enchanceImages() {
        const pathToImages = path.resolve(__dirname, '../../../in');
        const pathToOut = path.resolve(pathToImages, '../out');
        const images = fs.readdirSync(pathToImages);
        const upscaler = new Upscaler();
        for (const imageName of images) {
            const image = tf.node.decodeImage(
                fs.readFileSync(pathToImages + '/' + imageName),
                3
            );
            const tensor = await upscaler.upscale(image);
            const upscaledTensor = await tf.node.encodePng(tensor);
            fs.writeFileSync(
                pathToOut + '/' + path.parse(imageName).name + '.png',
                upscaledTensor
            );

            // dispose the tensors!
            image.dispose();
            tensor.dispose();
            upscaledTensor.dispose();
        }
    }
}
