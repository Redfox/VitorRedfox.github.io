import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  padding: 21px;
  display: flex;
  align-items: center;

  .box {
    width: 200px;
    height: 200px;
    background: #e75a10;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    z-index: 50;
  }
  .box-container {
    width: 86%;
    height: 86%;
    background-color: #ffa542;
    align-self: flex-end;
    position: relative;
    margin: 0 7% 7% 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box-container .dot{
    margin: 16px;
  }

  .box-right {
    background-color: #261302;
    height: 100%;
    width: 7%;
    align-self: flex-end;
    position: absolute;
  }

  .box-footer {
    background-color: #261302;
    width: 100%;
    height: 7%;
    align-self: flex-end;
    position: absolute;
  }

  .click-me {
    height: 20%;
    width: 70%;
    z-index: 50;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .click-me-container{
    height: 75%;
    width: 90%;
    background: #f99b45;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .click-me-container p {
    font-family: superMario;
  }

  .click-me-left {
    height: 75%;
    width: 5%;
    background: #7d3f06;
    position: absolute;
    left: 0;
  }

  .click-me-right {
    height: 75%;
    width: 5%;
    background: #7d3f06;
    position: absolute;
    right: 0;
  }

  .click-me-top {
    height: 12%;
    width: 90%;
    background: #7d3f06;
    position: absolute;
    top: 0;
  }

  .click-me-bottom {
    height: 12%;
    width: 90%;
    background: #7d3f06;
    position: absolute;
    bottom: 0;
  }

  .click-me:hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }

  .dot{
    background-color: #261302;
    width: 7%;
    height: 7%;
  }

  .left {
    left: 0;
    position: absolute;
  }

  .right {
    right: 0;
    position: absolute;
  }

  .bottom {
    bottom: 0;
    position: absolute;
  }

  .top {
    top: 0;
    position: absolute;
  }


  .demo-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 500px;
    height: 100%;
  }

  .line {
    width: 100%;
    padding: 1px 0px;
    color: transparent;
  }

  .line p{
    color: #FFF;
  }

  .line img{
    width: 100%;
  }

  .shadow {
    position: absolute;
    opacity: .2;
  }

  .small {
    width: 18px;
    height: 18px;
  }

  .circle {
    border-radius: 50%;
  }

  .square, .circle {
    pointer-events: none;
    position: relative;
    width: 28px;
    height: 28px;
    margin: 1px;
    background-color: currentColor;
    font-size: 14px;
  }
`;

