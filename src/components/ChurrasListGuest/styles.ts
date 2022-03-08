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
      display: inline-block;

      input[type="radio"] {
        display: none;
      }

      input[type="radio"] + label:before {
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid var(--btn-border);
        background: #fff;
        display: inline-block;
        vertical-align: middle;
      }

      input[type="radio"]:checked + label:before {
        background: var(--radio-btn) !important;
        border: none !important;
        width: 25px;
        height: 25px;
      }

      label {
        width: 51px;
        height: 25px;
        font-weight: 700;
        font-size: 21px;
        line-height: 24.65px;
        color: var(--list-person);
        vertical-align: middle;
      }
    }
  }

  .borderBottom {
    margin-top: 8px;
    border-bottom: 1px solid var(--border-bottom);
  }
`;
