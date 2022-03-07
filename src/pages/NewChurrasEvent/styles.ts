import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  width: 50%;
  margin-top: -20px;
  background: var(--card-background);
  border-radius: 2px;
  padding: 10px;

  .addChurrastBtn {
    background: var(--new-churras-btn);
    border: none;
    color: var(--btn-login);
    padding: 10px;
    transition: opacity 0.2s;
    font-size: 17px;
    font-weight: 700;
    margin-top: 35px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ChurrasContainer = styled.div`
  .formContent {
    width: 100%;
    display: flex;
    align-items: flex-end;

    .formLabel {
      display: flex;
      font-size: 21px;
      font-weight: 700;
      margin-left: 20px;
      width: 35%;
    }

    input {
      width: 55%;
      height: 40px;
      border: none;
      border-bottom: 1px solid var(--bottom-border);
      margin-left: 10px;
    }

    .formValidation {
      margin-top: 20px;
      width: 100%;
      display: flex;
      align-items: center;

      .nameFieldError {
        color: var(--error-message);
      }
    }
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;

  label {
    display: flex;
    align-items: flex-start;
    font-size: 21px;
    font-weight: 700;
    margin-left: 20px;
  }

  .dateFieldError {
    color: var(--error-message);
  }
`;

export const GuestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  width: 100%;

  .title span {
    font-size: 21px;
    font-weight: 700;
    width: 150px;
    margin-left: 20px;
  }

  .participante {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 15px;
    width: 100%;
   div {
      margin-left: 20px;
      label {
        margin-right: 20px;
        font-size: 17px;
        font-weight: 500;
      }
      .inputField {
        width: 55%;
        height: 30px;
        border: none;
        border-bottom: 1px solid var(--bottom-border);
        margin-left: 10px;
         
        }
        .name{ 
          width: 300px;
        }
        .value {
          width: 150px;
        }
      }
      .nameFieldError,
       {
        color: var(--error-message);
      }
      .valueFieldError {
        color: var(--error-message);
        margin-left: 75px;
      }
    }
  }

  .deleteParticipant {
    background: var(--delete-btn);
    border: none;
    color: var(--text);
    padding: 5px;
    margin-left: 35px;
    transition: opacity 0.2s;
    font-size: 14px;

    &:hover {
      opacity: 0.8;
    }
  }

  .adicionarParticipante {
    display: flex;
    justify-content: flex-end;

    .newParticipantBtn {
      background: var(--new-participant-btn);
      border: none;
      color: var(--text);
      padding: 5px;
      padding-left: 10px;
      padding-right: 10px;
      transition: opacity 0.2s;
      font-size: 14px;
      margin-top: 15px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
