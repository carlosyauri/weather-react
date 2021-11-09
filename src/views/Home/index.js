import { Component } from "react";
import WeatherForm from "../../components/WeatherForm";
import WeaterInfo from "../../components/WeatherInfo";

export default class Home extends Component{

    getWeather = (e) =>{
        const {city, country} = e.target.elements;

        console.log(city.value, country.value)
        e.preventDefault();
    }
    render(){ 
        return(
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto ">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeaterInfo/>
                    </div>
                </div>
            </div>
        )
    }
}