import styled from 'styled-components'


export const Wrapper = styled.div`

  background-color: #111;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    
     height: 100%;

  }

`

export const Content = styled.div`

 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 flex-wrap: wrap;
 height: 100%;
 width: 100%;

.column, .column_1, .column_2 {
  
  display: flex;
  align-items: center;
  padding: 1rem;

}

.column p, .column_1 p, .column_2 p {
 
  font-size: 1.2rem;

}

.column i, .column_1 i, .column_2 i {
 
  margin: 0 0.5rem;
  font-size: 1.2rem;

}

@media screen and (max-width: 790px){

  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;

 
}










`

  
  