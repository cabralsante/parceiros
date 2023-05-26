import styled from "styled-components";

export const AppImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 25%;

    & > img {
        background: #fff;
        width: 70%;
        height: 70%;
    }

    @media (max-width: 768px) {
        & > img{
            width: 40%;
            height: 40%;
        }
    }

    @media (max-width: 480px) {
        & > img{
            width: 45%;
            height: 45%;
        }
    }
`;

export const AppSubtitle = styled.h2`
    font-size: 1em;
    margin-bottom: 4%;

    @media (max-width: 768px) {
        font-size: .9em;
    }

    @media (max-width: 480px) {
        font-size: .8em;
    }
`;

export const AppVideo = styled.video`
    width: 30%;
    height: 30%;
    margin-bottom: 4%;
    margin-top: 2%;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);

    @media (max-width: 768px) {
        width: 60%;
        height: 60%;
        margin-bottom: 3%;
    }

    @media (max-width: 480px) {
        width: 60%;
        height: 60%;
    }
`;

export const AppVideoDescription = styled.p`
    font-size: .8em;

    & > span {
        font-weight: bold;
        color: #61dafb;
    }

    @media (max-width: 768px) {
        font-size: .8em;
    }

    @media (max-width: 480px) {
        font-size: .7em;
    }
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #282c34;
    color: white;
    text-align: center;
    padding: 10px;

    @media (max-width: 768px) {
        height: 100vh;

        & > ${AppImageContainer} > img {
            object-fit: contain;
        }

        & > ${AppImageContainer} > img {
            flex-basis: 100%;
        }
    }
`;