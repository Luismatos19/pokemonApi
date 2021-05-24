import styled from "styled-components";

//import * as colors from "../../config/colors";

export const Section = styled.section`
  width: 80%;
  max-width: 1180px;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 10px auto;

  .search {
    height: 100px;
    margin: 30px auto;
    width: 80%;
    max-width: 600px;
    text-align: center;
    background-color: white;
    border-radius: 5px;
  }

  .cards {
    width: 100%;
    display: flex;
    height: 100%;
    margin-top: 10px;
    flex-flow: row wrap;
  }

  .card {
    background-color: white;
    width: 250px;
    height: 300px;
    margin: 20px auto;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    text-align: center;
  }

  .card img {
    width: 80%;
    height: 80%;
    margin: 0 auto;
  }
  .card h2 {
    background-color: red;
    height: 20%;
    padding-top: 14px;
  }
`;
