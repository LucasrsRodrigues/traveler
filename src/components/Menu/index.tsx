import React from 'react';

import * as S from './styles';
import LogoSvg from '../../assets/Logo.svg';
import { FiPower } from 'react-icons/fi';
import {HiOutlineLocationMarker, HiOutlineViewGrid} from 'react-icons/hi';
import {BiComment} from 'react-icons/bi';

const Menu: React.FC = () => {
    return (
        <S.Container>
            <div className="logo">
                <img src={LogoSvg} alt="travel"/>
            </div>
            <div className="menu">
                <a href="/">
                    <HiOutlineLocationMarker size={24}color="#fff"  />
                </a>
                <a href="/">
                    <HiOutlineViewGrid size={24}color="#FFA585"  />
                </a>
                <a href="/">
                    <BiComment size={24}color="#FFA585"  />
                </a>                  
            </div>
            <div className="power">
                <a href="/">
                    <FiPower size={24} color="#fff" />
                </a>
            </div>
        </S.Container>
    );
}

export default Menu;