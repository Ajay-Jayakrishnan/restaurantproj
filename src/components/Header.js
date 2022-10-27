import React from 'react'
import{Navbar,Container} from 'react-bootstrap'
import { useEffect,useState } from 'react'
import './Header.css'
function Header() {


const [headstyle,sethead]=useState(false)

  useEffect(() => {
    
    window.addEventListener('scroll',()=>{
      if (window.scrollY>100) {
        sethead(true)
      } else {
    sethead(false)
      }
      return()=>{
        window.removeEventListener("scroll",()=>{
  
        })
      }
    })
  
    
  }, [])
  

  return (
    <div>
      <Navbar  >
        <Container fluid style={{display:"flex",alignItems:"center"}} className={`trans ${headstyle && 'black'} `}>
          <Navbar.Brand  href="/" ><h3 style={{fontWeight:"bold"}} >Yummy</h3></Navbar.Brand>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header