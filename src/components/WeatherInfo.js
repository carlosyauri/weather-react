export default function WeaterInfo(props){

    // console.log(props)
    // if(props.city === ""){
    //     return(
    //         <div>
                
    //         </div>
    //     )
    // }
    var unidad = props.unidad
    if(unidad === "imperial"){
        unidad = "°F"
    }else{
        unidad = "°C"
    }

    return(
        <div>
            {
                props.error && <div className="alert alert-danger"> <p>{props.error}</p> </div>
            }
            {
                props.temperature ? 
                    <div className="card card-body">
                        <p>
                            Location: {props.city}, {props.country}
                        </p>
                        <p>
                            temperature: {props.temperature} {unidad}, {props.description}
                        </p>
                        <p>
                            Humidity: {props.humidity}
                        </p>
                        <p>
                            Wind speed: {props.wind_speed}
                        </p>
                    </div> 
                : <div></div>
            }

        </div>
        
    )
}