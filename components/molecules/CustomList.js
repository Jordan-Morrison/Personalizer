import IcomoonReact from "icomoon-react";
import icons from "../icons/selection.json";
import styles from '../../styles/CustomList.module.css';

export default function CustomList(props) {

    return (
        <div className={styles.container}>
            <div className={styles.infoBar}>
                <IcomoonReact iconSet={icons} size={22} icon="info" />
            </div>
            <ul>{props.children}</ul>
        </div>
    )
}