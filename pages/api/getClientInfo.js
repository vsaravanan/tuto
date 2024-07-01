// import { FingerprintGenerator } from 'fingerprint-generator'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import axios from 'axios'
import crypto from 'crypto'

const generateFingerprint = req => {
  const userAgent = req.headers['user-agent'] || ''
  const acceptLanguage = req.headers['accept-language'] || ''
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  // Create a simple hash as the fingerprint
  const fingerprint = crypto
    .createHash('md5')
    .update(userAgent + acceptLanguage + ipAddress)
    .digest('hex')

  return { ipAddress, fingerprint }
}

export default async (req, res) => {
  try {
    // Fetch IP address

    const ipResponse = await axios.get('https://api.ipify.org?format=json')
    const ipAddress = await ipResponse.data.ip
    const fingerprint = generateFingerprint(req)

    // Generate fingerprint

    // const getDeviceFingerprint = async () => {
    //   const fp = FingerprintJS.load()
    //   const result = fp.get()
    //   const visitorId = result.visitorId
    //   return visitorId
    // }
    // const fingerprint = await getDeviceFingerprint()

    res.status(200).json({
      // ip: ipData.ip,
      ipAddress,
      fingerprint,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch client information' })
  }
}
