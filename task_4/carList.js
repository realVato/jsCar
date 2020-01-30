const url = "https://backend.daviva.lt/API/InformacijaTestui";

// Show 1st item on page load
fetch(url)
.then(res => res.json())
.then(data => {

    output = 
            `   
                <div class="col mb-2">
                    <div>
                        <div id="carouselCtrl" class="carousel slide" data-ride="carousel" data-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${data.nuotraukos[0]}" class="img-fluid rounded">
                                </div>
                                <div class="carousel-item">
                                    <img src="${data.nuotraukos[1]}" class="img-fluid rounded">
                                </div>
                                <div class="carousel-item">
                                    <img src="${data.nuotraukos[2]}" class="img-fluid rounded">
                                </div>
                                <div class="carousel-item">
                                    <img src="${data.nuotraukos[3]}" class="img-fluid rounded">
                                </div>
                                <div class="carousel-item">
                                    <img src="${data.nuotraukos[4]}" class="img-fluid rounded">
                                </div>
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

// Create a unique ID
function uniqueID() {
    return Math.random().toString(36).substr(2, 9);
};

// Generate a new item
function getCar() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // Unique ID for each different carousel on a single page
        id = uniqueID();
        
        output = 
                `   
                    <div class="col mb-2">
                        <div>
                            <div id="carouselCtrl${id}" class="carousel slide" data-ride="carousel" data-interval="false">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="${data.nuotraukos[0]}" class="img-fluid rounded">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${data.nuotraukos[1]}" class="img-fluid rounded">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${data.nuotraukos[2]}" class="img-fluid rounded">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${data.nuotraukos[3]}" class="img-fluid rounded">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${data.nuotraukos[4]}" class="img-fluid rounded">
                                    </div>
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
    })
};

// Get btn
const btn = document.getElementById("btn");
btn.addEventListener("click", getCar);