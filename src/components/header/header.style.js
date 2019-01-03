import styled from "styled-components";
const primaryBGColor = "blueviolet";
const primaryTextColor = "#000000b8";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  height: 100px;
  top: 0;
  color: ${primaryTextColor};
  z-index: 1;

  .navbar-brand {
    font-size: 25px;
    font-weight: bold;
    color: white;
    background: ${primaryBGColor};
    padding: 5px;
    cursor: default;
  }
  .header {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .nav {
    padding: 0;
    list-style: none;
    display: flex;
    margin: 0;
    width: 30%;
    color: white;
    justify-content: space-around;
    @media (max-width: 760px) {
      display: none;
    }
    .nav-item {
      cursor: pointer;
      &:hover {
        color: ${primaryBGColor};
      }
    }
    .active {
      color: ${primaryBGColor};
    }
  }

  button {
    color: white;
    background: ${primaryBGColor};
    border: navy;
    padding: 9px 25px;
    border-radius: 20px;
    box-shadow: 0px 0px 0px 2px;
    &:hover {
      background: #6b08c7;
    }
    @media (max-width: 760px) {
      background: white;
      color: ${primaryTextColor};
    }
  }
  .nav-mobile-wrapper {
    position: relative;
    @media (min-width: 761px) {
      display: none;
    }
    .nav-mobile {
      position: absolute;
      padding: 0;
      list-style: none;
      top: 30px;
      left: 0;

      .nav-mobile-item {
        border-top: solid rgba(0, 0, 0, 0.3) 1px;
        padding: 10px;
      }
      .search {
        border: none;
        background: #e4e3e3;
        color: white;
        padding: 5px 10px;
        margin-bottom: 5px;
        border-radius: 5px;
        width: calc(100vw - 40px);
      }
    }
    .hamburger {
      cursor: pointer;
      @media (min-width: 761px) {
        display: none;
      }
    }
  }
`;
