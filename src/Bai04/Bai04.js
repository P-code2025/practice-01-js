import StudentCard from "./StudentCard";

export default function Bai04(props) {
  const data = [
    { id: 1, name: "Nguyễn Văn A", age: 20, class: "K65" },
    { id: 2, name: "Trần Thị B", age: 21, class: "K64" },
    { id: 3, name: "Nguyễn Thị Ngọc Hà", age: 18, class: "K38" },
    { id: 4, name: "Nguyễn Thị Bích Ngọc", age: 18, class: "K38" },
  ];

  return (
    <div
      style={{
        marginLeft: 20,
      }}
    >
      {props.children}
      {data.map((student) => {
        return <StudentCard key={student.id} student={student} />;
      })}
    </div>
  );
}
