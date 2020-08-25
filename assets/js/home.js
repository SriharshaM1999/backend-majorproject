console.log("I am in home.js");

let city;
let solution;
// accessing the buttons
const weatherButton = $("#weatherButton");
const currencyButton = $("#currencyButton");

// accessing the cards

const weatherCard = $("#weatherCard");
const currencyCard = $("#currencyCard");
const weatherInput = $("#weatherInput");
const weatherSubmit = $("#weatherSubmit");

//accessing the output fields

const first=$("#list-home");
const second=$("#list-profile");
const third=$("#list-messages");
const fourth=$("#list-settings");
const output=$("#output");

console.log("outputs",first,second,third,fourth);

console.log(weatherCard,currencyCard);

console.log("weather Input",weatherSubmit);


console.log(weatherButton,currencyButton)

$("document").ready(function() {

      weatherInput.hide();
      output.hide();
      
         function weather(city){
           console.log("I am called");
             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f77ae8009b4c742ac6bbbdc32981df1
             `)
             .then(response =>response.json())
             .catch(err=>{alert("No data found");})
             .then(data =>{
               let temparature=data.main.temp-273.15;
              first.text(data.name);
              second.text((temparature.toFixed(2))+" °C");
             third.text(data.weather[0].description);
             fourth.text(data.main.humidity+" %");
            console.log(data);
            output.show();
             })
             .catch((err)=>alert("Check your city name and try again"));
                
        
            }

         

        weatherButton.click(function(e){
          e.preventDefault();
          console.log("weather button clicked");
          currencyCard.hide("2000");
          weatherInput.show("2000");


        })



        currencyButton.click(function(e){
          e.preventDefault();
          console.log("currency button clicked");
          weatherCard.hide("2000");
      
        });

        weatherSubmit.click(function(e){
          e.preventDefault();
         city= $("#city")
         console.log(city.val())
          weather(city.val());
          console.log("solution is",solution);

       


          
      

        })

                

            
            
            




          });
      


