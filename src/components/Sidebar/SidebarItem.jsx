import { Link } from "react-router-dom";

function SidebarItem(props) {
  return (
    <>
      <li className="w-full">
        <Link
          to={props.link}
          className="relative flex items-center overflow-hidden rounded-xl py-1 pl-4 leading-10 duration-200 hover:bg-[#f8f8f8] hover:text-black 2xl:py-4 2xl:pl-8"
        >
          <i class={`${props.icon} pr-8 text-3xl 2xl:pr-8 2xl:text-4xl`}></i>
          <span className="font-semibold uppercase text-xl">{props.title}</span>
        </Link>
      </li>
    </>
  );
}

export default SidebarItem;
