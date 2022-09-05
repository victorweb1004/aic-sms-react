import ShortcutItem from "../Shortcut/ShortcutItem";
import ContentTitle from "../../ContentTitle";

function Shortcut() {
  return (
    <>
      <div className="m-8 mt-0 rounded-2xl bg-white p-4 shadow">
        <ContentTitle desc="Phím tắt" />
        <div className="mb-2 grid w-full grid-cols-4 grid-rows-3 gap-x-8 gap-y-4 text-white">
          <ShortcutItem name="Thêm học viên" link="/student/add" icon="bx bx-user-plus" />
          <ShortcutItem name="Xóa học viên" link="/student/remove" icon="bx bx-user-x" />
          <ShortcutItem name="Chỉnh sửa" link="/" icon="bx bxs-user-detail" />
          <ShortcutItem name="Học phí" link="/" icon="bx bx-credit-card" />
          <ShortcutItem name="Xem danh sách" link="/" icon="bx bx-list-ul" />
          <ShortcutItem name="In danh sách" link="/" icon="bx bx-printer" />
          <ShortcutItem name="Truy vấn" link="/" icon="bx bx-search-alt-2" />
          <ShortcutItem name="Gửi mail" link="/" icon="bx bx-envelope" />
          <ShortcutItem name="Xuất lịch học" link="/" icon="bx bx-table" />
          <ShortcutItem
            name="Gửi thông báo"
            link="/"
            icon="bx bx-message-alt-detail"
          />
          <ShortcutItem name="Doanh thu" link="/" icon="bx bx-money" />
          <ShortcutItem name="Đang phát triển" link="/" icon="" />
        </div>
      </div>
    </>
  );
}

export default Shortcut;
