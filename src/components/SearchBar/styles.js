import styles from "styled-components"

const SearchContent = styles.section`

    position: relative;
    width: 100%;
    max-width: 565px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    .searchBar{
        background-color:white;
        height:36px;
        display: flex;
        max-width: 500px;
        margin-right:auto; 
        margin-left:auto;
        box-shadow: 0px 1px 5px 3px rgba(255,145,0,1);
        margin-bottom: ${props => `${props.marginBottom}px`}
    }
    .iconBar{
        left:-5px;
        width:15px;
        position:relative;
        height:35px;
        right: ${props => `${props.right}%`};
        top: ${props => `${props.top}%`};
    }

    input{
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 90%;
        height: 34px;
        font-size: large;
        border:none;
        outline: none;     
        padding-left:15px;
    }

    hr{ 
        margin-top: 24px;
        border-style: solid;
        border-color: white;
        opacity: 0.7;
    }

`

export default SearchContent