import { CiDeliveryTruck } from "react-icons/ci";
import { GiHoneypot } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import HeroSlider from "@/component/HeroSlider";
import ProductCard from "@/component/ProductCard";
import SalesBanner from "@/component/SalesBanner";

export default function Home() {
  return (
    <>
      <div className="hero py-4">
        <div className="container">
          <HeroSlider />

          <div className="bg-warning rounded p-4 row justify-content-center my-4">
            <div className="col-4 d-flex flex-column align-items-center gap-2">
              <span className="edit-icon">
                <CiDeliveryTruck />
              </span>
              <span>Free Delivery</span>
            </div>
            <div className="col-4 d-flex flex-column align-items-center gap-2">
              <span className="edit-icon">
                <GiHoneypot />
              </span>
              <span>100% Organic Product</span>
            </div>
            <div className="col-4 d-flex flex-column align-items-center gap-2">
              <span className="edit-icon">
                <RiSecurePaymentLine />
              </span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 my-5">
        <ProductCard />
      </div>
      <SalesBanner />
    </>
  );
}
