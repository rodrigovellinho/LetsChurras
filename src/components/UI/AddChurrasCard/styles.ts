import styled from "styled-components";

export const Container = styled.div`
  width: 282px;
  height: 192px;
  border-radius: 2px;
  background: var(--card--addchurras);
  box-shadow: 2px;
  position: relative;

  .ellipse {
    position: absolute;
    left: 96px;
    top: 32px;
  }

  .iconBbq {
    position: absolute;
    left: 118px;
    top: 53px;
  }

  .addChurras {
    width: 179px;
    height: 25px;
    line-height: 24.65px;
    position: absolute;
    left: 52px;
    bottom: 32px;
    color: var(--btn-login) !important;

    span {
      text-decoration: none;
      border: none;
      font-size: 21px;
      font-weight: 700;
    }
  }
`;
