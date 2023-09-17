import React from 'react'
import styled from 'styled-components';
import {PiMonitor} from "react-icons/pi"
import {CiSettings} from "react-icons/ci"
import {BsMegaphone} from "react-icons/bs"

const Home =() =>{
  return (
    <div>
        <Container>
            <TxtWrapper>
                
                <UpTxt>
                    <h2>WELCOME TO <span>LAYER</span></h2>
                    <Div>
                     <Lilcircle>
                     </Lilcircle>
                        <HR>
                        </HR>
                        <HR1>
                        </HR1>
                    </Div>
                </UpTxt>
                

                <NextTxt>
                <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit <br/> amet, consectetur adipiscing elit.</p> 
                </NextTxt>
            </TxtWrapper>
            <Wrapper>
                <Leftside>
                    <Inleft>
                        <ALLDIV>
                            <Text>
                                <h3>
                                BOOTSTRAP 3.2
                                </h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.
                                </p>
                            </Text>
                            <Icon>
                                <PiMonitor />
                            </Icon>
                        </ALLDIV>
            
                        <ALLDIV2>
                            <Text>
                            <h3>
                            CREATIVE DESIGN
                                </h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.
                                </p>
                            </Text>
                            <Icon2>
                                <CiSettings/>
                            </Icon2>
                        </ALLDIV2>

                        <ALLDIV3>
                            <Text>
                            <h3 >
                            EASY TO USE
                                </h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.
                                </p>
                            </Text>
                            <Icon3>
                                <BsMegaphone/>
                            </Icon3>
                        </ALLDIV3>
                    </Inleft>
                </Leftside>
                <Rightside>
                    <Img src='https://zozothemes.com/html/layer/demo/images/about-us/about-4.png'/>
                </Rightside>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Home;

const Icon = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 360px;
    background: linear-gradient(to right, #962AE9, #C912DA );
    color: white;
    font-size: 50px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 360ms;

    &:hover{
        transform: scale(1.06);
        cursor: pointer;
    }

    /* @media screen and (max-width: 768px) {
      height: 50px;
      width: 50px;
      font-size: 15px;
      border-radius: 360px;
    } */
`
const Icon2 = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 360px;
    background:linear-gradient(to right, #FF5E3C, #FF9833);
    color: white;
    font-size: 50px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 360ms;

    &:hover{
        transform: scale(1.06);
        cursor: pointer;
    }
`
const Icon3 = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 360px;
    background: linear-gradient(to right, #F1396B, #FC6650 );
    color: white;
    font-size: 40px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 360ms;

    &:hover{
        transform: scale(1.06);
        cursor: pointer;
    }
`

const Text = styled.div`
    height: 120px;
    width: 500px;
    /* background-color: red; */
    line-height: 25px;
    text-align: right;

    /* @media screen and (max-width: 768px) {
        margin-right: 30px;
    } */
    h3{
        font-weight: 700;
        font-size: 20px;

        /* @media screen and (max-width: 768px) {
      font-size: 20px;
    } */
    }

    p{

        font-size: 15px;
        color: #666666;
    }
`

const ALLDIV3 = styled.div`
    height: 200px;
    width: 100%;
    /* background-color: black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ALLDIV2 = styled.div`
    height: 200px;
    width: 100%;
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
`
const ALLDIV = styled.div`
    height: 200px;
    width: 100%;
    /* background-color: greenyellow; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Inleft = styled.div`
    height: 400px;
    width: 100%;
    /* background-color: cornsilk; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    /* align-items: ; */
    justify-content: space-between;
  }
`

const Img = styled.img`
    margin-left: 100px;
    @media screen and (max-width: 768px) {
      height: 35%;
      width: 400px;
      margin-left: 5px;
  }
`

const Leftside =  styled.div`
    height: 600px;
    width: 50%;
    /* background-color: hotpink; */
    display: flex;
    justify-content: center;
    align-items: center;


`

const Rightside = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 60px;
      justify-content: center;
      display: flex;
      /* background-color: red; */
  }

`

const NextTxt = styled.div`
    text-align: center;
    margin-top: 40px;
    color: #666666;
    /* display: flex;
    justify-content: center;
    align-items: center; */
`

const HR1 = styled.div`
   height: 2px;
   width: 60px;
   background-color: #666666;
`

const HR = styled.div`
    height: 2px;
    width: 60px;
    background-color: #e74c3c;
`

const Div = styled.div`
    /* background-color: purple; */
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

const Lilcircle = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 360px;
    background-color: #e74c3c;
    display: flex;
`

const UpTxt = styled.div`
    /* background-color: blue; */
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    h2{
        color: black;
        font-size: 35px;
        font-weight: 600;

        span{
            color: #e74c3c;
        }

        @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    }
`

const Container = styled.div`
    /* background-color: green; */
    height: 100%;
    width: 100%;
    padding: 100px 0px;
    /* display: flex; */

    
`
const TxtWrapper = styled.div`
    /* background-color: aqua; */
    color: white;
    height: 170px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* margin-bottom: 200px; */
`

const Wrapper = styled.div`
    /* background-color: red; */
    height: 90%;
    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
`