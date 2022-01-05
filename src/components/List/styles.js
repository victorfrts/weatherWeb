import styles from "styled-components"

const ListContent = styles.section`

    position: relative;
    left: 27.5%;
    width: 60%;
    max-width: 767px;

    @media only screen and (max-width: 774px) {
        .hideMinMax{
            display: none;
        }
        left: 35%;
    }
    
    @media only screen and (min-width: 1023px) {
        left: 33%;
    }

    .hideMinMax{
        visibility: hidden;
    }

    h2{
        text-align:left;
        color: white;
        font-size: 2em;
        margin-bottom: 0;   
        padding-bottom: 5px;
    }
    ul{
        text-align:left;
        margin-top: 0;
        display: grid;
        list-style: none;
        margin-left: -35px;
        max-width: 550px;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    }
    .minmax, .hideMinMax{
        font-weight: 100;
        line-height: 40px;
        font-size: small;
    }
    li{
        font-weight: 800;
        font-size: medium;
        line-height: 40px;
    }

`

export default ListContent;