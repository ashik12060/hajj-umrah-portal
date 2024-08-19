import React from "react";
import "./Packages.css";
import hajj1 from "../../images/hajj1.jpeg";
import hajj2 from "../../images/hajj2.jp3.jpg";
import hajj3 from "../../images/hajj2.jpg";
import hajj4 from "../../images/hajj.jpg";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white border rounded-lg shadow-md flex flex-col h-full">
            <img
              src={hajj1}
              alt="Hajj Package Image"
              className="w-full h-52 rounded-t-lg border"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                রেগুলার হজ্জ প্যাকেজ এ
              </h3>
              <p className="text-gray-600 text-sm my-4">
                আমাদের নিয়মিত হজ প্যাকেজের মাধ্যমে আধ্যাত্মিক যাত্রা অন্বেষণ
                করুন, 35-40 দিনের ব্যাপক পরিষেবা প্রদান করে, সহ ইকোনমি থেকে
                স্ট্যান্ডার্ড হোটেলে থাকার জন্য 600,000 টাকা থেকে শুরু হয়
                পরিপূর্ণ তীর্থযাত্রা।
              </p>
              <Link
                to="/contact"
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
              src={hajj2}
              alt="Hajj Package Image"
              className="w-full h-52 rounded-t-lg border"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                রেগুলার হজ্জ প্যাকেজ বি
              </h3>
              <p className="text-gray-600 text-sm my-4">
                আমাদের নিয়মিত হজ প্যাকেজের সাথে একটি আধ্যাত্মিক যাত্রা শুরু
                করুন, যেখানে 35-40 দিনের সব-সমেত পরিষেবা রয়েছে। অর্থপূর্ণ
                তীর্থযাত্রার জন্য মূল্য 600,000 টাকা থেকে শুরু করে ইকোনমি থেকে
                স্ট্যান্ডার্ড হোটেল পর্যন্ত থাকার ব্যবস্থা উপভোগ করুন।
              </p>
              <Link
                to="/contact"
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
               কোয়েরি পাঠান →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white border rounded-lg shadow-md flex flex-col h-full">
            <img
              src={hajj3}
              alt="Hajj Package Image"
              className="w-full h-52 rounded-t-lg border"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
              রেগুলার হজ্জ প্যাকেজ সি 
              </h3>
              <p className="text-gray-600 text-sm my-4">
              আমাদের নিয়মিত হজ প্যাকেজের সাথে একটি আধ্যাত্মিক যাত্রা শুরু
                করুন, যেখানে 35-40 দিনের সব-সমেত পরিষেবা রয়েছে। অর্থপূর্ণ
                তীর্থযাত্রার জন্য মূল্য 600,000 টাকা থেকে শুরু করে ইকোনমি থেকে
                স্ট্যান্ডার্ড হোটেল পর্যন্ত থাকার ব্যবস্থা উপভোগ করুন।
              </p>
              <Link
                to="/contact"
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
               কোয়েরি পাঠান →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="bg-white border rounded-lg shadow-md flex flex-col h-full">
            <img
              src={hajj4}
              alt="Hajj Package Image"
              className="w-full h-52 rounded-t-lg border"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
              রেগুলার হজ্জ প্যাকেজ ডি 
              </h3>
              <p className="text-gray-600 text-sm my-4">
              আমাদের নিয়মিত হজ প্যাকেজের সাথে একটি আধ্যাত্মিক যাত্রা শুরু
                করুন, যেখানে 35-40 দিনের সব-সমেত পরিষেবা রয়েছে। অর্থপূর্ণ
                তীর্থযাত্রার জন্য মূল্য 600,000 টাকা থেকে শুরু করে ইকোনমি থেকে
                স্ট্যান্ডার্ড হোটেল পর্যন্ত থাকার ব্যবস্থা উপভোগ করুন।
              </p>
              <Link
                to="/contact"
                className="bg-green-800 text-white font-bold py-2 my-6 px-4 rounded mt-auto"
              >
               কোয়েরি পাঠান →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
