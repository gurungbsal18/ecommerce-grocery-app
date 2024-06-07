import { CiDeliveryTruck } from "react-icons/ci";
import { GiHoneypot } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import HeroSlider from "@/component/HeroSlider";
import ProductCard from "@/component/ProductCard";
import SalesBanner from "@/component/SalesBanner";

export default function Home() {
  return (
    <>
      <div className="hero pt-4 pb-0 py-md-4">
        <div className="container">
          <HeroSlider />

          <div className="bg-warning rounded p-4 row justify-content-center align-items-center my-4 flex-column flex-md-row gap-5 gap-md-0">
            <div className="col-12 col-md-4 d-flex flex-column align-items-center gap-2">
              <span className="edit-icon">
                <CiDeliveryTruck />
              </span>
              <span>Free Delivery</span>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center gap-2">
              <span className="edit-icon">
                <GiHoneypot />
              </span>
              <span>100% Organic Product</span>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center gap-2">
              <span className="edit-icon">
                <RiSecurePaymentLine />
              </span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 my-5">
        <h4 className="title text-center">Our Best Selling Products</h4>
        <ProductCard />
      </div>
      <SalesBanner />
    </>
  );
}
