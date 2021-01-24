import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    padding: 24px 0 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 96px;
    height: 100%;
    background:#F25D27;

    .menu {
        display: flex;
        flex-direction: column;

        a {
            svg{
                color: #fff;
            }

            & + a {
                margin-top:42px;
            }
        }
    }

`;
