import { FC, ReactChild } from "react";
import { BackgroundContainer, Image, Content } from "./styles";

interface IParams {
  image: string;
  children: ReactChild | ReactChild[];
}

const BackgroungImage: FC<IParams> = ({ image, children }) => {
  return (
    <BackgroundContainer>
      <Image src={image} alt="party" />
      <Content>
        <div>{children}</div>
      </Content>
    </BackgroundContainer>
  );
};
export default BackgroungImage;
