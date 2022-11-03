import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./header.scss";

function Header() {
  const [userdata, setUserdata] = useState("");
  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const url = "https://randomuser.me/api/";
    try {
      const veri = await axios.get(url);
      if (veri.status === 200) {
        setUserdata(veri.data.results[0]);
      } else {
        // throw "veri hatalı geldi";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const randomClick = () => {
    data();
  };

  return (
    <div className="header">
      <Card userdata={userdata} />
      <button onClick={randomClick}>Random User</button>
    </div>
  );
}

export default Header;
