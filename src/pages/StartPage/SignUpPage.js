import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/img/logo.png";
import StartStyle from "../../assets/styles/StartStyle.js";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  let [onload, setOnload] = useState(false);

  let [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });
  let [disabled, setDisabled] = useState(false);

  function sendData(e) {
    e.preventDefault();
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        form
      )
      .then((res) => {
        navigate("/");
        setOnload(true);
      })
      .catch((err) => console.log(err));
  }

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  if (onload) {
    alert("load!");
  }

  return (
    <StartStyle>
      <img src={logo} onClick={() => navigate("/")} alt="logo" />
      <form onSubmit={sendData}>
        <input
          name="email"
          type="email"
          placeholder="email"
          required
          onChange={handleForm}
          value={form.email}
          disabled={disabled}
        />
        <input
          name="password"
          type="password"
          placeholder="senha"
          required
          onChange={handleForm}
          value={form.password}
          disabled={disabled}
        />
        <input
          name="name"
          type="text"
          placeholder="nome"
          required
          onChange={handleForm}
          value={form.name}
          disabled={disabled}
        />
        <input
          name="image"
          type="url"
          placeholder="foto"
          required
          onChange={handleForm}
          value={form.image}
          disabled={disabled}
        />
        <button type="submit"> Cadastrar </button>
      </form>
      <p> Já tem uma conta? Faça login! </p>
    </StartStyle>
  );
}

export default SignUpPage;
