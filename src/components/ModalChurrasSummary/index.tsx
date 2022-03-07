/* import { Container } from "./styles";
import Modal from "../UI/Modal";
import iconPeople from "../../assets/icon_people.svg";
import iconMoney from "../../assets/icon_money.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ChurrasContext } from "../../store/ChurrasProvider"; */

/* export default function ModalChurrasSummary(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/agenda");
  };

  const churrasCtx = useContext(ChurrasContext);

  const numberOfChurrasGuests = churrasCtx.guests.reduce((curNum, item) => {
    return curNum + churrasCtx.guests;
  }, 0);

  const amountOfCash = churrasCtx.guests.reduce((curNum, item) => {
    return curNum + churrasCtx.guests;
  }, 0);

  const churrasDate = churrasCtx.guests.reduce((curNum, item) => {
    return curNum + churrasCtx.guests;
  }, 0);

  return (
    <Modal onClose={props.onClose}>
      <Container>
        <div className="title">
          <span>Detalhes do Churras</span>
        </div>

        <div className="detailsChurras">
          <div className="churrasDay">
            <span>{churrasDate}</span>
          </div>
          <div className="detailItemChurras">
            <img src={iconPeople} alt="people" />
            <span>{/* {numberOfChurrasGuests} }</span>
          </div>
          <div className="detailItemChurras">
            <img src={iconMoney} alt="money" />
            <span>R$ {/* {amountOfCash} }</span>
          </div>
        </div>
        <div className="btnChurras">
          <button className="cancelChurras" onClick={props.onClose}>
            Cancelar
          </button>
          <button className="confirmChurras" onClick={handleClick}>
            Confirmar
          </button>
        </div>
      </Container>
    </Modal>
  );
}
 */
