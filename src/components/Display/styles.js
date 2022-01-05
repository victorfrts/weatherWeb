import styled from "styled-components";

const DisplayContainer = styled.section`
    
  position: relative;
  background-color: #FEF2E4;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  color: #505050;
  box-shadow: 0px 1px 5px 3px rgba(255,145,0,1);  

    .cityDetail{
      display: relative;
      align-content: center; 
      min-height: 250px;
    }

    .spinner{
      margin-top:118px;
      position:center;
      display:center;
      font-size: 32px;
      animation: spin infinite 1s linear;
      color: rgb(255, 145, 0);
      }
    
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .close{
      border: none;
      background: none;
      margin-top:10px;
      margin-right:5px;
      float:right;
      display:relative;
      font-size:14px;
    }
    
    .iconClose{
      color: rgb(255, 145, 0);
    }

    .cityName{
      margin-left:10%;
      font-weight:600;
      margin-top:10px;
      display:flex;
      float:left;
      font-size: 16px;
      width: 80%;
      color: #3f3f3f;
    }

    .cityWeather{
      padding-left:10%;
      font-weight:600;
      margin-top:auto;
      display:flex;
      float:left;
      font-size: 32px;
      width: 80%;
      color: #3f3f3f;
    }

    .cityInfo{
      margin-top:auto;
      display:relative;
      list-style: none;
      text-align:left;
    }

    .cityMinMax{
      display:flex;
      width: 80%;
      margin-left:10px;
      margin-top:auto;
      font-size: 12px;
      color: #3f3f3f;
    }

    .cityWind{
      margin-left:10px;
      height:15px;
      width:80%;
      margin-top:auto;
      color: #3f3f3f;
    }

    .weekList{
      margin-left:-5%;
      width:95%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      font-size: small;
      line-height: 18px;
      list-style: none;
    }

    .weekList li{
      margin: auto;
    }

    .weekName{
      text-align:center;
      color: #3f3f3f; 
    }
    
    .weekMinMax{
      margin-left:-10%;
      font-weight:700;
      margin-top:2px;
      color: rgb(255, 145, 0);
    }

    hr{
      width: 90%;
      margin-right: auto;
      margin-left: auto;
      border-style: solid;
      border-color: #F89B31;
      opacity: 0.7;
    }

`

export default DisplayContainer