import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100%;
  background: white;
  position: relative;
  margin: auto;
	padding: 4rem 0;
	@media screen and (min-width: 768px){
		width: 80%;
	}
	@media screen and (min-width: 1024px){
		width: 70%;
	}
`
export const ProductHeader = styled.div`
  height: 40px;
  position: relative;
  padding: 20px;
	margin: 1rem 0
`
export const GobackButton = styled.div`
  position: relative;
  width: 0px;
  height: 0px;
  border-top: 30px solid #47be73;
  border-bottom: 30px solid transparent;
  border-left: 30px solid #47be73;
  border-right: 30px solid transparent;
  &:before {
    content: "←";
    position: absolute;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.3rem;
    font-weight: bold;
    top: -22px;
    left: -22px;
`
export const ProductBody = styled.div`
  padding: 0 30px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
	@media screen and (min-width: 768px){
		grid-template-columns: repeat(2, 1fr)
	}
`
export const LeftGridProduct = styled.div`
	padding: 0 calc(5% - 1px);
	h2 {
		color: #999999;
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		margin: 20px 0;
		text-transform: uppercase;
	}
	h3 {
		color: #232e3a;
		margin: 20px 0;
	}
`
export const ProductImg = styled.img`
	max-width: 70%;
	margin:auto;
`
export const RightGridProduct = styled.div`
	padding: 2rem;
	color: #999;
  font-size: 0.78rem;
  line-height: 1.5;
	margin: auto;
	display:grid;
`
export const Quantity = styled.div`
	margin: 40px 0;
	color: #333;
	display:flex;
	justify-content: center;
	align-items: center;
`
export const QuantImg = styled.img`
	border-radius: 6px;
	border: none;
	cursor: pointer;
	outline: none;
	display: grid;
	align-content: center;
	justify-content: center;
	margin: 0.25rem;
  padding: 10px;
	&:hover {
		color: #47be73;
	}
`
export const TotalContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid;
	padding-top: 40px;
	margin-top: auto;
	p{
		color: #47be73;
  	position: relative;
  	font-size: 1.5rem;
	}
`