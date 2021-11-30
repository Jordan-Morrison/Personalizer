import styles from '../../styles/RadioButtons.module.css';

export default function RadioButtons(props) {

    function updateState(ev) {
        props.state.set(ev.target.value);
    }

    return (
        <div className={styles.container}>
            <p>{props.label}</p>
            {props.items.map((item) =>
                <div key={item.short}>
                    <input type="radio" id={item.short} defaultChecked={props.state.get == item.short} value={item.short} name={props.id} onChange={updateState}/>
                    <label className={styles.label} htmlFor={item.short}>{item.name[props.t.locale]}</label>
                </div>
            )}
        </div>
    )
}