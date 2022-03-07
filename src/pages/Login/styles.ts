import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background);
  height: 100vh;

  /*  > span {
    font-weight: 800;
    font-size: 32px;
    margin-top: 70px;
    position: absolute;
  }

   img.banner {
    position: absolute;
    width: 100%;
    height: 200px;
    object-fit: cover;
    z-index: -1;
  }

  img.logo {
    position: absolute;
    width: 48px;
    height: 48px;
    left: 560px;
    bottom: 20px;
  } */
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 124px;
  margin-top: -20px;
  z-index: 1;

  &:last-child {
    margin-top: 30px;
  }

  input {
    width: 282px;
    height: 50px;
    border-radius: 2px;
    border: none;
    margin-top: 16px;
    font-weight: 400;
    font-style: italic;

    padding-left: 20px;

    &::placeholder {
      font-weight: 400;
      font-style: italic;
      font-size: 18px;
      padding-left: 20px;
    }
  }

  label {
    font-weight: 700;
    font-size: 21px;
  }
`;

export const LoginButton = styled.button`
  background: var(--btn-login);
  border-radius: 18px;
  height: 50px;
  width: 282px;
  border: none !important;

  a {
    color: var(--text) !important;
    text-decoration: none !important;
    border: none !important;
    font-size: 18px !important;
    font-weight: 700 !important;
  }
`;
