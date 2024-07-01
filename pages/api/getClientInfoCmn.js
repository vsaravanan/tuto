import axios from 'axios'
export const getClientInfoCmn = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/getClientInfo')
    const data = res.data

    return {
      ipAddress: data.ipAddress || null,
      fingerprint: data.fingerprint.fingerprint || null,
    }
  } catch (error) {
    console.error('Error fetching client info:', error)
    return {
      props: {
        ipAddress: 'not found',
        fingerprint: 'not found',
      },
    }
  }
}
