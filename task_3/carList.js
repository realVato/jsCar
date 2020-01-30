const url = "https://backend.daviva.lt/API/InformacijaTestui";

// Show 1st item on page load
fetch(url)
.then(res => res.json())
.then(data => {
    output = 
            `   
                <div class="col mb-2">
                    <div>
                        <img src="${data.nuotraukos[0]}" class="img-fluid rounded">
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

// Generate new item
function getCar() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        output = 
                `   
                    <div class="col mb-2">
                        <div>
                            <img src="${data.nuotraukos[0]}" class="img-fluid rounded">
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
const button = document.getElementById("btn");
button.addEventListener("click", getCar);