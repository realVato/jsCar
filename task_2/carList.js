const url = "https://backend.daviva.lt/API/InformacijaTestui";

// Show 1st item on page load
fetch(url)
.then(res => res.json())
.then(data => {
    output = 
            `   
                <tr>
                    <td>${data.marke}</td>
                    <td>${data.modelis}</td>
                    <td>${data.metai}</td>
                    <td>${data.kaina}€</td>
                </tr>
            `;
    document.querySelector("tbody").innerHTML = output;
});

// Generate new item
function getCar() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        output = 
                `   
                    <tr>
                        <td>${data.marke}</td>
                        <td>${data.modelis}</td>
                        <td>${data.metai}</td>
                        <td>${data.kaina}€</td>
                    </tr>
                `;
        document.querySelector("tbody").innerHTML += output;
    })
};

// Get btn
const button = document.getElementById("btn");
button.addEventListener("click", getCar);