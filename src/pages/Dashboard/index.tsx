import React from 'react';

import * as S from './styles';

import CityCard from '../../components/CityCard';
import Menu from '../../components/Menu';

const Dashboard: React.FC = () => {
  return(
      <S.Container>
          <Menu/>
            <S.Content>
                <header>
                    <h1>Cidades</h1>
                    <button type="button">
                        + Adicionar um perfil
                    </button>
                </header>
                <main>
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                </main>
            </S.Content>
      </S.Container>
  );
}

export default Dashboard;