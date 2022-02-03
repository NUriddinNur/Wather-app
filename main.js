let city = document.querySelector("#city")
let temp = document.querySelector("#temp")
let desc = document.querySelector("#desc")
let imgDiv = document.querySelector("#imgDiv")

city.onkeyup = (event) => {
    if (event.keyCode == 13) {
        getWeather(city.value)
        city.value = null
    }
}

async function getWeather(city) {
    console.log(typeof +city);
    
    if (!(/[A-z]/g.test(city))) {
        alert("invalid input")
        return 
    }
    try {
        let respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=925e9d28cd71fa443847c5faed621a8f`) 
        let wather = await respons.json()
        let C = Math.ceil((+wather["main"]["temp"] - 273.15))
        console.log(wather);
    
        temp.textContent = `${C}c`
        desc.textContent = wather["weather"][0]['description']
        document.querySelector(".place").textContent = wather["name"]
        imgDiv.innerHTML = `<img src="./icons/${wather["weather"][0]['icon']}.png" alt="">`
    }catch (error) {
        alert("Bunaqa shahar topilmadi brat !!!")
    }
}

let n = Number("0")

if (n) {
    console.log("NAN");
}

console.log(n);

