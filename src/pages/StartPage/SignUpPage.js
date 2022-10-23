import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import logo from "../../assets/img/logo.png";
import StartStyle from "../../assets/styles/StartStyle.js";
import { useNavigate } from "react-router-dom";

function SignUpPage(props) {
  //const {setUserImage} = useContext(ImageContext)

  const navigate = useNavigate();
  let [disabled, setDisabled] = useState(false);
  let [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function sendData(e) {
    e.preventDefault();

    setDisabled(true);

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        form
      )
      .then((res) => {
        navigate("/");
        setDisabled(false)
      })
      .catch((err) => {
        alert(err.response.data.message);
        setDisabled(false)
      });
  }

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <StartStyle buttoncolor={disabled===true ? "#D4D4D4" : "#52b6ff"} inputcolor={disabled===true ? "#D4D4D4" : "#FFFFFF"}>
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
        <button type="submit" disabled={disabled}> Cadastrar </button>
      </form>
      <p> Já tem uma conta? Faça login! </p>
    </StartStyle>
  );
}

export default SignUpPage;
