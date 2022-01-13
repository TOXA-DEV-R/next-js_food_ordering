import styled from "styled-components";

const StyleFooter = styled.footer`
  height: calc(100vh - 100px);
  background-color: #222;
  display: flex;

  .item {
    flex: 1;
    position: relative;
    display: flex;
  }

  .item:last-child {
    flex: 2;
    padding: 50px;
    justify-content: space-between;
  }

  .card {
    flex: 1;
    padding: 0 20px;
  }

  .title {
    font-size: 18px;
    color: #b7903c;
  }

  .text {
    color: lightgray;
  }

  .motto {
    color: rgb(211, 211, 211);
  }

  @media screen and (max-width: 480px) {
    height: auto;
    text-align: center;

    .item:first-child {
      display: none;
    }

    .item {
      flex-direction: column;
    }

    .title {
      font-size: 30px;
    }

    .text {
      font-size: 20px;
    }
  }
`;

export default StyleFooter;
