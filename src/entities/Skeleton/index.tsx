import { SkeletonContainer } from "./styles";

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <h1>Идёт загрузка данных</h1>
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      ></div>
    </SkeletonContainer>
  );
};

export default Skeleton;
