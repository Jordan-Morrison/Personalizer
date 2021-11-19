import {reward} from '../helpers/api';
import services from '../../data/services.json';
import styles from '../../styles/Card.module.css';

export default function Card(props) {

    const found = services.find(element => element.url.en === props.url);

    async function redirect() {
        if (props.eventId){
            await reward(props.eventId, (error) => console.log(error));
        }
        window.location.href = props.url;
    }

    return (
        <div className={styles.container} onClick={redirect}>
            <img src={`/images/${found.image}`}/>
            <h4>{found.title[props.t.locale]}</h4>
        </div>
    )
}