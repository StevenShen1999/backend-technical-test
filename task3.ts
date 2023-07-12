import { InternalObject, Lesson, Topic, Unit } from "./models/Topic";

export const task3 = async (responseData: any): Promise<any> => {
    // TODO: Currently using any, should aim for defining a general class to capture responseData format
    // NOTE1: Skipping error checking in this usecase

    let processedResponse: any = {};

    responseData.contentBrowser.topics.forEach((topic: Topic) => {
        topic.units.forEach((unit: Unit) => {
            unit.lessons.forEach((lesson: Lesson) => {
                // Step 0: Fetch out the year level
                // FIXME/CLARIFY: Could there be lessons for multiple year levels?
                // The array datastructure implies it could but seem to be all single year
                const yearLevels = lesson.years.map((year: InternalObject) => year.name);

                // Step 1: Fetch out the subject name
                const subjects = lesson.subjects.map((subject: InternalObject) => subject.name);

                // Step 2: Fetch out the lesson name
                const lessonName = lesson.name;

                // Step 4: Update the processedResponse object with these combinations
                yearLevels.forEach((yearLevel: any) => {
                    // Step 4.0: Year level is the main key in the processedResponse, create key if it doesn't already exist
                    const yearLevelKey = `Year ${yearLevel}`;
                    if (!(yearLevelKey in processedResponse)) {
                        processedResponse[yearLevelKey] = {}
                    }

                    subjects.forEach((subject: any) => {
                        if (!(subject in processedResponse[yearLevelKey])) {
                            processedResponse[yearLevelKey][subject] = []
                        }
                        processedResponse[yearLevelKey][subject].push(lessonName);
                    });
                });
            });
        });
    });

    return processedResponse;
}