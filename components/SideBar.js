import { fetcher } from '@/lib/utils'
import TreeView from 'components/TreeView/TreeView'

import useSWR from 'swr'

function createHierarchy(data) {
  const hierarchy = []
  let delimiter = '/'
  data.forEach(item => addItemToHierarchy(hierarchy, item.split(delimiter)))
  return hierarchy
}

function addItemToHierarchy(nodes, parts, rootid, parentPath) {
  const name = parts.shift()

  if (!name) return

  const fullPath = parentPath ? `${parentPath}/${name}` : name
  const root = rootid ?? name

  let node = nodes.find(node => node.name === name)

  if (!node) {
    node = { name, root, fullPath, children: [] }
    nodes.push(node)
  }

  if (parts.length > 0) {
    addItemToHierarchy(node.children, parts, root, fullPath)
  }
}

export const Sidebar = () => {
  const url = process.env.NEXT_PUBLIC_statichtmls
  const { data: menus, isLoading, isError, error } = useSWR(url, fetcher)

  if (menus) {
    const statichtmls = menus.statichtmls
    const formattedData = createHierarchy(statichtmls)
    // console.log(JSON.stringify(formattedData, null, 4))

    return (
      <>
        <TreeView input={formattedData} />
      </>
    )
  }
}

{
  /* <div className='flex flex-col'>
          <div className='flex items-center justify-between relative'>
            <div className='flex items-center pl-10 gap-4'></div>
            <div className='flex flex-col items-start mt-8'>{links}</div>
          </div>
        </div> */
}
