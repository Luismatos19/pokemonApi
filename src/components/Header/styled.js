import styled from "styled-components";

import * as colors from "../../config/colors";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  background: ${colors.red};
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-shadow: 0 5px rgba(0, 0, 0, 0.1);

  .logo img {
    width: 300px;
    height: 100px;
    //image-rendering: pixelated;
    image-rendering: -webkit-optimize-contrast; // tira o blurry da image
    padding-top: 0px;
  }

  .minilogo img {
    height: 40px;
    image-rendering: -webkit-optimize-contrast;
    width: 40px;
  }

  .links {
    display: flex;
    padding-right: 15px;
  }

  li {
    padding-right: 20px;
  }
`;
