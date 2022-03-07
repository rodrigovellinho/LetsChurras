import React from "react";
import HeaderLogo from "../../components/Layout/HeaderLogo";
import FooterLogo from "../../components/Layout/FooterLogo";
import { Container, FormBox, LoginButton } from "./styles";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <HeaderLogo />
      <FormBox>
        <label htmlFor="email">Login</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e-mail"
          defaultValue="churras@trinca.com.br"
        />
      </FormBox>
      <FormBox>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="senha"
          defaultValue="12344"
        />
      </FormBox>
      <LoginButton>
        <Link to="/agenda">Entrar</Link>
      </LoginButton>
      <FooterLogo />
    </Container>
  );
}
