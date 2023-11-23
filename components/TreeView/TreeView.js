import useUtilStore from '@/redux/utilSlice'
import { useState } from 'react'

const listurl = process.env.NEXT_PUBLIC_listskills

const TreeNode = ({ id, node }) => {
  node.key = id
  const [isExpanded, setIsExpanded] = useState(false)
  const { menuSelected, selectMenu, setContent } = useUtilStore(state => {
    return {
      menuSelected: state.menuSelected,
      selectMenu: state.selectMenu,
      setContent: state.setContent,
    }
  })

  const expandCollapse = () => {
    if (node.children?.length > 0) {
      setIsExpanded(isExpanded => !isExpanded)
    }
    selectMenu({ nodeitem: node.root, leaf: node.children?.length === 0 })
  }

  const getIconOrBlank = () => {
    let icon
    if (node.children?.length > 0) {
      icon = isExpanded ? '📖' : '📂'
    }
    return icon
  }
  const getLink = () => {
    // getParent or getLeaf

    let icon = getIconOrBlank()

    let leaf
    if (icon) {
      leaf = icon + node.name
    } else {
      leaf = (
        <span
          className={'sidebar'}
          onClick={() => {
            setContent(node.fullPath)
          }}
        >
          {node.name}
        </span>
      )
    }
    return leaf
  }

  let leaflink = getLink()

  let expandok = ''
  if (node.root === menuSelected) {
    expandok = isExpanded ? 'expanded' : ''
  } else {
    if (isExpanded) {
      setIsExpanded(isExpanded => false)
    }
  }

  // console.log(
  //   node.root + '.' + node.name + ', ' + menuSelected + ', ' + node.children.length,
  //   ', ' + isExpanded + ', ' + expandok,
  // )

  return (
    <>
      <div className='tree-node'>
        {/* leaf */}
        <div onClick={() => expandCollapse()} className={`node-toggle ${expandok}`}>
          {leaflink}
        </div>
        {/* else children expanded  */}
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

const TreeView = ({ input }) => {
  return (
    <div>
      {input.map((rootNode, index) => (
        <TreeNode key={index} node={rootNode} />
      ))}
    </div>
  )
}

export default TreeView
