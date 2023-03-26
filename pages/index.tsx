import styles from "@/styles/Home.module.scss";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";

export default function Home({ country }: any) {
  console.log(country);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <main className={styles.main}>
        <Header />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=3w5rbtfl1e1f23g7")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      country: data,
    },
  };
}
