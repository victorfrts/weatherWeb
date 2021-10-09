import styles from "styled-components"

const ListContent = styles.section`

    width: 30%;
    margin-right: auto;
    margin-left: auto;
    max-width: 800;
    
    @media only screen and (max-width: 631px) {
        .hideMinMax{
            display: none;
        }
    }

    .hideMinMax{
        visibility: hidden;
    }

    @media only screen and (min-width: 631px) {
        padding-left: 100px;
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
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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