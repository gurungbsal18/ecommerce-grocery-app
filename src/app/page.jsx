import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <span>Fresh Honey</span>
        <h1 className="heading">Get Fresh Honey</h1>
        <button className="btn btn-sm btn-primary">Shop Now</button>
      </div>
    </>
  );
}
