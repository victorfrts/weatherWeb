import styles from "styled-components";

const HeaderContainer = styles.section`

    display:flex;
    align-items:center;
    justify-content:center;
    height: 15vh;

    h1{
        font-size:50px;
        color: white; 
        text-align:left;
    }

    @media only screen and (max-width: 1079px) {
        h1{
            max-width: 270px;
        }
    }

`

export default HeaderContainer;