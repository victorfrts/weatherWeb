import styled from "styled-components"

const ListContent = styled.section`

    position: relative;
    margin: 35px auto;
    width: 50%;
    min-width: 525px;
    max-width: 565px;

    @media only screen and (max-width: 1079px) {
        .hideMinMax{
            display: none;
        }
    }

    .hideMinMax{
        visibility: hidden;
    }

    h2{
        text-align:left;
        color: white;
        font-size: 2.25rem;
        margin: 5px 35px 0;   
        padding-bottom: 5px;
    }
    ul{
        text-align:left;
        display: grid;
        align-items: flex-start;
        list-style: none;
        max-width: 550px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    .minmax, .hideMinMax{
        font-weight: 100;
        line-height: 40px;
        font-size: small;
    }
    li{
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 40px;
    }

`

export default ListContent;