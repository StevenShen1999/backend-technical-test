import { writeFile } from 'fs';
import { unparse } from 'papaparse';

export const task4 = async (processedResponse: any): Promise<any> => {
    // Convert processedResponse into tabulated entries
    let jsonArray: any = [];

    Object.keys(processedResponse).forEach((yearLevel: string) => {
        Object.keys(processedResponse[yearLevel]).forEach((subject: string) => {
            processedResponse[yearLevel][subject].forEach((lesson: string) => {
                jsonArray.push({
                    "Year": yearLevel,
                    "Subject": subject,
                    "Lesson": lesson
                });
            })
        })
    })

    // Convert back into CSV with papaparse
    const csvData = unparse(jsonArray);

    // Write CSV to file
    writeFile('task4.csv', csvData, (err) => {
        if (err) throw err;
        console.log('Written!');
    });
};