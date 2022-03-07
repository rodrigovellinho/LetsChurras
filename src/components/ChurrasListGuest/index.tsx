import { Container } from "./styles";
import { useContext } from "react";
import { ChurrasContext } from "../../store/ChurrasProvider";

interface ChurrasListGuestProps {
  churrasId: string;
  guestId: string;
  name: string;
  value: number;
  isPayed: boolean;
}

export default function ChurrasListGuest(props: ChurrasListGuestProps) {
  const { churrasId, guestId, name, value, isPayed } = props;
  const { toogleGuest } = useContext(ChurrasContext);

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  function handleTogglePersonCheck(churrasId: string, guestId: string) {
    toogleGuest(churrasId, guestId);
  }

  return (
    <Container>
      <div className="completed">
        <div className="personDetail">
          <div className="personName">
            <input
              type="checkbox"
              readOnly
              checked={props.isPayed}
              onClick={() => handleTogglePersonCheck(churrasId, guestId)}
            />
            <span>{name}</span>
          </div>
          <div className={isPayed ? "isPayedCheck" : "noPayed"}>
            <span>{formattedValue}</span>
          </div>
        </div>
      </div>
      <div className="borderBottom"></div>
    </Container>
  );
}
