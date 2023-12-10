import { useEffect, useState } from "react";

const MyLocalTime = () => {
  const [time, setTime] = useState(" ");
  useEffect(() => {
    const options = {
      timeZone: "Asia/Dhaka",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const updateTime = () => {
      const myLocalTime = new Date().toLocaleTimeString("en-US", options);
      setTime(myLocalTime);
    };

    updateTime();

    const interVal = setInterval(updateTime, 1000);

    return () => clearInterval(interVal);
  }, []);

  return time;
};

export default MyLocalTime;
