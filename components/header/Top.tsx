// import styles from "./styles.module.scss";
// import { MdSecurity } from "react-icons/md";
// import { BsSuitHeart } from "react-icons/bs";
// import { RiAccountPinCircleLine } from "react-icons/ri";
// import { RiArrowDropDownFill } from "react-icons/ri";

// export default function Top() {
//   return (
//     <div className="styles.top">
//       <div className={styles.top__container}>
//         <div></div>
//         <ul className={styles.top__list}>
//           <li>
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/011/571/454/non_2x/circle-flag-of-iran-free-png.png"
//               alt="country flag"
//             />

//             <span>IRAN / USD</span>
//           </li>
//           <li>
//             <MdSecurity />
//             <span>Buyer Protection</span>
//           </li>
//           <li>
//             <span>Customer Service</span>
//           </li>
//           <li>
//             <span>Help</span>
//           </li>
//           <li>
//             <BsSuitHeart />
//             <span>Wishlist</span>
//           </li>
//           <li>
//             <div className={styles.flex}>
//               <RiAccountPinCircleLine />
//               <span>Account</span>
//               <RiArrowDropDownFill />
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";
export default function Top({}) {
  const [visible, setVisible] = useState(false);
  let session = true;
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <span>Iran / USD</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {session ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <span>Nima</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu />}
          </li>
        </ul>
      </div>
    </div>
  );
}
