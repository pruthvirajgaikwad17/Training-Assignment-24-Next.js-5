import { useEffect, useState } from "react";
import styles from "../styles/Content.module.css";

type typeData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}[];

const Home = () => {
  const [storeData, setStoreData] = useState<typeData>([]);
  useEffect(() => {
    fetch("/api/store")
      .then((res) => res.json())
      .then((data) => setStoreData(data));
  }, []);

  console.log(storeData);
  return (
    <div className={styles.container}>
      <h1 className={styles.storeHeading}>Offer Store</h1>
      <hr />
      {storeData.map((prod) => {
        return (
          <div className={styles.content}>
            <img
              src={prod.image}
              alt="this is alternative"
              width="200"
              height="200"
            />
            <h4>{prod.title}</h4>
            <p>Price - {prod.price}</p>
            <p>category - {prod.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
