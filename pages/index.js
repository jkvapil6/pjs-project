import { useState, useEffect } from 'react'

// import useSWR from 'swr'

import Content from '../components/common/Content'


// const fetcher = (url) => fetch(url).then((res) => res.json())

///
/// Home component
///
const Home = () => {

  
  // const { emps, error }  = useSWR('/api/emp', fetcher)

  const [emps, setEmps] = useState([])

  // useEffect(() => {
  //   console.log(emps)
  // }, [emps])

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

  // if (error) return <div>Failed to load</div>

  // if (!emps) return <div>Loading...</div>

  return (
    <Content>
      <h1>Employees</h1>
      <ul>
        { emps? emps.map(e => (
          <li key={e.id}>{e.name}</li>
        )) : ""}
      </ul>
    </Content>
  )
}


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://localhost:3000/api/emps`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default Home
