import { useContext } from "react";
import { Context } from "../context/Context";
import Useritem from "./Useritem";

const UserList = () => {
  const data = useContext(Context);

  return (
    <div>
      {data?.length > 0 ? (
        data.map((item, index) => <Useritem key={index} {...item} />)
      ) : (
        <h1>Data not found</h1>
      )}
    </div>
  );
};

export default UserList;