import React from 'react';

function WhyUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">কেন আমাদের থেকে সার্ভিস নিবেন</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-200 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13.022c0 1.216-.852 2.147-2.143 2.147H3.781c-1.291 0-2.147-.931-2.147-2.147V6.253c0-1.215.855-2.148 2.147-2.148h6.253zm10.158 0H20.219c1.291 0 2.147.932 2.147 2.148v13.023c0 1.216-.855 2.147-2.147 2.147H17.214c-1.292 0-2.148-.931-2.148-2.147V6.253c0-1.215.856-2.148 2.148-2.148z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">সুলভ মূল্য
          </h3>
          <p className="text-gray-700 text-base text-justify">
          গ্যারান্টিযুক্ত সেরা দাম। আমরা তাদের বাজেটের মধ্যে বাংলাদেশের প্রতিটি মুমিন মুসলমানকে হজ ও ওমরাহর সুযোগ দিতে প্রতিশ্রুতিবদ্ধ। আমরা আমাদের প্রতিশ্রুতি পূরণ করি এবং আল্লাহর মেহমানদের সেবা করাকে সম্মানের বিষয় মনে করি।
          </p>
        </div>
        <div className="bg-slate-200 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">ডিসকাউন্ট অফার
          </h3>
          <p className="text-gray-700 text-base text-justify">
          আমরা বছরের নির্দিষ্ট সময়ে ছাত্র, বয়স্ক, গোষ্ঠী এবং তরুণ দম্পতিদের জন্য ওমরাহ এবং অন্যান্য ভ্রমণপথে বিশেষ ডিল অফার করি, যাতে প্রত্যেকে তাদের বাজেটের মধ্যে সেরা হজ এবং ওমরাহ প্যাকেজ খুঁজে পেতে পারে।
          </p>
        </div>
        <div className="bg-slate-200 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l3 3m0 0l3-3m-3 3v-7.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">আস্থা ও নিরাপত্তা
          </h3>
          <p className="text-gray-700 text-base text-justify">
          বিপুল সংখ্যক সন্তুষ্ট গ্রাহক নিয়ে আমরা বাংলাদেশের শীর্ষ বিশ্বস্ত প্ল্যাটফর্ম। আমরা সম্ভাব্য সমস্যাগুলির জন্য ধারাবাহিকভাবে পর্যবেক্ষণ করি, সমস্ত সমস্যার সমাধান করি এবং প্রতিটি ক্লায়েন্টের জন্য একটি নির্বিঘ্ন তীর্থযাত্রার অভিজ্ঞতা নিশ্চিত করি।
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;