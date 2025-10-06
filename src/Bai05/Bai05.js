import { useState, useEffect } from "react";
import Clock from "./Clock";
export default function Bai05({ children }) {
  const [showtime, setShowTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      style={{
        marginLeft: 20,
      }}
    >
      {children}

      <Clock time={showtime}></Clock>
    </div>
  );
}
