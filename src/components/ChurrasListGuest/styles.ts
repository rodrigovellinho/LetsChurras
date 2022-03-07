import styled from "styled-components";

export const Container = styled.div`
  .completed {
    .isPayedCheck {
      text-decoration: line-through;
      opacity: 0.6;
      width: 120px;
      height: 25px;
      font-weight: 700;
      font-size: 21px;
      line-height: 24.65px;
      color: var(--list-person);
    }
    .noPayed {
      width: 120px;
      height: 25px;
      font-weight: 700;
      font-size: 21px;
      line-height: 24.65px;
      color: var(--list-person);
    }
  }
  .personDetail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .personName {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      input[type="checkbox"] {
        width: 25px !important;
        height: 25px !important;
        background: var(--radio-btn) !important;
        border: 3px solid var(--bottom-border) !important;
      }
      span {
        width: 51px;
        height: 25px;
        font-weight: 700;
        font-size: 21px;
        line-height: 24.65px;
        color: var(--list-person);
        margin-left: 19px;
      }
    }
  }

  .borderBottom {
    margin-top: 8px;
    border-bottom: 1px solid var(--border-bottom);
  }
`;
