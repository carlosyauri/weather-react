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
                <button className="btn btn-success btn-block">Obtener clima</button>
            </form>
        </div>
    )
}