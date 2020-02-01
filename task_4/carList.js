const url = "https://backend.daviva.lt/API/InformacijaTestui";

// Show 1st item on page load
(function() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // An array that consists of .carousel-item divs to the amount of images in api
        const carouselItem = [];

        // Function that adds .carousel-item divs to the amount of images in api
        function imgID(data) { // Parameter depending on 2nd then() in each fetch()
            for(i = 0; i < data.nuotraukos.length; i++) {
                if(i === 0) { // Adds .active to a 1st element in an array
                    carouselItem.push(
                        `
                            <div class="carousel-item active">
                                <img src="${data.nuotraukos[i]}" class="img-fluid rounded">
                            </div>
                        `
                    );
                } else { // Elements without .active
                    carouselItem.push(
                        `
                            <div class="carousel-item">
                                <img src="${data.nuotraukos[i]}" class="img-fluid rounded">
                            </div>
                        `
                    );
                }
            }
        }

    // init
    imgID(data);

    output = 
            `   
                <div class="col mb-2">
                    <div>
                        <div id="carouselCtrl" class="carousel slide" data-ride="carousel" data-interval="false">
                            <div class="carousel-inner">
                                ${carouselItem}
                            </div>
                            <a class="carousel-control-prev" href="#carouselCtrl" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselCtrl" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div class="bg-white p-3">
                        <h6>Markė: ${data.marke}</h6>
                        <p>Modelis: ${data.modelis}</p>
                        <p>Metai: ${data.metai}</p>
                        <div class="bg-light text-success text-center rounded mt-2">
                            <p>${data.kaina}€</p>
                        </div>
                    </div>
                </div>
            `;
            
    document.querySelector(".row").innerHTML = output;
});
})();

// Create a unique ID
function uniqueID() {
    return Math.random().toString(36).substr(2, 9);
};

// Generate a new item
function getCar() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // An array that consists of .carousel-item divs to the amount of images in api
        const carouselItem1 = [];

        // Function that adds .carousel-item divs to the amount of images in api
        function imgID1(data) { // Parameter depending on 2nd then() in each fetch()
            for(i = 0; i < data.nuotraukos.length; i++) {
                if(i === 0) { // Adds .active to a 1st element in an array
                    carouselItem1.push(
                        `
                            <div class="carousel-item active">
                                <img src="${data.nuotraukos[i]}" class="img-fluid rounded">
                            </div>
                        `
                    );
                } else { // Elements without .active
                    carouselItem1.push(
                        `
                            <div class="carousel-item">
                                <img src="${data.nuotraukos[i]}" class="img-fluid rounded">
                            </div>
                        `
                    );
                }
            }
        }

        // init
        imgID1(data);

        // Unique ID for each different carousel on a single page
        id = uniqueID();

        output = 
                `   
                    <div class="col mb-2">
                        <div>
                            <div id="carouselCtrl${id}" class="carousel slide" data-ride="carousel" data-interval="false">
                                <div class="carousel-inner">
                                    ${carouselItem1}
                                </div>
                                <a class="carousel-control-prev" href="#carouselCtrl${id}" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselCtrl${id}" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div class="bg-white p-3">
                            <h6>Markė: ${data.marke}</h6>
                            <p>Modelis: ${data.modelis}</p>
                            <p>Metai: ${data.metai}</p>
                            <div class="bg-light text-success text-center rounded mt-2">
                                <p>${data.kaina}€</p>
                            </div>
                        </div>
                    </div>
                `;

        document.querySelector(".row").innerHTML += output;
    });
};

// Get btn
const btn = document.getElementById("btn");
btn.addEventListener("click", getCar);