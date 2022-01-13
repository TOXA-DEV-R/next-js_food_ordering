import styled from "styled-components";

const StylePizzaCard = styled.div`
  width: 22%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  cursor: pointer;

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #d1411e;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #666;
  }

  .desc {
    text-align: center;
    color: #777;
  }

  @media screen and (max-width: 480px) {
    .container {
      width: 100%;
    }

    .title {
      font-size: 30px;
    }

    .price,
    .desc {
      font-size: 24px;
    }
  }
`;
export default StylePizzaCard;
