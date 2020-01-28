fetch("https://backend.daviva.lt/API/InformacijaTestui")
.then(res => {
    return res.json()
})
.then(data => {
    output = 
            `   <td>${data.marke}</td>
                <td>${data.modelis}</td>
                <td>${data.metai}</td>
                <td>${data.kaina}€</td>
            `

    document.querySelector(".carList").innerHTML = output
})