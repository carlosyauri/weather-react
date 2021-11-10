import { Component } from "react";
import WeatherForm from "../../components/WeatherForm";
import WeaterInfo from "../../components/WeatherInfo";
import apiCall from "../../api";

export default class Home extends Component{

    state = {
        temperature: "",
        description: "",
        humidity: "",
        wind_speed: "",
        city: "",
        country: "",
        error: null,
        unidad: "",
    }

    getWeather = async (e) =>{
        e.preventDefault();
       
        const {city, country, unidad} = e.target.elements;
        const cityValue = city.value;
        const countryValue= country.value;
        const unidadValue = unidad.value;
        


        if(cityValue && countryValue){
            // Para farenhein: &units=imperial
            // Para celcius: $units=metric

            if(unidadValue){
                const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=42f45ca3c7f05710fdec0ad6edb2e380&units=${unidadValue}`
    
                const response = await apiCall({url: api_url})
    
                if(response.cod === "404"){
                    this.setState({error: response.message})
                }else{
                    this.setState({
                        temperature: response.main.temp,
                        description: response.weather[0].description,
                        humidity: response.main.humidity,
                        wind_speed: response.wind.speed,
                        city: response.name,
                        country: response.sys.country,
                        error: null,
                        unidad: unidadValue
                    })
                }
            }else{
                this.setState({error: "Por favor seleccione una unidad de temperatura"})
            }
            

            

        }else{
            this.setState({error: "Porfavor ingrese una ciudad y un pais"})
        }

        
         
    }
    render(){ 
        return(
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto ">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeaterInfo {...this.state}/>
                    </div>
                </div>
            </div>

        )
    }
}