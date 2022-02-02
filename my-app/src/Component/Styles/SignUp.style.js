import styled from "styled-components"

export const SignUpStyle = styled.div `
    :root {
        --primary: #8b6000;
    }
    width: 100%;
    height: 100vh;
    .form {
        
        width: 90%;
        height: 80vh;
        position: absolute;
        right: 5%;
        left: 5%;
        top: 5%;
        bottom: 5%;
        border-radius: 10px;
        background-color: white;
        padding: 3rem 0 0 2rem;
        & h2 {
            width: 90%;
            margin-bottom: 1.4rem;
            text-align: center;
            color: #8b6000;
        }
    }
    
    label {
        font-weight: 700;
        font-family: Mulish;
        text-transform: uppercase;
    }
    p {
        margin-bottom: 4rem;
    }
    button {
        width: 90%;
        padding: .5rem 0;
        border: 1px solid #8b6000;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: 500;
        font-family: Mulish;
    }
    .option-tab {
        font-family: Mulish;
        
        position: absolute;
        width: 80%;
        text-align: center;
        margin-top: 2rem;
        & .Link {
            color: #8b6000;
        }
    }
    input {
        border: 1px solid #8b6000;
        border-radius: 4px;
        margin-top: .7rem;
        padding: .2rem 0 .7rem .2rem;
        display: block;
        width: 90%;
        &:focus, &:active {
            outline: 0;
        }
    }
    img {
        width: 100%;
        height: 100vh;
    }
    @media only screen and (max-width: 500px) {
        .option-tab {
            padding-top: 5rem;
        }
    }
    @media only screen and (max-width: 300px) {
        .option-tab {
            padding-top: 2rem;
        }
    }
    overflow-y: hidden;
`

