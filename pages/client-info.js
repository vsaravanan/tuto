import ClientDetails from '@/components/ClientDetails'
import { getClientInfoCmn } from './api/getClientInfoCmn'

export const getServerSideProps = async () => {
  const clientInfo = await getClientInfoCmn()

  return {
    props: {
      ipAddress: clientInfo.ipAddress,
      fingerprint: clientInfo.fingerprint,
    },
  }
}

const ClientInfoPage = ({ ipAddress, fingerprint }) => {
  return (
    <div>
      <ClientDetails ipAddress={ipAddress} fingerprint={fingerprint} />
    </div>
  )
}

export default ClientInfoPage
