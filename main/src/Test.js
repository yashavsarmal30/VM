
import React from 'react'

const arr = [
    {
        "name": "Yash Avsarmal",
        "mobile": "2345289873",
        "email": "yash123@gmail.com",
        "password": "yash123",
        "pic": "https://postimg.cc/pyXmLYCk",
        "id": 1
      },
      {
        "name": "Maaz Saikh",
        "mobile": "2345289873",
        "email": "maaz123@gmail.com",
        "password": "maaz123",
        "pic": "https://postimg.cc/pyXmLYCk",
        "id": 2
      },
      {
        "name": "Adib Khan",
        "mobile": "4152896354",
        "email": "adib123@gmail.com",
        "password": "adib123",
        "pic": "https://avatars.githubusercontent.com/u/112754831?v=4",
        "id": 5
      }
]

const Test = () => {

    for(let e of arr){
        console.log(e)
    }

  return (
    <div>Test</div>
  )
}



export default Test