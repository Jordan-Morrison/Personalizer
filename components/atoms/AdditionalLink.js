import services from '../../data/services.json';
import styles from '../../styles/AdditionalLink.module.css';

export default function AdditionalLink(props) {

    const found = services.find(element => element.url.en === props.url);

    return (
        <a className={styles.link} href={found.url[props.t.locale]}>{found.title[props.t.locale]}</a>
    )
}