import { fetcher } from '@/lib/utils'
import { setContent } from '@/redux/utilSlice'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import useSWR from 'swr'

export const Sidebar = () => {
  const url = process.env.NEXT_PUBLIC_statichtmls
  const { data: menus, isLoading, isError, error } = useSWR(url, fetcher)
  const router = useRouter()
  const dispatch = useDispatch()

  if (menus) {
    const statichtmls = menus.statichtmls

    let delimiter = process.env.NEXT_PUBLIC_os === 'windows' ? '\\' : '/'
    const links = statichtmls.map((v, i) => {
      let splitted = v.split(delimiter)
      let repeats = splitted.length - 1
      let spaces = '.'.repeat(repeats)
      let showmenu = spaces + splitted[splitted.length - 1]
      let listurl = process.env.NEXT_PUBLIC_listskills
      // let href = `${listurl}${v}.htm`
      let href = v
      return (
        <span
          key={`link${i}`}
          className={`flex py-1 px-1 items-center w-full h-full`}
          onClick={() => {
            dispatch(setContent(href))
          }}
        >
          {showmenu}
        </span>
      )
    })
    return (
      <>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between relative'>
            <div className='flex items-center pl-10 gap-4'></div>
            <div className='flex flex-col items-start mt-8'>{links}</div>
          </div>
        </div>
      </>
    )
  }
}
