import styled from 'styled-components';
import AguasMornasImg from './../../assets/aguasmornas.png';
import {Link} from 'react-router-dom';

export const Container = styled(Link)`

    width:256px;
    height: 307px;
    background: #fff;
    border-radius: 16px;
    border: 1px solid #DCE2E6;
    /* overflow: hidden; */

    .img{
        position: relative;
        background: url(${AguasMornasImg}) no-repeat;
        height: 148px;                
        background-size: cover;
        border-radius: 16px 16px 0 0;

        .top-star {
            width: 56px;
            height: 83px;
            background: #F25D27;
            border-radius: 10px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            left: 20px;
            top: -15px;

            small {
                
                font-size:20px;
                font-weight: 600;
                color:#F5F8FA;
                margin-top:8px;
            }


        }

        .wrapper-buttons {
            position: absolute;
            right: 15px;
            top: 15px;

            button {
                width:40px;
                height: 40px;
                border-radius: 10px 0px 0px 10px;
                border: 1px solid #DCE2E6;
                background: #FFFFFF;

                & + button {
                    margin-left: 4px;
                    border-radius: 0px 10px 10px 0px;
                }
            }
        }

    }

    .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 24px;
        margin-left: 24px;  

        h1 {
            font-size: 20px;
            color: #123952;
        }
        span {
            color: #617480;
            font-size: 16px;
            font-family: 'Roboto', sans-serif;
        }
    }

    .top-city{
        border-bottom: 1px solid #DCE2E5;

        h1 {
            padding: 24px;
            font-size: 20px;
            font-weight:600;
            color: #123952;
        }
    }

    .footer{
        display: flex;
        align-items: center;
        margin: 0 24px;
        justify-content: space-between;
        margin-top: 26px;

        small {
            font-size: 16px;
            color: #617480;
            font-weight: 500;
        }
    }

`;
