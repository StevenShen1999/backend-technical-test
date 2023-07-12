export const task2 = async (): Promise<any> => {
    const response = await fetch('https://api2.inquisitive.com/latest/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "operationName": "ContentBrowser",
            "query": "query ContentBrowser($input: ContentBrowserInput!) { contentBrowser(input: $input) {  topics { name  units { name  lessons { id name   subjects { id name } years { id name } }  } } }}",
            "variables": {
                "input": {
                    "years": ["1", "2", "3", "4"],
                    "subjects": ["history", "science-and-technology", "english", "maths"],
                    "curriculums": [],
                    "includingDraft": false,
                    "includingComingSoon": false,
                    "includingFuture": false,
                    "includingEmptyTopic": false,
                    "initialTopics": 10,
                    "topicIds": []
                }
            }
        }),
    });

    if (response.ok) {
        const body = await response.json();
        console.log(JSON.stringify(body, null, 2));
        return body.data;
    } else {
        throw new Error('Server Temporarily Unreachable. Try Again Later!');
    }
}