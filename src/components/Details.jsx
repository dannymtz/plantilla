import icon from '../resources/icon_calendario.png';
import foto from '../resources/Gallery_Photo_1.jpeg';
import './Details.css'

function Details(props) {
    return(
        <div>
            <img src={icon} ></img>
            <h1>Te invitamos a celebrar nuestra boda</h1>
            <h2>{props.config.evento.diaEvento}</h2>
            <img src={foto}></img>
        </div>
    );
}

export default Details;