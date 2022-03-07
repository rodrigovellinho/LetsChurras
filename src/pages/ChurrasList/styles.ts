import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .dateContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .eventDate {
      width: 83px;
      height: 33px;
      font-weight: 800;
      font-size: 28px;
      line-height: 32.87px;
      margin-left: 24px;
      margin-top: 21px;
    }

    .peopleIcon {
      margin-right: 70px;
      margin-top: 21px;
      span {
        width: 21px;
        height: 25px;
        font-weight: 500;
        font-size: 21px;
        line-height: 24.65px;
        margin-left: 12px;
      }
    }
  }

  .eventContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;

    .eventReason {
      width: 400px;
      height: 23px;
      font-weight: 700;
      font-size: 36px;
      line-height: 42.26px;
      display: flex;
      justify-content: flex-start;
      margin-left: 24px;
    }

    .moneyIcon {
      margin-right: 20px;

      span {
        width: 21px;
        height: 25px;
        font-weight: 500;
        font-size: 21px;
        line-height: 24.65px;
        margin-left: 12px;
      }
    }
  }

  .personList {
    margin-top: 40px;
    width: 95%;
    margin-left: 25px;
  }

  .btnVoltar {
    margin-top: 20px;
    padding: 10px;
    font-size: 18px;
    background-color: var(--return-btn);
    border: none;
    border-radius: 2px;
    font-weight: 700;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  width: 60%;
  margin-top: -20px;
  background: var(--card-background);
  border-radius: 2px;
  height: 80%;
`;
