import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    
`;

export const Content = styled.div`
    width: 100%;

    header {
        width: 100%;
        height: 96px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 112px 0 208px;
        border: 1px solid #DCE2E6;

        button {
            border: 0;
            color: #fff;
            width: 214px;
            height: 48px;
            font-family: 'Heebo', sans-serif;

            /* Others / Green */

            background: #51B853;
            border-radius: 10px;
        }
    }

    main {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 33px;
        grid-row-gap: 32px;
        
        

        padding: 29px 112px 29px 208px;
    }
`;