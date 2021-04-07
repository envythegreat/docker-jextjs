import { motion } from 'framer-motion';
import styled from 'styled-components';



export const ProductFront = styled.div `
  width:100%;
  height:100%;
  background:#fff;
  position:absolute;
  left:-5px;
  top:-5px;
  transition: all 100ms ease-out;
`
export const ImageOverlay = styled.div `
  position:absolute;
  top:0;
  left:0; 
  width:100%;
  height:100%;
  background:#819aee;
  opacity:0;
`
export const ProductImg = styled(motion.img) `
  border-radius: 3px;
  transition: all 0.3s ease;
  object-fit: contain;
  width: 100%;
  height: 80%;
  padding: 2rem;
`
export const ViewDetails = styled.button`
  position:absolute;
  top:112px;
  left:50%;
  margin-left:-85px;	
  border:2px solid #fff;
  color:#fff;
  font-size:19px;
  text-align:center;
  text-transform:uppercase;
  font-weight:700;
  padding:10px 0;
  width:172px;	
  opacity:0;
  background-color: transparent;
  transition: all 200ms ease-out;
  outline:none;
  &:hover{
    background-color:#fff;
    color:#48cfad;
    cursor:pointer;
  }
`
export const Stats = styled.div`
  width:100%
`

export const StatsContainer = styled.div`
  background:#fff;	
	position:absolute;
	bottom:-290px
	left:0;
	height:300px;
	padding:27px 35px 35px;	
  transition: all 200ms ease-out;
  width:100%
`

export const ProductPrice = styled.span`
  float:right;
  color:#48cfad;
  font-size:18px;
  font-weight:600;
`

export const ProductName = styled.span`
  font-size:18px;
  color:#393c45;
`
export const Areame = styled.div`
  margin: 2rem 0;
`

export const AddToCart = styled.button`
  width: 100%;
  border: none;
  height: 3rem;
  text-align: center;
  color:#fff;
  font-size:19px;
  background-color: tomato;
  outline: none;
  font-weight:700;
  margin:auto;
  &:hover{
    color: tomato;
    background-color: #fff;
    border: 1px solid tomato;
    cursor:pointer;
  }
`
export const Card = styled(motion.div) `
  width: 100%;
  height:500px;
  position:relative;    	
  overflow:hidden;
  transition:  100ms ease-out;
  box-shadow:0px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  margin:auto;
  &:hover {
    top:5px;
    left:5px;
    width:100%;
    height:500px;
    box-shadow:0px 13px 21px -5px rgba(0, 0, 0, 0.3);
    transition:  100ms ease-out;
    ${ProductFront} {
      top:0px;
      left:0px;
      transition: all 100ms ease-out; 
    }
    ${StatsContainer} {
      top:272px;
      transition: all 200ms ease-out; 
    }
    ${ImageOverlay} {
      opacity:0.7;	
      transition: all 200ms ease-out; 
    }
    ${ViewDetails}{
      opacity:1;
      width:152px;
      font-size:15px;
      margin-left:-75px;
      top:115px;
      transition: all 200ms ease-out;
    }
  }
`
export const Section = styled(motion.div)`
  padding: 3rem 0;
`

export const ProductContainer = styled(motion.div)`
  row-gap: 2rem;
  margin: 2rem;
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(2,1fr);
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(3,1fr);
  }
`
