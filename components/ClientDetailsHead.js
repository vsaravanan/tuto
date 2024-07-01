import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { Tooltip } from 'react-tooltip'

const ClientDetailsHead = () => {
  const [ipAddress, setIpAddress] = useState('')
  const [deviceFingerprint, setDeviceFingerprint] = useState('')

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json')
        setIpAddress(response.data.ip)
      } catch (error) {
        console.error('Error fetching IP address:', error)
      }
    }

    const getDeviceFingerprint = async () => {
      const fp = await FingerprintJS.load()
      const result = await fp.get()
      const visitorId = result.visitorId
      setDeviceFingerprint(visitorId)
    }

    fetchIpAddress()
    getDeviceFingerprint()
  }, [])

  return (
    <div>
      <h2>
        <span data-tooltip-id='ipAddress' data-tooltip-content={ipAddress}>
          ip address
        </span>
        <Tooltip id='ipAddress' />

        <br></br>

        <span data-tooltip-id='deviceFingerprint' data-tooltip-content={deviceFingerprint}>
          fingerprint
        </span>
        <Tooltip id='deviceFingerprint' />
      </h2>
    </div>
  )
}

export default ClientDetailsHead
