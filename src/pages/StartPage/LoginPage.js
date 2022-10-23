import React from "react";
import styled from "styled-components";
import {AuthContext} from "../../context/auth.js"
import { useState} from "react";
import axios from "axios";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { ColorFill } from "react-ionicons";

function LoginPage() {
  const navigate = useNavigate();
  const {user, setUser} = React.useContext(AuthContext)
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState("");

  let body = {
    email: email,
    password: password
  };

  function sendData(e) {
    e.preventDefault();

    setDisabled(true)


    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        body
      )
      .then((res) => {
        setUser(res.data)
        navigate("/hoje");
        setDisabled(false);
        
      })
      .catch((err) => {
        alert(err.data);
        console.log(err.message)
        setDisabled(false);
        
      });
  }



  return (
    <LoginStyle buttoncolor={disabled===true ? "#D4D4D4" : "#52b6ff"} inputcolor={disabled===true ? "#D4D4D4" : "#FFFFFF"} >
     
     {/*  */}
      <img src={logo} alt="logo" />
      <form onSubmit={sendData}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setMail(e.target.value)}
          required
          disabled={disabled}
        />
        <input
          name="senha"
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={disabled}
        />
        <button  type="submit" disabled={disabled}>
          {" "}
          Entrar{" "}
        </button>
      </form>
      <p onClick={() => navigate("/cadastro")}>
        {" "}
        Não tem uma conta? Cadastre-se!{" "}
      </p>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
  background-color: white;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  margin: 75px 0 199px 0;

  img {
    width: 280px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;
    background-color: ${props=> props.inputcolor}; 
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #2d3133;
    padding: 10px;
    margin-bottom: 8px;
  }

  button {
    width: 303px;
    height: 45px;
    left: 36px;
    top: 381px;
    background: ${props=> props.buttoncolor};
    /* #52b6ff */
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    border: #52b6ff solid 1px;
    color: #ffffff;
  }

  p {
    margin-top: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;

export default LoginPage;
