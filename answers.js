fetch("https://msu-webdev.github.io/api/start.json")
    .then(response => response.json())
    .then(data => {
        // Solve Step 1: How many moons fit between Earth and the Moon?
        let challenge1 = Math.floor(384400 / 3474);
        console.log(challenge1);  // Output: 110

        // Fetch the next API step with the correct answer
        let nextUrl = `https://msu-webdev.github.io/api/${challenge1}.json`;
        return fetch(nextUrl);
    })

    .then(response => response.json())
    .then(data => {
        // Solve Step 2: What was the percent change in enrollment at MSU from 2023 to 2024?
        let enrollment2023 = 51316;
        let enrollment2024 = 52089;
        let challenge2 = ((enrollment2024 - enrollment2023) / enrollment2023) * 100;
        challenge2 = Math.round(challenge2 * 10); 
        console.log(challenge2);  // Output: 15

        // Fetch Step 3 using the correct answer
        let nextUrl = `https://msu-webdev.github.io/api/${challenge2}.json`;
        return fetch(nextUrl);
    })

    .then(response => response.json())
    .then(data => {
        // Solve Step 3: Multiply the Nintendo bits by the Super Nintendo bits
        let nesBits = 8;   // Nintendo Entertainment System (NES)
        let snesBits = 16; // Super Nintendo Entertainment System (SNES)
        let challenge3 = nesBits * snesBits;

        console.log(challenge3);  // Output: 128

        // Fetch the final API step
        let nextUrl = `https://msu-webdev.github.io/api/${challenge3}.json`;
        return fetch(nextUrl);
    })

    .then(response => response.json())
    .then(data => {
        // Print the final message from the API
        console.log(data.Message);  // Output: "Congratulations! You have reached the end."
    })

    .catch(error => console.error("Error:", error));
