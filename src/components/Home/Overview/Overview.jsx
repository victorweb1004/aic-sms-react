import ContentTitle from "../../ContentTitle";
import OverviewItem from "../Overview/OverviewItem";


function Overview() {
  
  return (
    <>
      <div className="m-8 flex flex-col rounded-2xl bg-white p-4 shadow">
        <ContentTitle desc="Thống kê" />
        <div className="relative grid w-full grid-cols-4 grid-rows-none gap-8">
          {/* <div className="flex flex-col rounded-2xl bg-pink-300 p-4 font-semibold text-white">
            <span className="self-center text-3xl">12345</span>
            <div className="flex flex-row items-center justify-evenly">
              <i class="bx bxs-color text-4xl"></i>
              <span className="">ddsadjsad</span>
            </div>
          </div> */}
          <OverviewItem
            link="/student"
            bgColor="bg-red-400"
            textColor="text-white"
            icon="fa-solid fa-user-graduate"
            number="7522"
            title="Học Viên"
            db="students"
          />
          <OverviewItem
            link="/teacher"
            bgColor="bg-orange-400"
            textColor="text-white"
            icon="fa-solid fa-chalkboard-user"
            number="104"
            title="Giảng Viên"
            db="teachers"
          />
          <OverviewItem
            link="/class"
            bgColor="bg-green-600"
            textColor="text-white"
            icon="fa-solid fa-users-between-lines"
            number="75"
            title="Lớp Học"
            db="courses"
          />
          <OverviewItem
            link="/parent"
            bgColor="bg-blue-400"
            textColor="text-white"
            icon="fa-solid fa-user-tie"
            number="2002"
            title="Phụ Huynh"
            db="parents"
          />
        </div>
      </div>
    </>
  );
}

export default Overview;
