import React from 'react';

function WhyUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Why Us</h2>
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
          <h3 className="text-xl font-bold mb-2">Cheap Rates</h3>
          <p className="text-gray-700 text-base">
            Guaranteed best prices. We believe in providing the opportunity of Hajj &
            Umrah to every believing Muslim in the Bangladesh within their
            budget. We deliver what have been promised & take serving the guests
            of Allah as an honor.
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
          <h3 className="text-xl font-bold mb-2">Discount Offers</h3>
          <p className="text-gray-700 text-base">
            Special offers on Umrah & other itineraries for students, old-aged
            persons, groups, and young couples in specific times of the year so
            that everyone can get the best Hajj & Umrah deals according to
            their budget.
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
          <h3 className="text-xl font-bold mb-2">Trust & Safety</h3>
          <p className="text-gray-700 text-base">
            We are the #1 trusted platform across the Bangladesh, with a vast
            number of happy customers. We always keep a check on potential
            issues, solving all problems, and providing a flawless pilgrimage
            experience to every client.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;