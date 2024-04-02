"use client";
import Countdown from "react-countdown";

function CountdownTimer() {
  return (
    <Countdown
      date={Date.now() + 500000000}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <div>Complete</div>;
        } else {
          // Render a countdown
          return (
            <>
              <div className="list-none flex items-center md:gap-5 gap-2">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Days</span>
                  <span className="text-xl md:text-3xl font-bold">
                    {!days
                      ? "00"
                      : days.toString().length < 2
                      ? "0" + days
                      : days}
                  </span>
                </div>
                <span className="text-[#db4444] font-bold text-2xl">:</span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Hours</span>
                  <span className="text-xl md:text-3xl font-bold">
                    {!hours
                      ? "00"
                      : hours.toString().length < 2
                      ? "0" + hours
                      : hours}
                  </span>
                </div>
                <span className="text-[#db4444] font-bold text-2xl">:</span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Minutes</span>
                  <span className="text-xl md:text-3xl font-bold">
                    {!minutes
                      ? "00"
                      : minutes.toString().length < 2
                      ? "0" + minutes
                      : minutes}
                  </span>
                </div>
                <span className="text-[#db4444] font-bold text-2xl">:</span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Seconds</span>
                  <span className="text-xl md:text-3xl font-bold">
                    {!seconds
                      ? "00"
                      : seconds.toString().length < 2
                      ? "0" + seconds
                      : seconds}
                  </span>
                </div>
              </div>
            </>
          );
        }
      }}
    />
  );
}

export default CountdownTimer;
