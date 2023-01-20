import React from 'react'
import { calcTime, convertMoney } from '../../helpers'
import { Wrapper, Content } from "./style"

const MovieInfo = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
  
    <Content>
    
         <div className="column">
           <i className="fas fa-clock"></i>
             <p>Duração: {calcTime(time)}</p>
             </div>
            
             <div className='column_1'>
      <i className="fas fa-money-bill-alt"></i>
             <p>Orçamento: {convertMoney(budget)}</p>
             </div>
   
             <div className='column_2'>
             <i className="	fas fa-coins"></i>
             <p>Bilheteria: {convertMoney(revenue)}</p>
         </div>
    </Content>
  
    </Wrapper>
  )
}

export default MovieInfo