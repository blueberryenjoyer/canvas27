import { useState } from 'react'
import Frontpage from './components/Frontpage.tsx'
import Signup from './components/Signup.tsx'

export default function App() {


  const [token, setToken]: any = useState(null)

  return (
    <>
      <Frontpage token={token} />
      <Signup token={token} setToken={setToken} />
    </>
  )
}