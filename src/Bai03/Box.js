export default function Box(props) {
  return (
    <div
      style={{
        height: 200,
        width: 200,
        backgroundColor: props.color,
        margin: 10,
      }}
    ></div>
  );
}
