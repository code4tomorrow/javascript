console.log("About to fetch API");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        console.log(res);
        if (!res.ok) {
            //means 404 error occurred
            return null;
        }

        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        if (e instanceof TypeError) {
            console.log("Something is wrong with requested server.");
        }
        else {
            console.log("Unanticipated error:\n" + e);
        }
    });