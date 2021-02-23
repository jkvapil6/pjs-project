import { useState, useEffect } from 'react'

import Content from '../components/common/Content'

export default function Home() {

  const [emps, setEmps] = useState([])

  useEffect(() => {
    getEmployees()
  }, [])

  const getEmployees = async () => {
    const res = await fetch('/api/emp')
    const data = await res.json()

    if (data.emps) {
      console.log(data.emps)
      setEmps(data.emps)
    }
  }

  return (
    <Content>
      <h1>Employees</h1>
      <ul>
        { emps.map(e => (
          <li key={e.id}>{e.name}</li>
        )) }
      </ul>
    </Content>
  )
}
