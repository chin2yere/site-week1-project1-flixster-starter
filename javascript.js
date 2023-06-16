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
//create a variable that kepps track of the position to load more
var j = 0;
//when the page loads this function will load
document.addEventListener("DOMContentLoaded", async (event) => {

    const response = await fetch(url);
    const data = await response.json();
    images = data.results;



    for (let i = 0; i < 4; i++) {
        const img = document.createElement("img");
        const h1 = document.createElement("h5");
        const h4 = document.createElement("h6");
        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "col");

        h4.innerHTML = images[i].vote_average;
        h1.innerHTML = images[i].title;
        img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
        img.alt = `This is a poster for ${images[i].original_title}`;
        img.style.width = "220px";
        innerDiv.appendChild(img);
        innerDiv.appendChild(h4);
        innerDiv.appendChild(h1);
        
        gifsDiv.appendChild(innerDiv);
        j += 1;

    }
});
//when you click on the load more button, this function will be called
ldBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)


    try {
        //if we are trying to load within the length of the array, make the loading possible
        if (j < images.length) {
            const outerDiv = document.createElement("div");
            
            outerDiv.setAttribute("class", "row");

            for (let i = j; i < (j + 4); i++) {
                //for arrays that have an odd number length, implement this if statement to prevent it from force creating 4 arrays
                if (i<images.length) {

                    const img = document.createElement("img");
                    const h1 = document.createElement("h5");
                    const h4 = document.createElement("h6");
                    const innerDiv = document.createElement("div");
                    // const bigDivv = document.createElement("gifsDiv");

                    innerDiv.setAttribute("class", "col");
                    // bigDivv.setAttribute("class", "col");

                    h4.innerHTML = images[i].vote_average;
                    h1.innerHTML = images[i].title;
                    img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
                    img.alt = `This is a poster for ${images[i].original_title}`;
                    img.style.width = "220px";
                    innerDiv.appendChild(img);
                    innerDiv.appendChild(h4);
                    innerDiv.appendChild(h1);
                    
                    outerDiv.appendChild(innerDiv);
                    middlePart.appendChild(outerDiv);

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
//when search button is clicked, this function will load
searchBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)


    try {
        
        inputValue= searchInput.value;
        url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(inputValue)}&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        images = data.results;
        middlePart.innerHTML="";
        
            const outerDiv = document.createElement("div");
            
            outerDiv.setAttribute("class", "row");
            j=0;

            for (let i = j; i < (j + 4); i++) {

                const img = document.createElement("img");
                const h1 = document.createElement("h5");
                const h4 = document.createElement("h6");
                const innerDiv = document.createElement("div");
                

                innerDiv.setAttribute("class", "col");
                

                h4.innerHTML = images[i].vote_average;
                h1.innerHTML = images[i].title;
                img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
                img.alt = `This is a poster for ${images[i].original_title}`;
                img.style.width = "220px";
                innerDiv.appendChild(img);
                innerDiv.appendChild(h4);
                innerDiv.appendChild(h1);
                
                outerDiv.appendChild(innerDiv);
                middlePart.appendChild(outerDiv);

            
        }

        j += 4;





    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }


    // Perform your desired action here
    console.log("Button clicked!");
});

//when the clear button is clicked, this function will be called
clearBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission (optional)


    try {
        
        searchInput.value="";
        url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
        const response = await fetch(url);
        const data = await response.json();
        images = data.results;
        middlePart.innerHTML="";
        
            const outerDiv = document.createElement("div");
            
            outerDiv.setAttribute("class", "row");
            j=0;

            for (let i = j; i < (j + 4); i++) {

                const img = document.createElement("img");
                const h1 = document.createElement("h5");
                const h4 = document.createElement("h6");
                const innerDiv = document.createElement("div");
                

                innerDiv.setAttribute("class", "col");
                

                h4.innerHTML = images[i].vote_average;
                h1.innerHTML = images[i].title;
                img.src = `https://www.themoviedb.org/t/p/w1280/${images[i].poster_path}`;
                img.alt = `This is a poster for ${images[i].original_title}`;
                img.style.width = "220px";
                innerDiv.appendChild(img);
                innerDiv.appendChild(h4);
                innerDiv.appendChild(h1);
                
                outerDiv.appendChild(innerDiv);
                middlePart.appendChild(outerDiv);

            
        }

        j += 4;





    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }


    // Perform your desired action here
    console.log("Button clicked!");
});










