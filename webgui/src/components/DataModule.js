import styles from "./DataModule.module.scss"
import useConnection from "../hiveConfig/useConection"

function DataModule({service, objectId, name}) {
    const data = useConnection(service, objectId ?? '1')
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.data}>{data}</div>
        </div>
    )
}

export default DataModule
