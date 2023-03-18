import style from "./DataModule.module.scss"
import useConnection from "../hiveConfig/useConection"

function DataModule({service, objectId, domain}) {
    const data = useConnection(service, objectId ?? '1')
    
    return (
        <div>data</div>
    )
}

export default DataModule
