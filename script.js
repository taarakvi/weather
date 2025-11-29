let input = document.querySelector("input")
let button = document.querySelector(".searchB")

    let outputL1 = document.getElementById('outputL1')
    let outputL2 = document.getElementById("outputL2")
    let outputL3 = document.getElementById("outputL3")
    let outputL4 = document.getElementById("outputL4")
    let outputL5 = document.getElementById("outputL5")
    let outputL6 = document.getElementById("outputL6")
    let outputL7 = document.getElementById("outputL7")
    let outputL8 = document.getElementById("outputL8")
    let outputL9 = document.getElementById("outputL9")
    let outputL10 = document.getElementById("outputL10")
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

async function some(){
    let value = input.value;
    let result =await getData(value);
    console.log(result)
    outputL1.innerText = `${result.location.name}`;
    outputL2.innerText = `${result.location.country},`;
    outputL3.innerText = `${result.location.region},`;
    outputL4.innerText = `${result.location.tz_id},`;
    tempC.innerText = `${result.current.temp_c}°c | ${result.current.temp_f}°f`;
    outputL5.innerText = `${result.current.wind_kph}k/h`;
    outputL6.innerText = `${result.current.humidity}%`
    outputL7.innerText = `${result.current.precip_in}%`
    outputL8.innerText = `${result.current.cloud}`
    outputL9.innerText = `${result.current.dewpoint_c}°c | ${result.current.dewpoint_f}°f`
    outputL10.innerText = `${result.current.pressure_in}`

    // console.log(result.location.country)
    // console.log(result.location.name)
    // console.log(result.location.region) 
    // console.log(result.location.localtime)
    // console.log("temp-c : ",result.current.temp_c)
    // console.log("temp-f : ",result.current.temp_f)
    // console.log("wind : ",result.current.wind_kph)
    // console.log("humidity : ",result.current.humidity)
    // console.log("precipitation : ",result.current.precip_in)
    let date = new Date()
    console.log(date)
    let x = date.getHours()
    console.log(x)
    let mImg = document.getElementById("m-img")
    let nImg = document.getElementById("n-img")
    for(let i = x; i<=x; i++){
    if(x>=18){
        console.log("night")
        mImg.style.display = "none"
        nImg.style.display = "block"
    }else{
        console.log("morning")
        mImg.style.display = "block"
        nImg.style.display = "none"
    }
    }
    
} 
// for enternal key
button.addEventListener("click",async()=>{
   some();
})
// for external keywords
input.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        some();
    }
})

// for clear text
let cutB = document.querySelector(".cutB")
cutB.addEventListener("click",()=>{
    input.value = "";
})



// https://api.weatherapi.com/v1/current.json?key=fb87584aa1a148b399281903252611&q=London&aqi=yes

// second
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6d6fa3a72669e36590b87f9ced5c05bb

