import { Liste } from "./list-styled";

function List({data,data2}) {
  console.log(data);
  return <Liste>{data2 ? <p>{data2}</p> : <p>{data}</p>}</Liste>;
}

export default List;
