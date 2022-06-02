import styled from 'styled-components'

export const Container = styled.div`

.background_movie {

  position: relative;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
      
}
      
`
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

export const All = styled.div`
 
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding: 4rem 0;
  width: 85%;

    
    
h1 {

  font-size: 2.5rem;
  margin: 2rem 0;
    
}
    
.movie {
  
  background: rgba(000,000,000,.6);
  box-shadow: 0 15px 15px rgba(0,0,0,.8);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
    
img {

  width: 20rem;
  height: 100%;
  border-radius: 1rem;
  
}
    
.details {
       
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  max-width: 85%;
   
}

.buttons {
    
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 0;
  
}

.buttons button {  
        
  background: #d52322;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: #fff;
  padding: 1rem 4rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  font-size: 100%;
  transition: all 0.3s;
  
}
      
button:hover {
    
  filter: brightness(0.8);
  
}
  
button:active {
    
  filter: brightness(0.5);
  
}
    
span {

  line-height: 120%;
  margin-bottom: 1rem; 
  font-size: 130%;
   
} 
    
@media (max-width: 991px) {
        
  text-align: center;
 
.movie {
            
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
          
}
  
.details {
            
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding: 1rem;
            
}

img {

width: 100%;
border-radius: 1rem;

}
 
.movie .details h1 {
            
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 150%;  
  
}
                
}

`

export const Infos = styled.div`
  
  width: 100%;

.infos {

  display: flex;
  justify-content: center;
     
}

.info_title, .info_title_1, .info_title_2 {

  width: 100%;
       
}

.info_title i,  .info_title_2 i {

  margin: 0.2rem;
  font-size: 1.2rem;

}

.info_title_1 i {
  font-size: 1.2rem;
}

.info_title_1 {
  margin-left: 5rem;
}

.info_title_2 {
  margin-left: 5rem;
}

.rating span {

  font-size: 1.7rem;

}

.rating .circle {

  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  border-radius: 50%;
  padding: 0 1rem;

}

.rating .circle h1 {

  color: #111;
  font-size: 1.5rem;

}


.status h1 {

  font-size: 1.5rem;

}

.status span {

  font-size: 1.2rem;

}

.directors {

  margin: 0;

}

.directors span {

  font-size: 1.2rem;

}

@media screen and (max-width: 968px){

  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;

.infos {

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;

}

.info_title, .info_title_1, .info_title_2 {

  margin-bottom: 1rem;
  width: 100%;
     
}

.info_title_1 {

margin-left: 0;

}

.info_title_2 {

margin-left: 0;

}

.rating .circle {

display: flex;
align-items: center;
justify-content: center;
margin: auto;

}
  
}

`

export const Actor_title = styled.div`

 display: flex;
 align-items: center;
 color: #111;
 padding: 1rem;
 font-size: 1.2rem;
 

`

export const Actors = styled.div`

list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
column-gap: 2rem;
row-gap: 2rem;


.movies {

  margin-top: 1.5rem;

}

`

export const Informations = styled.div`

 display: flex;
 flex-direction: column;
 align-items: center;

 .infos {

  text-align: center;
  align-items: center;
  background: rgba(000,000,000,.99);
  box-shadow: 0 15px 15px rgba(0,0,0,.7);
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 1rem;
  width: 90%;
  transition: all 0.3s;

 }

 .infos img {

    width: 100%;
    column-gap: 1rem;
    border-radius: 1rem;
    margin-bottom: 0;
    transition: all 0.3s;
    border: none;

}

.infos:hover {

    transform: scale(1.1);

}

.infos p {

  padding: 0.5rem;
  color: ${props => props.theme.primary};

}

@media screen and (max-width: 968px){
  
.infos {

  width: 65%;

}
  
}

`