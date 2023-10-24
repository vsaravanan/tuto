import { fetcher } from '@/lib/utils'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'

export const Sidebar = () => {
  const url = process.env.NEXT_PUBLIC_statichtmls
  const { data: menus, isLoading, isError, error } = useSWR(url, fetcher)
  const router = useRouter()

  if (menus) {
    const statichtmls = menus.statichtmls
    let delimiter = process.env.NEXT_PUBLIC_os === 'windows' ? '\\' : '/'
    const links = statichtmls.map((v, i) => {
      let splitted = v.split(delimiter)
      let repeats = splitted.length - 1
      let spaces = '.'.repeat(repeats)
      let showmenu = spaces + splitted[splitted.length - 1]
      let listurl = process.env.NEXT_PUBLIC_listskills
      return (
        <Link key={`link${i}`} href={`${listurl}/${v}.htm`}>
          {showmenu}
        </Link>
      )
    })
    return <> {links}</>
  }
}
