import "./Clock.css";
export default function Clock({ time }) {
  const formattedTime = time.toLocaleTimeString();
  return (
    <div>
      <h2 className="clock">{formattedTime}</h2>
    </div>
  );
}
