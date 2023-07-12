import { task1 } from './task1';
import { task2 } from './task2';
import { task3 } from './task3';
import { task4 } from './task4';
import { task5 } from './task5';

const generalTasks = async (): Promise<void> => {
    console.log('Hello World');
    await task1();
    const responseData = await task2();
    const processedResponse = task3(responseData);
    // FIXME: Would be better to receive the directory and name that csv file is written to, in case of multiple files of different
    // Content but same name being downloaded, we should assign random characters to differentiate them
    await task4(processedResponse);
    // FIXME: To continue on, should then pass the file directory in to task 5
    task5();
}

generalTasks();