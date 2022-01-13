import styled from "styled-components";

const StyleOrder = styled.div`
  padding: 50px;
  display: flex;

  .left {
    flex: 2;
  }

  .table {
    width: 100%;
    text-align: left;
    margin-bottom: 50px;
  }

  .row:last-child {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  .done {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inProgress {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: inProgress 1s ease infinite alternate;
  }

  @keyframes inProgress {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .undone {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.3;
  }

  .undone .checkedIcon,
  .inProgress .checkedIcon {
    display: none;
  }

  .right {
    flex: 1;
  }

  .wrapper {
    width: 90%;
    max-height: 300px;
    background-color: #333;
    color: white;
    padding: 10px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .totalTextTitle {
    margin-right: 10px;
  }

  .button {
    background-color: white;
    height: 30px;
    color: teal;
    font-weight: bold;
    margin-top: 20px;
    cursor: not-allowed;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    .trTitle {
      display: none;
    }

    .tr {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    .id::before {
      content: "Order ID: ";
      font-weight: 500;
    }
    .name::before {
      content: "Customer: ";
      font-weight: 500;
    }
    .address::before {
      content: "Address: ";
      font-weight: 500;
    }
    .total::before {
      content: "Total: ";
      font-weight: 500;
    }

    .row:last-child {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .done,
    .undone,
    .inProgress {
      margin-bottom: 20px;
    }

    .wrapper {
      width: 100%;
    }
  }
`;
export default StyleOrder;
