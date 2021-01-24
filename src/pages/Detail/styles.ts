import styled from 'styled-components';


export const Container = styled.div``;

export const Content = styled.div`
    width: 100%;

    header {
        align-items: center;
        background: #fff;
        border: 1px solid #DCE2E6;
        display: flex;
        height: 96px;
        justify-content: space-between;
        padding: 0 112px 0 208px;
        width: 100%;

        a {
            align-items: center;
            border: 1px solid #DCE2E6;
            border-radius: 10px;
            display: flex;
            height: 40px;
            justify-content: center;
            width: 40px;
        }

        > div {
            align-items: center;
            display: flex;
            
            > button {
                border: 0;
                color: #fff;
                width: 214px;
                height: 48px;
                font-family: 'Heebo', sans-serif;
                margin-left: 24px;

                background: #51B853;
                border-radius: 10px;
            }
            .wrapper-buttons {
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
        
    }

    main {
        padding: 80px 112px 0 208px;

        .dados {
            display: flex;
            justify-content: space-between;

            .wrapper-content{
            font-family: 'Heebo', sans-serif;
            max-width: 506px;
            font-weight: 400;

            p{ 
                line-height: 30px;
                font-size: 20px;
                margin: 40px 0 32px 0;
            }

            span {
                color: #617480;
                line-height: 26px;
                font-size: 16px;
            }
        }

        .right {
            display: flex;
            .card {
                width: 160px;
                height: 268px;
                background: #FFFFFF;
                border: 1px solid #DCE2E5;
                border-radius: 20px;

                & + div {
                    margin-left: 16px;
                }
                .header{
                    height: 104px;
                    border-bottom: 1px solid #DCE2E5;
                    display: flex;
                    align-items: center;

                    >svg {
                        margin-left:33px;
                    }
                }

                .body {
                    
                    padding:32px 0 0 32px;

                    span {
                        font-weight: 600;
                        font-size: 40px;
                        line-height: 40px;
                    }

                    small {
                        font-family: 'Heebo', sans-serif;
                        color: #617480;
                        max-width: 71px;
                        display: block;
                        margin-top:16px;

                        
                    }
                }
            }
        }
        }

        .top {
            margin-top: 120px;
            .title {
                h2{
                    font-size: 36px;
                }
            }

            .wrapper-cities {
                margin-top:33px;
                display: grid;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-column-gap: 33px;
                grid-row-gap: 32px;
            }
        }
    }
`;

export const Banner = styled.div`
    height: 340px;

    img {
        width: 100%;
    }
`;