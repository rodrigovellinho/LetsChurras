import React, { useContext } from "react";
import { Container, CardsContainer } from "./styles";
import ChurrasCard from "../../components/UI/ChurrasCard";
import AddChurrasCard from "../../components/UI/AddChurrasCard";
import HeaderLogo from "../../components/Layout/HeaderLogo";
import FooterLogo from "../../components/Layout/FooterLogo";
import {
  ChurrasContext,
  ChurrasContextData,
} from "../../store/ChurrasProvider";

export default function ChurrasAgenda() {
  const { churrascos } = useContext(ChurrasContext) as ChurrasContextData;

  return (
    <Container>
      <HeaderLogo />

      <CardsContainer>
        {churrascos.map((churrasco) => (
          <ChurrasCard
            key={churrasco.id}
            id={churrasco.id}
            name={churrasco.name}
            day={churrasco.day}
            guests={churrasco.guests}
          />
        ))}
        <AddChurrasCard />
      </CardsContainer>

      <FooterLogo />
    </Container>
  );
}
