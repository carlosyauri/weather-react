export default function WeatherForm(props){
    return(
        <div className="card card-body">
            <form onSubmit={props.getWeather}> 
                <div className="form-group">
                    <input  type="text" name="city" placeholder="ingrese su ciudad" className="form-control" autoFocus/>
                </div>
                <div className="form-group">
                    <input  type="text" name="country" placeholder="ingrese su pais" className="form-control"/>
                </div>
                <div className="form-group">
                    <label> Unidad de temperatura
                        <select name="unidad">
                            <option value="" disabled selected>Selecc. unidad</option>
                            <option value="imperial">Fahrenheit</option>
                            <option value="metric">Celcius</option>
                        </select>
                    </label>
                </div> 
                
                <button className="btn btn-success btn-block">Obtener clima</button>

            </form>
        </div>
    )
}