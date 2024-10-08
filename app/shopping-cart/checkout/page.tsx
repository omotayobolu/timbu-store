"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import useCart from "@/hooks/useCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const router = useRouter();
  const { dispatch, REDUCER_ACTIONS, totalPrice, totalItems } = useCart();
  const [isCreditCardSelected, setIsCreditCardSelected] =
    useState<boolean>(false);

  const subTotal = Number(totalPrice.replace(/[^\d.-]/g, ""));
  const tax: number = 0.01 * subTotal;
  const totalPriceWithTax = subTotal + tax;

  const subTotalFormatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(subTotal);

  const taxFormatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(tax);

  const totalPriceFormatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(totalPriceWithTax);

  const onPlaceOrder = () => {
    dispatch({
      type: REDUCER_ACTIONS.CLEAR_ALL,
    });

    toast("Order placed successfully", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "success",
    });
    router.push("/");
  };

  const handlePaymentMethod = (e: ChangeEvent) => {
    if (e.target.id === "credit-card") {
      setIsCreditCardSelected(true);
    } else {
      setIsCreditCardSelected(false);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="text-primary-black md:mx-[4.2%] mx-[5%]">
        <button
          className="flex flex-row items-center space-x-1 text-2xl"
          onClick={() => router.back()}
        >
          <IoMdArrowBack /> Back to Cart
        </button>
        <div className="mt-12">
          <p className="text-2xl">Billing Information</p>
          <div className="mt-8 w-full flex md:flex-row flex-col md:space-x-12 items-start">
            <div className="md:w-[55%] w-full flex flex-col">
              <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0 justify-between">
                <div className="flex flex-col space-y-2.5 w-full">
                  <label htmlFor="first-name" className="font-normal text-base">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Duru"
                    className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                  />
                </div>
                <div className="flex flex-col space-y-2.5 w-full">
                  <label htmlFor="last-name" className="font-normal text-base">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Chim"
                    className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                  />
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex flex-col space-y-2.5 w-full">
                  <label htmlFor="Address" className="font-normal text-base">
                    Address*
                  </label>
                  <input
                    type="text"
                    id="Address"
                    placeholder="No 1, Rakiat street off ogundipe Lagos"
                    className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                  />
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-lg lg:space-y-0">
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label htmlFor="city" className="font-normal text-base">
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Ikeja"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label htmlFor="state" className="font-normal text-base">
                      State*
                    </label>
                    <input
                      type="text"
                      id="state"
                      placeholder="Lagos"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label htmlFor="country" className="font-normal text-base">
                      Country*
                    </label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Nigeria"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label
                      htmlFor="postal-code"
                      className="font-normal text-base"
                    >
                      Postal Code*
                    </label>
                    <input
                      type="text"
                      id="postal-code"
                      placeholder="Postal Code"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex lg:flex-row flex-col lg:lg:space-x-4 space-x-0 space-y-4 lg:space-y-0 ">
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label htmlFor="email" className="font-normal text-base">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="duruprecious@gmail.com"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label
                      htmlFor="phone-number"
                      className="font-normal text-base"
                    >
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone-number"
                      placeholder="08123456789"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-11">
                <p className="text-2xl font-medium">Select Shipping Method</p>
                <div className="mt-8 flex flex-col space-y-6">
                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-row space-x-3 items-center">
                      <input type="radio" name="shipping" id="free-shipping" />
                      <label
                        htmlFor="free-shipping"
                        className="flex flex-col space-y-1"
                      >
                        <p className="font-light">Free Shipping</p>
                        <span className="text-sm text-grey font-light">
                          Estimated date of delivery 12th May
                        </span>
                      </label>
                    </div>
                    <p className="font-light text-grey">$0.00</p>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-row space-x-3 items-center">
                      <input
                        type="radio"
                        name="shipping"
                        id="ground-shipping"
                      />
                      <label
                        htmlFor="ground-shipping"
                        className="flex flex-col space-y-1"
                      >
                        <p className="font-light">Ground Shipping</p>
                        <span className="text-sm text-grey font-light">
                          Estimated date of delivery 12th May
                        </span>
                      </label>
                    </div>
                    <p className="font-light text-grey">$0.00</p>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-row space-x-3 items-center">
                      <input
                        type="radio"
                        name="shipping"
                        id="express-shipping"
                      />
                      <label
                        htmlFor="express-shipping"
                        className="flex flex-col space-y-1"
                      >
                        <p className="font-light">Free Shipping</p>
                        <span className="text-sm text-grey font-light">
                          Estimated date of delivery 12th May
                        </span>
                      </label>
                    </div>
                    <p className="font-light text-grey">$0.00</p>
                  </div>
                </div>
              </div>
              <div className="mt-[4.125rem]">
                <p className="text-2xl font-medium">Payment Method</p>
                <div className="mt-6 flex flex-col px-6 py-2.5 border border-solid border-[#CFCFCF] rounded ">
                  <div className="flex flex-row items-center space-x-3">
                    <input
                      type="radio"
                      name="payment-method"
                      id="credit-card"
                      onChange={handlePaymentMethod}
                    />
                    <label
                      htmlFor="credit-card"
                      className="font-medium text-xl"
                    >
                      Credit Card
                    </label>
                  </div>
                  {isCreditCardSelected && (
                    <>
                      <div className="mt-5 flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
                        <div className="flex flex-col space-y-2.5 w-full">
                          <label
                            htmlFor="card-name"
                            className="font-normal text-base"
                          >
                            Name On Card
                          </label>
                          <input
                            type="text"
                            id="card-name"
                            placeholder="Duru Chim"
                            className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                          />
                        </div>
                        <div className="flex flex-col space-y-2.5 w-full">
                          <label
                            htmlFor="card-number"
                            className="font-normal text-base"
                          >
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="card-number"
                            placeholder="5555-3333-5566-3453"
                            pattern="\d{4}-\d{4}-\d{4}-\d{4}"
                            maxLength={16}
                            className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                          />
                        </div>
                      </div>
                      <div className="mt-5 flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
                        <div className="flex flex-col space-y-2.5 w-full">
                          <label
                            htmlFor="expiry-date"
                            className="font-normal text-base"
                          >
                            Expiry Date
                          </label>
                          <input
                            type="month"
                            id="expiry-date"
                            placeholder="06/23"
                            className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                          />
                        </div>
                        <div className="flex flex-col space-y-2.5 w-full">
                          <label
                            htmlFor="cvv"
                            className="font-normal text-base"
                          >
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            placeholder="523"
                            className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-6 flex flex-col px-6 py-2.5 border border-solid border-[#CFCFCF] rounded ">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center space-x-3">
                      <input
                        type="radio"
                        name="payment-method"
                        id="paypal"
                        onChange={handlePaymentMethod}
                      />
                      <label htmlFor="paypal" className="font-medium text-xl">
                        PayPal
                      </label>
                    </div>
                    <Image
                      src="/assets/paypal.svg"
                      alt=""
                      width={74}
                      height={26}
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-col px-6 py-2.5 border border-solid border-[#CFCFCF] rounded ">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center space-x-3">
                      <input
                        type="radio"
                        name="payment-method"
                        id="payoneer"
                        onChange={handlePaymentMethod}
                      />
                      <label htmlFor="payoneer" className="font-medium text-xl">
                        Payoneer
                      </label>
                    </div>
                    <Image
                      src="/assets/payoneer.svg"
                      alt=""
                      width={74}
                      height={26}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-row items-center space-x-3.5 text-xl text-[#161616]">
                    <input
                      type="checkbox"
                      name="save-details"
                      id="save-details"
                    />
                    <label htmlFor="save-details">Save card details</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] w-full mt-8 pt-[1.3125rem] pb-8 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded">
              <div className="px-6">
                <p className="font-medium text-2xl">Order Summary</p>
                <div className="mt-8 mb-[1.375rem] flex flex-col space-y-6">
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">Items Subtotal</p>
                    <p className="text-xl">{subTotalFormatted}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">Tax</p>
                    <p className="text-xl">{taxFormatted}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">Shipping Fee</p>
                    <p className="text-xl">Free</p>
                  </div>
                </div>
              </div>
              <hr className="bg-[rgba(79,79,79,0.26)] h-[1px]" />
              <div className="pt-3.5 px-6">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-[2rem] leading-[3.12625rem] font-medium">
                    Total
                  </p>
                  <p className="text-[2rem] leading-[3.12625rem] font-medium">
                    {totalPriceFormatted}
                  </p>
                </div>
                <div className="mt-[2.375rem] flex flex-col items-center space-y-4">
                  <PrimaryButton
                    onClick={onPlaceOrder}
                    disabled={totalItems === 0}
                    className="disabled:cursor-not-allowed disabled:bg-grey"
                  >
                    Place Order
                  </PrimaryButton>
                  <div className="flex flex-row items-center space-x-3.5">
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label htmlFor="agreement" className="md:text-base text-sm">
                      I agree to the{" "}
                      <Link href="" className="text-primary-orange text-base">
                        Term of service
                      </Link>{" "}
                      and{" "}
                      <Link href="" className="text-primary-orange text-base">
                        privacy policy
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[12.75rem]">
        <Footer />
      </div>
    </section>
  );
};

export default page;
