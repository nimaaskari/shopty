import styles from "@/styles/Home.module.scss";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";

export default function Home({ country }: any) {
  const { data: sessoin } = useSession();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <main className={styles.main}>
        <Header country={country} />
        {sessoin ? "you are logged in" : "you are not logged in"}
        {/* <button
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
        </button> */}
        <Footer country={country} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // let data = await axios
  //   .get("https://api.ipregistry.co/?key=3w5rbtfl1e1f23g7")
  //   .then((res) => {
  //     return res.data.location.country;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  return {
    props: {
      country: {
        name: "Iran",
        flag: "https://cdn.britannica.com/22/1722-004-EAD033D8/Flag-Iran.jpg",
      },
    },
  };
  // {
  //   props: {
  //     country: {
  //       name: data.name,
  //       flag: data.flag.emojitwo,
  //     },
  //   },
  // };
}
