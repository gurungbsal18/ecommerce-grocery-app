// import React from "react";

// const SalesCountDown = () => {
//   const countdown = new Date("April 9, 2024 15:37:25").getTime();

//   const timerDate = (setIntervalfuntion = () => {
//     const recentDate = new Date().getTime();
//     const distance = countdown - recentDate;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const second = Math.floor((distance % (1000 * 60)) / 1000);
//   });

//   return (
//     <div>
//       <p>Sales Count Down</p>
//     </div>
//   );
// };

// export default SalesCountDown;

"use client";

import React, { useState, useEffect } from "react";

const SalesCountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date("August 9, 2024 15:37:25") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <p className="badge bg-danger">Sales Ends On</p>
      <p className="text-danger">
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
        {timeLeft.seconds} seconds
      </p>
    </div>
  );
};

export default SalesCountDown;
