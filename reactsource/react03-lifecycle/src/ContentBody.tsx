import type { UserType } from "./LocalJsonFetcher";

const ContentBody = ({ myResult }: { myResult: UserType }) => {
  return (
    <div>
      <h2>{myResult.name}</h2>
      <ul>
        <li>num : {myResult.num}</li>
        <li>id : {myResult.id}</li>
        <li>cell : {myResult.cell}</li>
        <li>description : {myResult.description}</li>
      </ul>
    </div>
  );
};

export default ContentBody;
