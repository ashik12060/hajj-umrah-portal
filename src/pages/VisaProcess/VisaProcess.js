import React from "react";
import "./VisaProcess.css"; 
import coverImage from "../../images//airCarousel.jpg"; 
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const VisaProcess = () => {
  const requirements = [
    "আসল পাসপোর্ট",
    "স্মার্ট কার্ড/এনআইডি কার্ড",
    "বর্তমান এবং পূর্ববর্তী পাসপোর্ট",
    "দুটি ছবি",
    "অনলাইন জমা দেওয়া ফর্ম DS-160 এর নিশ্চিতকরণ পৃষ্ঠা",
    "ভিসা ফি",
    "মূল সাক্ষাৎকারের নিয়োগপত্র এবং একটি কপি",
  ];

  return (
    <div>
      <Header />
      <div className="pt-20 ">
      <div className="cover-photo-container">
        <img src={coverImage} alt="Cover" className="cover-image" />
        <div className="cover-text">
          <h1  className='text-4xl'>ভিসা প্রোসেসিং </h1>
          <p  className='text-2xl'> প্রিমিয়াম ও স্ট্যান্ডার্ড ওমরাহ প্যাকেজ
          </p>
        </div>
      </div>
      </div>

      <h1 className="text-2xl font-buld mb-4 text-culor-custom container   mx-auto p-4">
      পররাষ্ট্র মন্ত্রণালয়ের (MoFA) মাধ্যমে অনায়াসে বাংলাদেশ থেকে সৌদি আরবের ভিসা নিশ্চিত করুন।

      </h1>
      <p className="text-xl container mx-auto  p-4">
      হজ এবং ওমরাহ তীর্থযাত্রার জন্য আমাদের প্রধান লক্ষ্য হল সাশ্রয়ী মূল্যের প্যাকেজের মাধ্যমে আমাদের গ্রাহকদের বাজেটের মধ্যে একটি আধ্যাত্মিক, মানসিক এবং শারীরিকভাবে সমৃদ্ধ অভিজ্ঞতা প্রদান করা। আমরা ভিসা প্রসেসিং, ভ্রমণের ব্যবস্থা, বাসস্থান এবং হোটেল বুকিংয়ের মতো পরিষেবাগুলিতে সেরা মূল্য প্রদান করি। আমাদের দেশের অনেক তীর্থযাত্রী প্রায়শই পদ্ধতিগত সমস্যার কারণে তাদের পছন্দের হজ এবং ওমরার সময় মিস করেন। যাইহোক, The Huly Hajj & Travel Agency এর সাথে, আপনি নিশ্চিন্ত থাকতে পারেন। আমরা সর্বশেষ প্রবিধান অনুযায়ী ঝামেলা-মুক্ত ভিসা পেতে অভিজ্ঞ, যার জন্য আপনার সৌদি বাসস্থান এবং পরিবহন ব্যবস্থা নিশ্চিত হওয়ার পরেই একটি ভিসা জারি করা প্রয়োজন। সৌদি আরবের হজ ও ওমরাহ মন্ত্রণালয়ের সাথে আমাদের অধিভুক্তি একটি মসৃণ এবং দক্ষ প্রক্রিয়ার নিশ্চয়তা দেয়।

      </p>

    
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-buld mb-4 text-culor-custom">ভিসার প্রয়োজনীয়তা
        </h2>
        <ul className="list-disc pl-6 text-xl">
          {requirements.map((requirement, index) => (
            <li key={index} className="mb-2">
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto p-4">
      <h2 className="text-2xl font-buld mb-4 text-culor-custom">কিভাবে আপনার MoFA ভিসা পাবেন
      </h2>

      <ol className="list-disc pl-6 text-xl  ">
        <li className="mb-4">
        অনলাইনে আবেদন করে বা মক্কা ও মদিনায় আপনার ফ্লাইট, পরিবহন এবং বাসস্থান বুকিং দিয়ে শুরু করুন। নিশ্চিত করুন যে প্রস্থানের আগে পেমেন্ট সম্পূর্ণ হয়েছে।

        </li>
        <li className="mb-4">
        আমাদের এজেন্ট আপনার বিশদ বিবরণ, অর্থপ্রদানের প্রমাণ এবং সফরসূচী যাচাইয়ের জন্য সৌদি দূতাবাসে জমা দেবে।

        </li>
        <li className="mb-4">
        একবার সন্তুষ্ট হলে, সৌদি দূতাবাস সাধারণত 2 মাসের মধ্যে ভিসা জারি করে।
        </li>
        <li className="mb-4">
        নিরাপদ যাত্রা নিশ্চিত করতে আপনি মক্কা ও মদিনায় আমাদের এজেন্টদের যোগাযোগের বিশদ বিবরণ পাবেন।

        </li>
      </ol>

      <p className="mb-4 text-xl">
      প্যাকেজের বিশদ বিবরণের জন্য, কেবল আমাদের একটি বার্তা পাঠান, এবং আমরা অবিলম্বে প্রতিক্রিয়া জানাব, ইন শা আল্লাহ।
      </p>

      <p className="mb-4 text-xl ">
      অনুগ্রহ করে মনে রাখবেন যে (*) দ্বারা চিহ্নিত ক্ষেত্রগুলি বাধ্যতামূলক৷ যদি পরিবারের সাথে ভ্রমণ করেন তবে আপনাকে অবশ্যই সৌদি সাম্রাজ্যের সাথে প্রবেশ করতে হবে এবং ছেড়ে যেতে হবে৷  আরও তথ্য বা সহায়তার জন্য, ফোন বা ইমেলের মাধ্যমে আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।

      </p>

     

      <p className="mb-4 ">
        <i>আমরা এই বছর আপনাকে একটি ব্যতিক্রমী হজের অভিজ্ঞতা দিতে প্রতিশ্রুতিবদ্ধ। সেরা হজ গ্রুপে যোগ দিতে আজই আমাদের সাথে যোগাযোগ করুন।
        </i>
      </p>

      <h2 className="text-2xl font-buld mb-4 text-culor-custom">আপনার MoFA ভিসার স্থিতি পরীক্ষা করা হচ্ছে
      </h2>

      <p className="mb-4 text-xl ">
      যদি আপনার প্রাথমিক জমা থেকে স্থিতি অপরিবর্তিত থাকে, অনুগ্রহ করে পরে আবার চেক করুন। আপনি যদি লাল রঙে একটি বার্তা দেখতে পান, তাহলে "পরিবার ভিসা ভিসার স্থিতির অর্থ" পড়ুন। MoFA দ্বারা জারি করা ভিসা সম্পর্কে অনুসন্ধান করতে, ওয়েবসাইটে ভিসা নম্বর, ইকামা নম্বর এবং ক্যাপচা কোড লিখুন।

      </p>
    </div>
    <div className="text-center mb-10">
    <Link to='/contact' className="bg-green-800 hover:bg-green-800 text-white font-buld py-4 my-6 px-4 rounded mt-auto">সাহায্য প্রয়োজন
    <FontAwesomeIcon icon={faCircleQuestion} /></Link>
    
    </div>
    

<Footer />
    </div>
  );
};

export default VisaProcess;
