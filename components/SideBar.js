import { fetcher } from '@/lib/utils'
import TreeView from 'components/TreeView/TreeView'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

import useSWR from 'swr'

function createHierarchy(data) {
  const root = { name: 'root', children: [] }
  let delimiter = '/'
  data.forEach(item => addItemToHierarchy(root, item.split(delimiter)))
  return [root]
}

function addItemToHierarchy(node, parts, parentPath) {
  const name = parts.shift()

  if (!name) return

  node.children = node.children || []

  const parent = parentPath ? `${parentPath}/${name}` : name

  let childNode = node.children.find(node => node.name === name)

  if (!childNode) {
    childNode = { name, parent }
    node.children.push(childNode)
  }

  if (parts.length > 0) {
    addItemToHierarchy(childNode, parts, parent)
  }
}

export const Sidebar = () => {
  const url = process.env.NEXT_PUBLIC_statichtmls
  const { data: menus, isLoading, isError, error } = useSWR(url, fetcher)
  const router = useRouter()
  const dispatch = useDispatch()

  if (menus) {
    const statichtmls = menus.statichtmls
    const formattedData = createHierarchy(statichtmls)

    return (
      <>
        <TreeView input={formattedData} />
      </>
    )
  }
}

// const links = statichtmls.map((v, i) => {
//   let splitted = v.split(delimiter)
//   let repeats = splitted.length - 1
//   let spaces = '.'.repeat(repeats)
//   let showmenu = spaces + splitted[repeats]
//   let href = v
//   return (
//     <span
//       key={`link${i}`}
//       className={`flex py-1 px-1 items-center w-full h-full`}
//       onClick={() => {
//         dispatch(setContent(href))
//       }}
//     >
//       {showmenu}
//     </span>
//   )
// })

{
  /* <div className='flex flex-col'>
          <div className='flex items-center justify-between relative'>
            <div className='flex items-center pl-10 gap-4'></div>
            <div className='flex flex-col items-start mt-8'>{links}</div>
          </div>
        </div> */
}

// const originalData = {
//   'statichtmls': ['designpattern/AdapterPattern/part1', 'designpattern/AdapterPattern/part2'],
// }

// console.log(JSON.stringify(formattedData, null, 4))
