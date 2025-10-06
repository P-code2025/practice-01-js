// export default function StudentCard(props) {
//   return (
//     <div>
//       <h3>{props.student.name}</h3>
//     </div>
//   );
// }

import { useState } from "react";
import "./StudentCard.css";
export default function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    /*prettier-ignore*/
    <div className="data-card">
      <h3>{student.name}</h3>
      {showDetails && (
        <div>
          <p>Tuổi: {student.age} - Lớp: {student.class}</p>
        </div>
      )}
      <button onClick={()=> {setShowDetails(!showDetails)}}>{showDetails ? "An chi tiet":"Hien chi tiet"}</button>
    </div>
  );
}
