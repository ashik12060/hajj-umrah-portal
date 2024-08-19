

import React from "react";
import aboutImg from "../../images/umrah3.jpeg";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:p-32 p-4">
      <div className="bg-white p-6 rounded-lg lg:w-1/2 w-full mb-4 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">
         
        পুরস্কার বিজয়ী হজ এজেন্সি ঢাকা, বাংলাদেশ
        </h2>
        <p className="text-lg mb-4 text-justify">
        হেনা ট্রাভেলস অ্যান্ড ট্যুরস স্ট্যান্ডার্ড, রেগুলার এবং প্রিমিয়াম হজ ও ওমরাহ বিকল্প সহ বিভিন্ন ধরনের ওমরাহ প্যাকেজ অফার করে। একটি পুরস্কার বিজয়ী সংস্থা হিসাবে, আমরা পেশাদারিত্বের সাথে হজ ও ওমরাহ তীর্থযাত্রীদের সেবা করি, নিশ্চিত করে যে আমরা কুরআন ও সুন্নাহর নীতি অনুসারে প্রতিটি প্যাকেজের সাথে যুক্ত সমস্ত প্রতিশ্রুতি পূরণ করি। আমাদের নিবেদিত এবং সৎ ব্যবস্থাপনা দল আমাদের প্রতিশ্রুতি বজায় রাখে।
        </p>
        <p className="text-lg mb-4 text-justify">
        আমাদের পেশাদার বিশেষজ্ঞরা আপনাকে সবচেয়ে কম সময়ের মধ্যে আপনার ভিসা পেতে সাহায্য করবে। নূর হজ ও ওমরাহ মক্কার আশেপাশের হোটেলে সব ধরনের থাকার ব্যবস্থা করে।
        </p>
        <Link to='/about-us' className="bg-green-800 rounded-full px-14 py-4 text-white font-bold lg:mr-4 md:mr-2 mr-2 block lg:inline-block">
        আরও পড়ুন
        </Link>
      </div>
      <div className="lg:w-1/2 w-full">
        <img src={aboutImg} alt="Mecca" className="rounded-lg w-full h-auto shadow-lg" />
      </div>
    </div>
  );
};

export default AboutUsPage;
