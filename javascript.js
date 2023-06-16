var gifsDiv = document.getElementById("gifsDiv");
var ldBtn = document.getElementById("ldBtn");
var middlePart = document.getElementById("middlePart");
var searchBtn = document.getElementById("searchBtn");
var searchInput = document.getElementById("searchInput");
var clearBtn = document.getElementById("clearBtn");
var images;
var inputValue;

const apiKey = "cf9182cf58f52e0c0d3f0409fb37c8d8";
url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`;
var j = 0;
document.addEventListener("DOMContentLoaded", async (event) => {

    const response = await fetch(url);
    const data = await response.json();
    images = data.results;



    for (let i = 0; i < 4; i++) {
        const img = document.createElement("img");
        const h1 = document.createElement("h5");
        const h4 = document.createElement("h6");
        const divv = document.createElement("div");
        divv.setAttribute("class", "col");

        h4.innerHTML = images[i].vote_average;
        h1.innerHTML = images[i].title;
        img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
        img.alt = `This is a poster for ${images[i].original_title}`;
        img.style.width = "220px";
        divv.appendChild(img);
        divv.appendChild(h4);
        divv.appendChild(h1);
        
        gifsDiv.appendChild(divv);
        j += 1;

    }
});

ldBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)


    try {
        //const apiKey = "cf9182cf58f52e0c0d3f0409fb37c8d8";
        //url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
        // const response = await fetch(url);
        // const data = await response.json();
        // const images = data.results;
        if (j < images.length) {
            const bigDivv = document.createElement("div");
            
            bigDivv.setAttribute("class", "row");

            for (let i = j; i < (j + 4); i++) {
                if (i<images.length) {

                    const img = document.createElement("img");
                    const h1 = document.createElement("h5");
                    const h4 = document.createElement("h6");
                    const divv = document.createElement("div");
                    // const bigDivv = document.createElement("gifsDiv");

                    divv.setAttribute("class", "col");
                    // bigDivv.setAttribute("class", "col");

                    h4.innerHTML = images[i].vote_average;
                    h1.innerHTML = images[i].title;
                    img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
                    img.alt = `This is a poster for ${images[i].original_title}`;
                    img.style.width = "220px";
                    divv.appendChild(img);
                    divv.appendChild(h4);
                    divv.appendChild(h1);
                    
                    bigDivv.appendChild(divv);
                    middlePart.appendChild(bigDivv);

                }
            }

        }

        j += 4;





    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }


    // Perform your desired action here
    console.log("Button clicked!");
});
//search button
searchBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)


    try {
        //const apiKey = "cf9182cf58f52e0c0d3f0409fb37c8d8";
        inputValue= searchInput.value;
        url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(inputValue)}&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        images = data.results;
        middlePart.innerHTML="";
        
            const bigDivv = document.createElement("div");
            
            bigDivv.setAttribute("class", "row");
            j=0;

            for (let i = j; i < (j + 4); i++) {

                const img = document.createElement("img");
                const h1 = document.createElement("h5");
                const h4 = document.createElement("h6");
                const divv = document.createElement("div");
                // const bigDivv = document.createElement("gifsDiv");

                divv.setAttribute("class", "col");
                // bigDivv.setAttribute("class", "col");

                h4.innerHTML = images[i].vote_average;
                h1.innerHTML = images[i].title;
                img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
                img.alt = `This is a poster for ${images[i].original_title}`;
                img.style.width = "220px";
                divv.appendChild(img);
                divv.appendChild(h4);
                divv.appendChild(h1);
                
                bigDivv.appendChild(divv);
                middlePart.appendChild(bigDivv);

            
        }

        j += 4;





    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }


    // Perform your desired action here
    console.log("Button clicked!");
});

//clear button
clearBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)


    try {
        //const apiKey = "cf9182cf58f52e0c0d3f0409fb37c8d8";
        searchInput.value="";
        url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
        const response = await fetch(url);
        const data = await response.json();
        images = data.results;
        middlePart.innerHTML="";
        
            const bigDivv = document.createElement("div");
            
            bigDivv.setAttribute("class", "row");
            j=0;

            for (let i = j; i < (j + 4); i++) {

                const img = document.createElement("img");
                const h1 = document.createElement("h5");
                const h4 = document.createElement("h6");
                const divv = document.createElement("div");
                // const bigDivv = document.createElement("gifsDiv");

                divv.setAttribute("class", "col");
                // bigDivv.setAttribute("class", "col");

                h4.innerHTML = images[i].vote_average;
                h1.innerHTML = images[i].title;
                img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
                img.alt = `This is a poster for ${images[i].original_title}`;
                img.style.width = "220px";
                divv.appendChild(img);
                divv.appendChild(h4);
                divv.appendChild(h1);
                
                bigDivv.appendChild(divv);
                middlePart.appendChild(bigDivv);

            
        }

        j += 4;





    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }


    // Perform your desired action here
    console.log("Button clicked!");
});










