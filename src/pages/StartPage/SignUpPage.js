import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/img/logo.png";
import StartStyle from "../../assets/styles/StartStyle.js";

function SignUpPage() {
  return (
    <StartStyle>
      <img src={logo} alt="logo" />
      <input name="email" type="text" placeholder="email" />
      <input name="senha" type="text" placeholder="senha" />
      <input name="nome" type="text" placeholder="nome" />
      <input name="foto" type="text" placeholder="foto" />
      <button> Cadastrar </button>
      <p> Já tem uma conta? Faça login! </p>
    </StartStyle>
  );
}

export default SignUpPage;
