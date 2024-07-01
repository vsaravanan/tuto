import React from 'react'
import { Tooltip } from 'react-tooltip'

const ClientDetails = ({ ipAddress, fingerprint }) => {
  return (
    <div>
      <h2>
        <span data-tooltip-id='ipAddress' data-tooltip-content={ipAddress}>
          ip address
        </span>
        <Tooltip id='ipAddress' />

        <br />

        <span data-tooltip-id='deviceFingerprint' data-tooltip-content={fingerprint}>
          fingerprint
        </span>
        <Tooltip id='deviceFingerprint' />
      </h2>
    </div>
  )
}

export default ClientDetails
