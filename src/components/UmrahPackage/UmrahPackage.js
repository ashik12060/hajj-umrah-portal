import React from "react";
import "./UmrahPackage.css";
import umrah1 from "../../images/umrah.jpeg";
import umrah2 from "../../images/umrah.jpg";
import umrah3 from "../../images/umrah2.jpeg";
import umrah4 from "../../images/umrah3.jpeg";
import { Link } from "react-router-dom";

const UmrahPackage = () => {
  return (
    <>
    
    <div className="container mx-auto p-2">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={umrah1}
              alt="Umrah Package Image"
              className="w-full border  h-52 rounded-t-lg"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
             রেগুলার ওমরাহ প্যাকেজ এ
              </h3>
              <p className="text-gray-600 text-sm my-4">
              আমাদের নিয়মিত ওমরাহ প্যাকেজ সহ একটি আধ্যাত্মিক যাত্রা শুরু করুন, যার মধ্যে রয়েছে 35-40 দিনের ব্যাপক পরিষেবা। একটি পরিপূর্ণ তীর্থযাত্রার অভিজ্ঞতার জন্য 600,000 টাকা থেকে শুরু করে ইকোনমি থেকে স্ট্যান্ডার্ড হোটেল পর্যন্ত থাকার ব্যবস্থা উপভোগ করুন।
              </p>
              <Link
                to='/contact'
                className="bg-green-800 hover:bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                কোয়েরি পাঠান →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={umrah2}
              alt="Umrah Package Image"
              className="w-full border  h-52 rounded-t-lg"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
              রেগুলার ওমরাহ প্যাকেজ বি 
              </h3>
              <p className="text-gray-600 text-sm my-4">
              আমাদের নিয়মিত ওমরাহ প্যাকেজ সহ একটি আধ্যাত্মিক যাত্রা শুরু করুন, যার মধ্যে রয়েছে 35-40 দিনের ব্যাপক পরিষেবা। একটি পরিপূর্ণ তীর্থযাত্রার অভিজ্ঞতার জন্য 600,000 টাকা থেকে শুরু করে ইকোনমি থেকে স্ট্যান্ডার্ড হোটেল পর্যন্ত থাকার ব্যবস্থা উপভোগ করুন।
              </p>
              <Link
                to='/contact'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                কোয়েরি পাঠান →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={umrah3}
              alt="Umrah Package Image"
              className="w-full border  h-52 rounded-t-lg"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
              রেগুলার ওমরাহ প্যাকেজ সি 
              </h3>
              <p className="text-gray-600 text-sm my-4">
              আমাদের নিয়মিত ওমরাহ প্যাকেজ সহ একটি আধ্যাত্মিক যাত্রা শুরু করুন, যার মধ্যে রয়েছে 35-40 দিনের ব্যাপক পরিষেবা। একটি পরিপূর্ণ তীর্থযাত্রার অভিজ্ঞতার জন্য 600,000 টাকা থেকে শুরু করে ইকোনমি থেকে স্ট্যান্ডার্ড হোটেল পর্যন্ত থাকার ব্যবস্থা উপভোগ করুন।
              </p>
              <Link
                to='/contact'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                কোয়েরি পাঠান →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white rounded-lg border shadow-md flex flex-col h-full">
            <img
              src={umrah4}
              alt="Umrah Package Image"
              className="w-full border  h-52 rounded-t-lg"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
              রেগুলার ওমরাহ প্যাকেজ ডি 
              </h3>
              <p className="text-gray-600 text-sm my-4">
              আমাদের নিয়মিত ওমরাহ প্যাকেজ সহ একটি আধ্যাত্মিক যাত্রা শুরু করুন, যার মধ্যে রয়েছে 35-40 দিনের ব্যাপক পরিষেবা। একটি পরিপূর্ণ তীর্থযাত্রার অভিজ্ঞতার জন্য 600,000 টাকা থেকে শুরু করে ইকোনমি থেকে স্ট্যান্ডার্ড হোটেল পর্যন্ত থাকার ব্যবস্থা উপভোগ করুন।
              </p>
              <Link
                to='/contact'
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
                কোয়েরি পাঠান →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default UmrahPackage;
