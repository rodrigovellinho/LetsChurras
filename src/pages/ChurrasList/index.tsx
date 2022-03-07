/* eslint-disable eqeqeq */
import HeaderLogo from "../../components/Layout/HeaderLogo";
import FooterLogo from "../../components/Layout/FooterLogo";
import { Container, FormContainer } from "./styles";
import iconPeople from "../../assets/icon_people.svg";
import iconMoney from "../../assets/icon_money.svg";
import { useContext } from "react";
import { ChurrasContext } from "../../store/ChurrasProvider";
import { useParams } from "react-router-dom";
import ChurrasListGuest from "../../components/ChurrasListGuest";
import { Link } from "react-router-dom";

export default function ChurrasList(): JSX.Element {
  const { churrascos } = useContext(ChurrasContext);
  const params = useParams();

  const churras = churrascos.find(
    (churrasco) => churrasco.id == params.churrasId
  );

  const churrasGuestsTotalAmount = churras?.guests.reduce(
    (sumTotal: number, guest) => {
      return (sumTotal += Number(guest.value));
    },
    0
  );

  return (
    <Container>
      <HeaderLogo />

      <FormContainer>
        <div className="dateContainer">
          <span className="eventDate">{churras?.day}</span>
          <div className="peopleIcon">
            <img src={iconPeople} alt="people icon" />
            <span>{churras?.guests.length}</span>
          </div>
        </div>

        <div className="eventContainer">
          <span className="eventReason">{churras?.name}</span>
          <div className="moneyIcon">
            <img src={iconMoney} alt="money icon" />
            <span>R$ {churrasGuestsTotalAmount}</span>
          </div>
        </div>

        <div className="personList">
          {churras?.guests.map((guest) => (
            <ChurrasListGuest
              key={params.churrasId}
              churrasId={params.churrasId}
              guestId={guest.guestId}
              name={guest.name}
              value={guest.value}
              isPayed={guest.isPayed}
            />
          ))}
        </div>
      </FormContainer>
      <Link to="/agenda">
        <button className="btnVoltar">Voltar</button>
      </Link>
      <FooterLogo />
    </Container>
  );
}
