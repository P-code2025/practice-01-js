import logo from "./logo.svg";
import "./App.css";
import Demso from "./Bai01/Demso";
import WorkList from "./Bai02/WorkList";
import ColorChange from "./Bai03/ColorChange";
import Bai04 from "./Bai04/Bai04";
import Bai05 from "./Bai05/Bai05";
function App() {
  return (
    <div>
      <Demso>
        <h2>Bài 1: Ứng dụng Đếm số:</h2> Tạo 1 component hiển thị số (state). Có
        2 nút: + để tăng số, - để giảm số. Số hiện tại được truyền xuống 1
        component con qua props để hiển thị.
      </Demso>

      <WorkList>
        <h2>Bài 2: Danh sách công việc:</h2> Nhập công việc vào ô input và bấm
        nút "Thêm". Danh sách công việc hiển thị bên dưới. Mỗi công việc là một
        component con nhận dữ liệu từ props.
      </WorkList>

      <ColorChange>
        <h2>Bài 3: Ứng dụng đổi màu nền: </h2>Có danh sách màu (red, green,
        blue, yellow). Khi bấm nút đổi màu đổi màu nền của box. Box là component
        con, nhận màu từ props.
      </ColorChange>

      <Bai04>
        <h2>Bài 4: Thẻ thông tin sinh viên:</h2> Có component StudentCard nhận
        dữ liệu qua props: tên, tuổi, lớp. Hiển thị nhiều thẻ sinh viên từ một
        mảng dữ liệu (map). Có thể ẩn/hiện chi tiết của sinh viên khi bấm nút.
      </Bai04>

      <Bai05>
        <h2>Bài 5: Đồng hồ:</h2>Tạo component hiển thị giờ hiện tại. Cập nhật
        mỗi giây (dùng setInterval). Tách phần hiển thị thời gian thành
        component con.
      </Bai05>
    </div>
  );
}

export default App;
