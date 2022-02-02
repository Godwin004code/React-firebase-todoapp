import styled from "styled-components"

export const HomeStyle = styled.header `
    background-color: #8b6000;
    width: 100%;
    padding-bottom: 1rem;
   h1  {
       color: white;
   }
   h2 {
       width: 90%;
       margin: 0 auto;
       
   }
    & .form-list {
        width: 90%;
        margin: 0 auto;
        border-radius: 30px 30px 0px 0px;
        background-color: white;
    }
    .header {
        padding: 1rem 0;
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
        display: flex;
    }
    .logout-btn {
        
    }
    @media only screen and (max-width: 768px) {
        h1 {
            font-size: 1.5rem;
        }
        h2 {
            font-size: 1.3rem;
        }
    }
`