import React from 'react';

import * as S from './styles';
import { AiFillStar } from "react-icons/ai";
import {FiEdit3, FiTrash, FiCoffee} from 'react-icons/fi';

interface CityCardPropd {
    top?: boolean;
}

const CityCard: React.FC<CityCardPropd> = ({top}) => {
  return(
        <S.Container to="/city/florianopolis">
            <div className="img">
                {top && (
                    <div className="top-star">
                        <AiFillStar size={20} color="#fff" />
                        <small>
                            4,7
                        </small>
                    </div>
                )}
                <div className="wrapper-buttons">
                    <button className="edit">
                        <FiEdit3 size={20} color="#617480"/>
                    </button>
                    <button className="trash">
                        <FiTrash size={20} color="#617480"/>
                    </button>
                </div>
            </div>
            {!top && (
                <div className="detail">
                    <h1>Águas Mornas</h1>
                    <span>13 locais</span>
                </div>
            )}
            {top && (
                <>
                    <div className="top-city">
                        <h1>Doce & Companhia</h1>
                    </div>
                    <div className="footer">
                        <small>Comida e bebida</small>
                        <FiCoffee size={20} color="#F25D27" />
                        
                    </div>
                </>
            )}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </S.Container>
  );
}

export default CityCard;