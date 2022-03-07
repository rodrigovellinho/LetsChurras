import styled from "styled-components";

export const Container = styled.div`
  width: 282px;
  height: 192px;
  border-radius: 2px;
  background: var(--card-background);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);

  span {
    color: var(--churras-card) !important;
    text-decoration: none !important;
  }

  a {
    text-decoration: none !important;
  }
`;

export const ContainerMargin = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;

  .eventDate {
    width: 83px;
    height: 33px;
    font-weight: 800;
    font-size: 28px;
    line-height: 32.87px;
    margin-bottom: 8px;
    margin-top: 21px;
  }

  .eventReason {
    width: 250px;
    height: 25px;
    font-weight: 700;
    font-size: 21px;
    line-height: 24.65px;
    display: flex;
    justify-content: flex-start;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: flex-start;

  .peopleIcon {
    margin-top: 52px;

    span {
      margin-left: 10px;
    }
  }

  .moneyIcon {
    margin-left: 102px;
    margin-top: 54px;

    span {
      margin-left: 10px;
    }
  }
`;
