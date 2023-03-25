import Link from "next/link";
import styles from "./styles.module.scss";
export default function UserMenu({}) {
  let session = true;
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shoppay !</h4>
      {session ? (
        <div className={styles.flex}>
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Nima</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
}
