import { setContent } from '@/redux/utilSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const listurl = process.env.NEXT_PUBLIC_listskills

const TreeNode = ({ id, node }) => {
  const dispatch = useDispatch()

  node.key = id

  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const getLink = () => {
    let icon
    if (node.children?.length > 0) {
      icon = isExpanded ? '📖' : '📂'
    }

    let url
    if (icon) {
      url = icon + node.name
    } else {
      url = (
        <span
          onClick={() => {
            dispatch(setContent(node.parent))
          }}
        >
          {node.name}
        </span>
      )
    }
    return url
  }

  return (
    <>
      <div className='tree-node'>
        <div onClick={handleToggle} className={`node-toggle ${isExpanded ? 'expanded' : ''}`}>
          {getLink()}
        </div>
        {isExpanded && (
          <ul className='child-nodes'>
            {node.children?.map((childNode, index) => {
              let nextkey = id + '.' + index
              return (
                <li key={`li.${nextkey}`}>
                  <TreeNode key={nextkey} id={nextkey} node={childNode} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </>
  )
}

const TreeView = data => {
  return (
    <div>
      {data.input.map(rootNode => (
        <TreeNode key={'1'} node={rootNode} />
      ))}
    </div>
  )
}

export default TreeView
