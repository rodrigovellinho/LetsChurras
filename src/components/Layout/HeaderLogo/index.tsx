import barbecueImg from "../../../assets/bbq-pattern.svg";
import { ImageContainer } from "./styles";

export default function HeaderLogo() {
  return (
    <ImageContainer>
      {/*   <div className="image">
           <img src={barbecueImg} alt="barbecue" />
      </div> */}
      <div className="title">
        <span>Agenda de Churras</span>
      </div>
    </ImageContainer>
  );
}
