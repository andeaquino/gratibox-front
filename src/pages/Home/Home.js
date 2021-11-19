import homeimg from "../../assets/home.webp";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeContainer>
      <img src={homeimg} />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;
