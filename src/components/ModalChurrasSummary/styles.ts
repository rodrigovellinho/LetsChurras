import styled from "styled-components";

export const Container = styled.div`

.title {    
    height: 25px;   
    font-weight: 700;
    font-size: 30px;
    line-height: 25px;  
}

.detailsChurras {
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-around;
    align-items: center;   
    font-size: 30px;
    margin: 35px auto;

    .detailItemChurras {
        
        span{
            margin-left:10px;
        }

        img {
            height :25px;
        }
    }
}

.btnChurras {
    display: flex;
    justify-content: flex-end;
}

.cancelChurras {
    background: var(--delete-btn);
    border: none;
    color: var(--text);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    transition: opacity 0.2s;
    font-size: 21px;
    margin-top: 15px;
    margin-right: 20px;

    &:hover {
      opacity: 0.8;
    }
  } 
}
  .confirmChurras {
    background: var(--new-participant-btn);
    border: none;
    color: var(--text);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    transition: opacity 0.2s;
    font-size: 21px;
    margin-top: 15px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
