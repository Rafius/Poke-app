import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { homeStart } from "../../redux/home"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(homeStart())
  }, [dispatch])

  return (
    <div>Home</div>
  )
}

export default Home