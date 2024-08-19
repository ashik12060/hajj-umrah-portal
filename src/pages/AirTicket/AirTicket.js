import React from "react";
import "./AirTicket.css";
import coverImage from "../../images/airCarousel.jpg";
import AirTicketBuy from "../../images/ait ticket buy.jpg";

import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import { Link } from "react-router-dom";
import ContacatInfo from "../../components/ContactPage/ContacatInfo";
const AirTicket = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <div className="cover-photo-container ">
          <img src={coverImage} alt="Cover" className="cover-image" />
          <div className="cover-text">
            <h1 className="text-4xl">এয়ার টিকেট</h1>
            <p className="text-2xl">
              বাংলাদেশ থেকে এক্সক্লুসিভ এবং নিয়মিত এয়ার টিকেট প্যাকেজ
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-10 lg:p-20 ">
            <h1 className="text-3xl font-bold mb-4 text-color-custom container mx-auto p-4">
              সাশ্রয়ী মূল্যের এয়ার টিকেট বুকিং
            </h1>
            <p className="container mx-auto ps-4 text-justify mb-6">
              বাংলাদেশ থেকে তীর্থযাত্রীদের জন্য বাজেট-বান্ধব হজ এবং ওমরাহ বিমান
              টিকিট খুঁজছেন? নূর হজ বিডি, ঢাকায় অবস্থিত একটি পুরস্কার বিজয়ী
              সংস্থা, আপনার পছন্দের। আমরা বিভিন্ন বাজেট এবং পছন্দের সাথে মানানসই
              প্যাকেজের একটি পরিসীমা অফার করি। একটি তীর্থযাত্রা একটি অনন্য এবং
              জীবনে একবারের যাত্রা, আমরা এটিকে সকলের কাছে অ্যাক্সেসযোগ্য করার
              চেষ্টা করি। আমাদের ডেডিকেটেড টিম মক্কা এবং মদিনা ভ্রমণের জন্য
              সবচেয়ে সাশ্রয়ী মূল্যের বিমান টিকিট অফার করে সেরা ভ্রমণ অভিজ্ঞতার
              গ্যারান্টি দেয়।
            </p>
            <Link className="background-color ms-3 hover:bg-white border hover:border hover:border-green-800 hover:text-green-800 text-white font-bold py-4 px-5 rounded-full text-center mt-4">
            মূল্য অনুমান

            </Link>
          </div>

          <div className="w-full lg:w-1/2 lg:p-20 p-10">
            <img className="w-full rounded" src={AirTicketBuy} alt="Contact" />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-color-custom container mx-auto p-4">
        বাংলাদেশ থেকে এয়ার টিকেট কেনার জন্য আপনার প্রয়োজনীয় গাইড
      </h2>
      <p className="text-xl container mx-auto p-4 text-justify">
        হজ এবং ওমরাহ তীর্থযাত্রার জন্য আমাদের মূল উদ্দেশ্য হল সাশ্রয়ী মূল্যের
        প্যাকেজের মাধ্যমে আমাদের গ্রাহকদের বাজেটের মধ্যে আধ্যাত্মিক, মানসিক এবং
        শারীরিকভাবে পরিপূর্ণ অভিজ্ঞতা প্রদান করা। আমরা সর্বনিম্ন হারে ভিসা
        প্রক্রিয়াকরণ, ভ্রমণের ব্যবস্থা, বাসস্থান এবং হোটেল বুকিংয়ের মতো
        পরিষেবাগুলিতে ব্যতিক্রমী মূল্য প্রদান করি। আমাদের দেশের অনেক তীর্থযাত্রী
        প্রায়শই পদ্ধতিগত সমস্যার কারণে তাদের পছন্দের হজ এবং ওমরার সময় মিস
        করেন। যাইহোক, আপনি ভিসার আবেদনগুলি পরিচালনা করতে এবং সর্বশেষ প্রবিধান
        অনুযায়ী ঝামেলা-মুক্ত অনুমোদনের জন্য পবিত্র হজ ও ট্রাভেল এজেন্সির উপর
        নির্ভর করতে পারেন। এই প্রবিধানগুলির প্রয়োজন যে আপনার সৌদি বাসস্থান এবং
        পরিবহন নিশ্চিত হওয়ার পরেই একটি ভিসা দেওয়া হবে। আমরা সৌদি আরবের হজ ও
        ওমরাহ মন্ত্রণালয়ের সাথে সংযুক্ত, একটি মসৃণ এবং দক্ষ প্রক্রিয়া নিশ্চিত
        করছি।
      </p>

      <p className="text-xl container mx-auto p-4 text-justify">
        আমাদের বিশেষজ্ঞ নির্দেশিকা সহ বাংলাদেশ থেকে আপনার বিমানের টিকিট বুক করার
        সবচেয়ে সহজ এবং কার্যকর উপায় খুঁজুন। Hena Travels and Tours-এ, আমরা
        সেরা বিমান ভাড়ার ডিল এবং আপনার পছন্দ এবং বাজেটের সাথে উপযোগী ফ্লাইট
        বিকল্পগুলির একটি বিস্তৃত নির্বাচন প্রদানে বিশেষজ্ঞ। আপনি ব্যবসায়িক
        ভ্রমণ, পারিবারিক অবকাশ বা একক যাত্রার পরিকল্পনা করুন না কেন, আমরা
        বাংলাদেশ থেকে বিশ্বের বিভিন্ন গন্তব্যে নির্বিঘ্ন বুকিং অভিজ্ঞতার
        নিশ্চয়তা দিচ্ছি।
      </p>

      <h2 className="text-2xl font-bold mb-4 text-color-custom container mx-auto p-4">
        কেন বাংলাদেশ থেকে আপনার এয়ার টিকিটের জন্য আমাদের বেছে নিবেন?
      </h2>

      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
        বিস্তৃত এয়ারলাইন নির্বাচন:
      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
        বিভিন্ন এয়ারলাইন্সের সাথে আমাদের সহযোগিতার ফলে আমরা বিশ্বের বিভিন্ন
        গন্তব্যে বাংলাদেশকে সংযুক্ত করে বিস্তৃত ফ্লাইট সরবরাহ করতে সক্ষম হয়েছি।
        আপনি বিলাসবহুল ক্যারিয়ার বা বাজেট-বান্ধব বিকল্প খুঁজছেন কিনা, আমরা
        আপনাকে আপনার ভ্রমণের জন্য নিখুঁত ফ্লাইট খুঁজে পেতে সাহায্য করতে পারি।
      </p>

      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
        প্রতিযোগিতামূলক মূল্য:
      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
        আমাদের বিস্তৃত নেটওয়ার্কের জন্য ধন্যবাদ, আমরা বাংলাদেশ থেকে সমস্ত বিমান
        টিকিটের প্রতিযোগিতামূলক মূল্য অফার করি। গুণমান বা সুবিধার সাথে আপস না
        করে সেরা ডিল এবং একচেটিয়া ডিসকাউন্টের সুবিধা নিন।
      </p>

      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
        ব্যক্তিগতকৃত ভ্রমণ সমাধান:
      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
        আমরা বুঝতে পারি যে প্রতিটি ভ্রমণকারীর অনন্য চাহিদা রয়েছে। আমাদের দল
        কঠোর পরিশ্রম করে আপনার ফ্লাইটের পছন্দগুলি নিশ্চিত করে উপযোগী ভ্রমণ
        সমাধান অফার করতে, বসার ব্যবস্থা, এবং বিশেষ অনুরোধ পুঙ্খানুপুঙ্খভাবে
        মিটমাট করা হয়.
      </p>

      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
      সহজ বুকিং অভিজ্ঞতা:

      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
      আমাদের ব্যবহারকারী-বান্ধব ওয়েবসাইট এবং নিবেদিত গ্রাহক পরিষেবা দলের সাথে,
        বাংলাদেশ থেকে আপনার বিমান টিকিট বুক করা একটি হাওয়া। ভোগ a
        নিরাপদ অর্থপ্রদান বিকল্প এবং অবিলম্বে ঝামেলামুক্ত অভিজ্ঞতা
        নিশ্চিতকরণ
      </p>
      <h4 className="text-xl font-bold  text-color-custom container mx-auto p-4">
      ব্যাপক ভ্রমণ পরিষেবা:

      </h4>
      <p className="text-xl container mx-auto p-4 text-justify">
      এয়ার টিকিট ছাড়াও, আমরা ভ্রমণ পরিষেবাগুলির একটি সম্পূর্ণ পরিসর অফার করি,
        হজ এবং ওমরাহ প্যাকেজ, ট্যুর প্যাকেজ এবং ভিসা সহায়তা সহ।
        আমাদের আপনার সর্বত্র ভ্রমণ সঙ্গী হতে দিন.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-color-custom container mx-auto p-4">
      বাংলাদেশ থেকে আপনার বিমান ভ্রমণের অভিজ্ঞতা বৃদ্ধি করা      </h2>

      <p className="text-xl container mx-auto p-4 text-justify">
      বাংলাদেশ থেকে সেরা ভ্রমণ অভিজ্ঞতার জন্য, সর্বনিম্ন ভাড়া লক করতে অগ্রিম বুক করুন। আমাদের ওয়েবসাইট চেক করে বর্তমান প্রচার এবং শেষ মুহূর্তের অফার সম্পর্কে আপডেট থাকুন। আরও বেশি সুবিধার জন্য, সরাসরি আপনার ইনবক্সে আপডেট পেতে আমাদের নিউজলেটারে সদস্যতা নিন।

        <br />
        বাংলাদেশ থেকে এয়ার টিকিটের জন্য আপনার বিশ্বস্ত অংশীদার হেনা ট্রাভেলস অ্যান্ড ট্যুরসের মাধ্যমে আত্মবিশ্বাস ও স্বাচ্ছন্দ্যের সাথে আপনার পরবর্তী যাত্রা শুরু করুন। আপনার বিকল্পগুলি অন্বেষণ করতে এবং আজই আপনার ভ্রমণের পরিকল্পনা শুরু করতে আমাদের টিকিট বিশেষজ্ঞদের সাথে যোগাযোগ করুন। নিরাপদ ভ্রমণ, এবং আমরা শীঘ্রই আপনাকে বোর্ডে স্বাগত জানাতে উন্মুখ!

      </p>

      <ContacatInfo />
      <Footer />
    </div>
  );
};

export default AirTicket;
