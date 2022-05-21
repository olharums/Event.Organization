import { FC, ReactChild } from "react";
import { BackgroundContainer, Image, Content } from "./styles";

interface IParams {
  image: string | undefined;
  children: ReactChild | ReactChild[];
  isMainPage?: boolean;
}

const BackgroungImage: FC<IParams> = ({
  image,
  children,
  isMainPage = false,
}) => {
  return (
    <BackgroundContainer>
      <Image
        height={"100%"}
        src={
          image ? (isMainPage ? "" : process.env.REACT_APP_API_URL) + image : ""
        }
        alt="party"
      />
      <Content>
        <div>{children}</div>
      </Content>
    </BackgroundContainer>
  );
};
export default BackgroungImage;
