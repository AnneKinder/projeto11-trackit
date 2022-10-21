import { renderMatches } from "react-router-dom";
import styled from "styled-components";
import pic from "../assets/img/nyra.jpeg";
import { useNavigate, useContext } from "react-router-dom";
import ImageContext from "../context/ImageContext.js";

export default function NavBar(props) {
  const navigate = useNavigate();
  const {userImage} = props
  //const [userImage, setUserImage] = useContext(ImageContext)
  return (
    <NavbarStyle>
      <p onClick={() => navigate("/")}>TrackIt</p>
      <img src={userImage} alt="pic" />
    </NavbarStyle>
  );
}

const NavbarStyle = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  left: 0px;
  top: 0px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  p {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
    margin-right: 190px;
  }

  img {
    object-fit: cover;
    width: 51px;
    height: 51px;
    left: 306px;
    top: 9px;
    border-radius: 98.5px;
  }
`;
