import styled from 'styled-components'

export const Menu = styled.div`

width: 100%;
height: 100%;
background-image: linear-gradient(10deg, #8e0e00 0%, #1f1c18 150%);
box-sizing: border-box;

header {

  display: flex;
  align-items: center;
  justify-content: space-between;

}

header img {

  width: 10%;
  padding: 0 1rem;

}

@media screen and (max-width: 968px){
  
  header img {

    width: 25%;
    
  }

}

`

export const Search = styled.div`

.curved-div svg {
  
  display: block;

}

.curved-div .svg_fund {

  margin-top: -4rem;
  width: 100%;

}

.curved-div.upper {

  background: #fff;
  width: 100%;
  
}

.curved-div h1 {
  
  font-size: 4.5rem;
  color: #111;
  text-align: center;
  margin-top: -1.5rem;
  
}

.curved-div p {

  font-size: 1.1rem;
  color: #111;
  font-weight: 500;
  text-align: center;
  margin: 2rem 5rem 0 5rem;
 
}

.custom-search {

  position: relative;
  text-align: center;
  overflow: hidden;
  width: 300px;
  margin: 2rem auto 0 auto;

}

.custom-search-input {

  width: 100%;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 10px 100px 10px 20px; 
  line-height: 1;
  outline: none;

}

.custom-search-botton {

  position: absolute;
  right: 3px; 
  top: 3px;
  bottom: 3px;
  border: 0;
  background: rgba(000,000,000,.99);
  cursor: pointer;
  color: #fff;
  outline: none;
  margin: 0;
  padding: 0 10px;
  border-radius: 100px;
  z-index: 1;

}

@media (max-width: 991px) {



  .curved-div svg{

    width: 143%;
    transform: translate(-30%);   

  }

  .curved-div .svg_fund {

  width: 143%;
  transform: translate(-30%);   
  margin-top: 0;

}

.curved-div h1 {
  
  font-size: 1.9rem;
  margin-top: 0.5rem;
  
}

.curved-div p {

  font-size: 1.1rem;
 
}

}

`

export const MovieList = styled.ul`

list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
column-gap: 2rem;
row-gap: 2rem;

.movies {

  margin-top: 1.5rem;

}

`

export const Movie = styled.li`

 display: flex;
 flex-direction: column;
 align-items: center;

img {

    width: 13rem;
    column-gap: 42px;
    border-radius: 1rem;
    margin-bottom: 0;

}

a {

    transition: all 0.3s;

}

a:hover {

    transform: scale(1.1);

}

@media screen and (max-width: 798px){
  
  img {

  width: 17rem;

}

}

`

export const Pagination = styled.div`

  padding: 4rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

button {

  background: #d52322;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  font-size: 100%;
  transition: all 0.3s;

}

button:hover {

  filter: brightness(0.8);

}

button:active {

  filter: brightness(0.5);

}

`

export const FooterPage = styled.li`
   
.container {

	max-width: 500%;
	margin:auto;
  padding: 1rem 1.5rem;

}
    
.row {

	display: flex;
	flex-wrap: wrap;

}

ul {

	list-style: none;

}

.footer {

  background: rgba(000,000,000,.99);
  box-shadow: 0 15px 15px rgba(0,0,0,.9);
  padding: 5rem 0;

}

.footer-col {

   width: 25%;
   padding: 0 15px;

}

.footer-col h4 {

	font-size: 18px;
	color: #fff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;

}

.footer-col h4::before {

	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #d52322;
	height: 2px;
	box-sizing: border-box;
	width: 50px;

}

.footer-col ul li:not(:last-child) {

	margin-bottom: 10px;

}

.footer-col ul li a {

	font-size: 16px;
	text-transform: capitalize;
	color: #fff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;

}

.footer-col ul li a:hover {

	color: #fff;
	padding-left: 8px;

}

.footer-col .social-links a {

	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #fff;
	transition: all 0.5s ease;

}

.footer-col .social-links a:hover {

	color: #24262b;
	background-color: #fff;

}


@media (max-width: 767px) {

  .footer-col h4::before{

   margin: 2px 35%;
   width: 30%;

}

  text-align: center;

  .footer-col{

    width: 50%;
    margin-bottom: 30px;

}

}

@media (max-width: 574px) {

  text-align: center;
  
  .footer-col{

    width: 100%;

}

}

`