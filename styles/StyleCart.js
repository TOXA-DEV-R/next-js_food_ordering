import styled from "styled-components";

const StyleCart = styled.div`
  padding: 50px;
  display: flex;

  .left {
    flex: 2;
  }

  .right {
    flex: 1;
  }

  .imgContainer {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .table {
    width: 100%;
    border-spacing: 20px;
  }

  .name {
    font-weight: 500;
    color: #d1411e;
    font-size: 18px;
  }

  .total {
    font-weight: 500;
    font-size: 18px;
  }

  .wrapper {
    width: 90%;
    max-height: 300px;
    background-color: #333;
    padding: 50px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
  }

  .totalTextTitle {
    margin-right: 10px;
  }

  .button {
    height: 30px;
    color: #d1411e;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px;

    .table {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .trTitle {
      display: none;
    }

    .tr {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .imgContainer {
      width: 35vw;
      height: 35vw;
    }

    .name,
    .total {
      font-size: 24px;
    }

    .extras,
    .price,
    .quantity {
      font-size: 22px;
    }

    .price::before {
      content: "Price: ";
      font-weight: 500;
    }
    .quantity::before {
      content: "Quantity: ";
      font-weight: 500;
    }
    .total::before {
      content: "Total: ";
      font-weight: 500;
    }

    .wrapper {
      width: 100%;
    }
  }

  .paymentMethods {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .payButton {
    padding: 10px 5px;
    cursor: pointer;
    margin-bottom: 5px;
    background-color: white;
    color: teal;
    font-weight: bold;
  }
`;

export default StyleCart;
