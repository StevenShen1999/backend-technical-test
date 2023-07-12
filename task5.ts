import * as dotenv from 'dotenv'
import AWS from 'aws-sdk';
import { readFile } from 'fs';

function readCSVFile(filePath: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

export const task5 = async (): Promise<void> => {
    dotenv.config();

    AWS.config.update({
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3();

    const localCSVFile = await readCSVFile("task4.csv");

    const s3Params = {
        Bucket: "inquisitive-backend-developer-tests",
        Key: "stevenShen/task4.csv",
        Body: localCSVFile,
    };

    s3.putObject(s3Params, (err: any, data: any) => {
        if (err) {
            console.error('Error uploading file:', err);
        } else {
            console.log('Uploaded CSV!');
        }
    });

}