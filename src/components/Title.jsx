import foto from '../resources/Gallery_Photo_1.jpeg';

function Title(props) {
    return(
        <div>
            <h1 className="tipo_evento">{props.config.evento.tipoEvento}</h1>
            <h1 className="nombres">
                {props.config.novia.nombre} &amp; {props.config.novio.nombre}
            </h1>
            <img src={foto} ></img>
        </div>
    );
}

export default Title;