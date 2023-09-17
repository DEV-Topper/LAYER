import React, {useState} from 'react'
import styled from "styled-components"
import { AiOutlineMail } from "react-icons/ai"
import { BiMenu, BiSearch } from "react-icons/bi"

const Header = () => {

  const [Currentheader , setHeader] = useState (false);

  const headerChange = () =>{
      const scroll = window.pageYOffset

      if (scroll >=100){
          setHeader(true)
      }else{
          setHeader(false)
      }
  };

  window.addEventListener("scroll", headerChange)

  return (
    <div>
      {Currentheader ?(
         <Container bg="white" po= "fixed">
         <Wrapper>
           <Menu><BiMenu /></Menu>
           <Logo src='https://zozothemes.com/html/layer/demo/images/logo-dark.png' />
           
           <Navhold>
             <Navs cl="">Home</Navs>
             <Navs cl="">Features</Navs>
             <Navs cl="">How it works</Navs>
             <Navs cl="">Screenshots</Navs>
             <Navs cl="">Team</Navs>
             <Navs cl="">News</Navs>
             <Navs cl="">Extras+</Navs>
             <Icon><AiOutlineMail /></Icon>
           </Navhold>
           <Search><BiSearch /></Search>
         </Wrapper>
       </Container>
      ):(
        <Container bg="" po= "fixed">
        <Wrapper>
          <Menu><BiMenu /></Menu>
          <Logo src='https://zozothemes.com/html/layer/demo/images/logo-color.png' />
          
          <Navhold>
            <Navs cl= "white">Home</Navs>
            <Navs cl= "white">Features</Navs>
            <Navs cl= "white">How it works</Navs>
            <Navs cl= "white">Screenshots</Navs>
            <Navs cl= "white">Team</Navs>
            <Navs cl= "white">News</Navs>
            <Navs cl= "white">Extras+</Navs>
            <Icon><AiOutlineMail /></Icon>
          </Navhold>
          <Search><BiSearch /></Search>
        </Wrapper>
      </Container>
      )
       }
    </div>
  )
}

export default Header
const Search = styled.div`
  font-size: 30px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1093px) {
    display: flex;
  }

  &:hover{
    background-color: #E74C3C;
  }
`
const Menu = styled.div`
  font-size: 35px;
  color: black;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 1093px) {
    display: flex;
  }
`
const Icon = styled.div`
  color: red;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 5px;
`
const Navs = styled.h4 <{cl: string}>`
  text-transform: uppercase;
  color: ${({cl}) =>cl};
  margin-left: 30px;
  cursor: pointer;
  font-family: Poppins;

  &:hover{
    color: orange;
  }
`
const Navhold = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1093px) {
    display: none;
  }
`
const Logo = styled.img`
  height: 35px;
`
const Wrapper = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div <{bg: string; po: string}>`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: ${({bg})=> bg};
  justify-content: center;
  position: ${({po}) => po};

  @media screen and (max-width: 1093px) {
    background-color: white;
  }
`