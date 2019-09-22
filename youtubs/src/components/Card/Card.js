import React from 'react';

import thumbnail from '../../assets/imgs/thumbnail.jpg';

const Card = props => (
  <div className="card" style={{border: '1px solid transparent'}}>
    <img className="card-img-top" src={thumbnail} alt="Card image cap" style={{ width: '210px', height: '118px' }}/>
    <div className="card-body">
      <h5 className="card-title">Till I Collapse</h5>
      <p className="card-text">
        <div>EminemShow</div>
        <div>1 mi visualizações</div>
        <div>há 3 meses atrás</div>
      </p>
    </div>
  </div>
);

export default Card;