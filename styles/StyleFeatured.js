import styled from "styled-components";

const StyleFeatured = styled.div`
  height: calc(100vh - 100px);
  background-color: #d1411e;
  overflow: hidden;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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
    width: 100%;
    height: 100%;
    display: flex;
    transition: all 1.5s ease-in-out;
    position: relative;
  }

  .imgContainer {
    width: 100vw !important;
    height: 100%;
    position: relative;
  }

  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;
export default StyleFeatured;
