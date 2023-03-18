import createHiveWS from '@norniras/hive-agent/ws'
import { token } from './config.js'
import { useState } from 'react'

// Create a client connection.
function useConnection(service, objectId='1', domain='group7.cioty.com') {
    const example = createHiveWS({
        type: 'channel',
        token,
        rootDomain: `${domain}.cioty.com`,
        ghostAddress: `${service}/${objectId}`,
    })
    const [state, setState] = useState(null)  
    example.open(data => setState(JSON.parse(data)))
    
    return state
}

export default useConnection
