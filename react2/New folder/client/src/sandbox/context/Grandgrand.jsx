


import React from 'react'
import { useData } from './SherdData'

export default function Grandgrand() {
   let data = useData()
  return <div>{JSON.stringify(data)}</div>
 
}
