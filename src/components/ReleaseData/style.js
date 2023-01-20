import styled from "styled-components";

export const Container = styled.div`

padding-top: 1rem;

.release-date {
        
        margin: 1rem 0;
        font-size: 120%;
        opacity: 0.5;
        
      }
          
@media (max-width: 991px) {

    .release-date {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    
  }

 }

`