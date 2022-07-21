import { useEffect, useState } from "react";

import { nanoid } from "nanoid";

import Crud from "../../client/crud";
import Item from "../functional/item/Item";

const Shape = () => {
  const [list, setList] = useState<[]>();

  const getList = async () => {
    const server = new Crud("/api/shape");
    const res = await server.get("/list");
    setList(res?.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {list &&
        list.map((e: any) => {
          const key = nanoid();
          if (e.enable) {
            return <Item e={e} key={key} endpoint={"/api/shape"} />;
          }
        })}
    </div>
  );
};

export default Shape;