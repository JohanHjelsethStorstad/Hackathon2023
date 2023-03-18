import createHiveWS from '@norniras/hive-agent/ws'
import { token } from './config.js'
import { useState } from 'react'

// Create a client connection.
function useConnection(service, objectId='1', subdomain='group7') {
    const chn = createHiveWS({
        type: 'channel',
        token,
        rootDomain: `cioty.com`,
        ghostAddress: `group7/${service}/${objectId}`,
    })
    console.log(chn)
    const [state, setState] = useState(null)  
    chn.open(data => {
        setState(JSON.parse(data).RTW.TEMPC)
    })
    
    return state
}

export default useConnection
