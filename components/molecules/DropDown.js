import styles from '../../styles/DropDown.module.css';

export default function DropDown(props) {

    return (
        <div className={styles.container}>
            <label htmlFor={props.id}>{props.label}</label>
            <select name={props.id} id={props.id} defaultValue={props.state.get}>
                {props.items.map((item) =>
                    <option key={item.short} value={item.short}>{item.name[props.t.locale]}</option>
                )}
            </select>
        </div>
    )
}