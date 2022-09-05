import Logo from "../../img/logo.png";
import SidebarItem from "./SidebarItem";

const dev = {
  name: "victorwebdev",
  email: "2012394@dlu.edu.vn",
  socialMedia: "https://facebook.com/nqv.ilb/",
};

function Sidebar() {
  return (
    <>
    
      <div className="fixed left-0 top-0 bottom-0 h-full w-[240px] rounded-r-3xl bg-[#333333] text-[#FBFBFB] shadow-lg 2xl:w-[360px]">
        <div className="flex h-full w-full flex-col justify-between">
          <a
            href="/"
            className="flex w-full flex-col items-center justify-center ring-0"
          >
            <img
              src={Logo}
              alt=""
              className="object-cover px-8 pt-8 2xl:px-16 2xl:pt-16"
            />
            <span className="text-sm font-bold 2xl:text-lg ">
              DATABASE MANAGEMENT
            </span>
          </a>
          <div className="flex w-full justify-center">
            <ul id="navlist" className="w-full px-4 2xl:text-3xl">
              <SidebarItem link="/" icon="bx bxs-dashboard" title="tổng quan" />
              <SidebarItem
                link="/student"
                icon="bx bxs-face"
                title="học viên"
              />
              <SidebarItem
                link="/teacher"
                icon="fa-solid fa-chalkboard-user"
                title="giảng viên"
              />
              <SidebarItem
                link="/class"
                icon="bx bx-chalkboard"
                title="lớp học"
              />
              <SidebarItem
                link="/parent"
                icon="fa-solid fa-user-tie"
                title="phụ huynh"
              />
            </ul>
          </div>
          <span className="w-full pb-4 text-center font-mono text-xs 2xl:text-base">
            made by{" "}
            <a
              href={dev.socialMedia}
              className="duration-500 hover:text-lime-500"
            >
              victorwebdev
            </a>
            .
          </span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
