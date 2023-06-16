var gifsDiv = document.getElementById("gifsDiv");
var ldBtn = document.getElementById("ldBtn");

const apiKey = "cf9182cf58f52e0c0d3f0409fb37c8d8";
url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
var j = 0;
document.addEventListener("DOMContentLoaded", async (event) => {

    const response = await fetch(url);
    const data = await response.json();
    const images = data.results;



    for (let i = 0; i < 3; i++) {
        const img = document.createElement("img");
        const h1 = document.createElement("h4");
        const h4 = document.createElement("h5");
        const divv = document.createElement("div");
        divv.setAttribute("class", "col");

        h4.innerHTML = images[i].vote_count;
        h1.innerHTML = images[i].title;
        img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
        img.style.width = "200px";
        divv.appendChild(h1);
        divv.appendChild(img);
        divv.appendChild(h4);
        gifsDiv.appendChild(divv);
        j += 1;

    }
});

ldBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)


    try {
        //const apiKey = "cf9182cf58f52e0c0d3f0409fb37c8d8";
        //url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
        const response = await fetch(url);
        const data = await response.json();
        const images = data.results;
        if (j < images.length) {
            const bigDivv = document.createElement("div");
            
            bigDivv.setAttribute("class", "row");

            for (let i = j; i < (j + 3); i++) {

                const img = document.createElement("img");
                const h1 = document.createElement("h4");
                const h4 = document.createElement("h5");
                const divv = document.createElement("div");
                // const bigDivv = document.createElement("gifsDiv");

                divv.setAttribute("class", "col");
                // bigDivv.setAttribute("class", "col");

                h4.innerHTML = images[i].vote_count;
                h1.innerHTML = images[i].title;
                img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
                img.style.width = "200px";
                divv.appendChild(h1);
                divv.appendChild(img);
                divv.appendChild(h4);
                bigDivv.appendChild(divv);
                document.body.appendChild(bigDivv);

            }
        }

        j += 3;





    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }


    // Perform your desired action here
    console.log("Button clicked!");
});







