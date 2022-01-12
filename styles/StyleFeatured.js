import styled from "styled-components";

const StyleFeatured = styled.div`
  height: calc(100vh - 100px);
  background-color: #d1411e;
  overflow: hidden;
  position: relative;

  .arrowContainer {
    position: absolute;
    width: 10%;
    height: 20%;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 2;
  }

  .wrapper {
    width: 300vw;
    height: 100%;
    display: flex;
    transition: all 1.5s ease-in-out;
  }

  .imgContainer {
    width: 100vw;
    height: 100%;
    position: relative;
  }

  @media screen and (max-width: 480px) {
    .container {
      height: 50vh;
    }
  }
`;
export default StyleFeatured;
