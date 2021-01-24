import React from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {FiEdit3, FiTrash, FiCoffee, FiCalendar} from 'react-icons/fi';
import { BiCamera } from 'react-icons/bi';

import Menu from '../../components/Menu';
import FlorianopolisImage from '../../assets/florianopolis.jpg';


import * as S from './styles';
import CityCard from '../../components/CityCard';

const Detail: React.FC = () => {
  return(
    <S.Container>
      <Menu />
      <S.Content>
        <header>
          <Link to="/">
            <AiOutlineArrowLeft size={24} color="#A0ACB2" />
          </Link>
          <div>
            <div className="wrapper-buttons">
              <button className="edit">
                <FiEdit3 size={20} color="#617480"/>
              </button>
              <button className="trash">
                <FiTrash size={20} color="#617480"/>
              </button>
            </div>
            <button type="button">
              + Adicionar um local
            </button>
          </div>
          
        </header>
        <S.Banner>
          <img src={FlorianopolisImage} alt=""/>
        </S.Banner>
        <main>
          <div className="dados">
            <div className="left">
              <h1>Florianópolis</h1>
              <div className="wrapper-content">
                <p>Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.</p>
                <span>
                  É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.
                </span>
              </div>
            </div>
            <div className="right">
              <div className="card">
                <div className="header">
                  <BiCamera size={40} color="#F25D27" />
                </div>
                <div className="body">                 
                  <span>67</span> 
                  <br/>                 
                  <small>
                    Pontos Turísticos
                  </small>
                </div>
              </div>
              {/*  */}
              <div className="card">
                <div className="header">
                  <FiCoffee size={40} color="#F25D27" />
                </div>
                <div className="body">                 
                  <span>20</span> 
                  <br/>                 
                  <small>
                    Comida e Bebida
                  </small>
                </div>
              </div>
              {/*  */}
              <div className="card">
                <div className="header">
                  <FiCalendar size={40} color="#F25D27" />
                </div>
                <div className="body">                 
                  <span>11</span> 
                  <br/>                 
                  <small>
                    Eventos Organizados
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="top">
            <div className="title">
              <h2>Top Avaliados</h2>
            </div>
            <div className="wrapper-cities">
              <CityCard top={true} />
              <CityCard top={true} />
              <CityCard top={true} />
              <CityCard top={true} />
            </div>
          </div>
        </main>
        
      </S.Content>
    </S.Container>
  );
}

export default Detail;