import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import * as S from './styles';

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Background />
      <S.Content>
        
       <div>
         <a href=""><AiOutlineArrowLeft size={24} color="#A0ACB2" /></a>
       <form>
          <h1>Fazer login</h1>

          <input type="text" placeholder="E-mail"/>
          <input type="password" placeholder="Senha"/>
          <div>
            <div className="check">
              <button type="button"/>
              <span>Lembrar-me</span>
            </div>
            <div className="remember">
              <a href="/">Esqueci minha senha</a>
            </div>
          </div>
          <button>Acessar plataforma</button>


        </form>

        <div className="alert">
          <FiAlertCircle size={32} color="#F25D27" />
          <span>
          Acesso restrito à sócios e moderadores
          </span>
        </div>
       </div>
      </S.Content>
    </S.Container>
  );
}

export default Login;