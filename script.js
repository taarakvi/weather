let input = document.querySelector("input")
let button = document.querySelector(".searchB")

    let outputL1 = document.getElementById('outputL1')
    let outputL2 = document.getElementById("outputL2")
    let outputL3 = document.getElementById("outputL3")
    let outputL4 = document.getElementById("outputL4")

    let tempC = document.getElementById("temp-c")

async function getData(cityName){
    try{
       const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=fb87584aa1a148b399281903252611&q=${cityName}&aqi=yes`
        // `http://api.openweathermap.org/data/2.5/weather?q=${cityName},uk&APPID=6d6fa3a72669e36590b87f9ced5c05bb`
    );
    return await promise.json()

    } catch(error){
        return error
    }    
}

button.addEventListener("click",async()=>{
    let value = input.value;
    let result =await getData(value);
    console.log(result)
    outputL1.innerText = `${result.location.name}`;
    outputL2.innerText = `${result.location.country},`;
    outputL3.innerText = `${result.location.region},`;
    outputL4.innerText = `${result.location.tz_id},`;
    tempC.innerText = `${result.current.temp_c}°c`;
    console.log(result.location.country)
    console.log(result.location.name)
    console.log(result.location.region) 
    console.log(result.location.localtime)
    console.log(result.current.temp_c)
})
let cutB = document.querySelector(".cutB")
cutB.addEventListener("click",()=>{
    input.value = "";
})



// https://api.weatherapi.com/v1/current.json?key=fb87584aa1a148b399281903252611&q=London&aqi=yes

// second
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6d6fa3a72669e36590b87f9ced5c05bb

