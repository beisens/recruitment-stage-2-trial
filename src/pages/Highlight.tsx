import React from 'react'
import {useHighlight} from '../hooks/useHighlight'
import {locations, processLocations} from '../utils/string'

let c = 1
export default () => {
  // console.log(c++)
  function getData(key: string = '') {
    const names = [
      'mary',
      'george',
      'max well',
      'work',
      'William.',
      'James',
      'Harper',
      'Mason',
      'Evelyn',
      'Ella',
      'Jackson',
      'Avery',
    ]
    if (key.trim() === '') {
      return []
    }
    return names.filter((p) => {
      return p.includes(key.trim())
    })
  }

  const {higtlightText, setHighlightText} = useHighlight('')
  return (
    <div>
      <input
        type="text"
        value={higtlightText}
        onChange={(e) => {
          setHighlightText(e.target.value)
        }}
      />
      <ul>
        {getData(higtlightText).map((item) => {
          let aa = processLocations(item, higtlightText)
          console.log(aa);
          
          return (
            <p>
              {aa.map((seg) => {
                if (seg.shouldDecorate) {
                  return <span style={{color: 'red'}}>{seg.value}</span>
                } else {
                  return <span>{seg.value}</span>
                }
              })}
            </p>
          )
        })}
      </ul>
    </div>
  )
}
