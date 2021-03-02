import styled from "styled-components/macro";
import Loader from "../../components/Loader";

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: lightgray;
  object-position: center;
`;

const AvatarLoader = () => (
  <Loader width={40} height={40}>
    <circle cx="20" cy="20" r="20" />
  </Loader>
);

export { AvatarLoader };
export default Avatar;
