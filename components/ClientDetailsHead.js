import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { Tooltip } from 'react-tooltip'

const ClientDetailsHead = () => {
  const [ipAddress, setIpAddress] = useState('')
  const [deviceFingerprint, setDeviceFingerprint] = useState('')

  useEffect(() => {
    const fetchIpAddress = async req => {
      try {
        let ipAddress = null

        // Try multiple IP services in case one is blocked
        const ipServices = [
          'https://checkip.amazonaws.com',
          'https://ipinfo.io/ip',
          'https://icanhazip.com',
          'https://ifconfig.me/ip',
          'https://api.my-ip.io/ip',
          'https://wtfismyip.com/text',
          'https://api.ipify.org?format=json',
          'https://api64.ipify.org?format=json', // IPv6 version
        ]

        for (const service of ipServices) {
          try {
            const response = await axios.get(service, { timeout: 3000 })
            // Handle different response formats
            if (typeof response.data === 'string') {
              ipAddress = response.data.trim()
            } else if (response.data.ip) {
              ipAddress = response.data.ip
            }
            if (ipAddress) break
          } catch (err) {
            console.log(`Service ${service} failed:`, err.message)
            continue
          }
        }

        if (!ipAddress) {
          throw new Error('All IP services failed')
        }

        setIpAddress(ipAddress)
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
