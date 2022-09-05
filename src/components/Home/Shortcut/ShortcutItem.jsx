import { Link } from "react-router-dom";

function ShortcutItem (props) {
    return (
      <>
        <Link
          to={`${props.link}`}
          className="flex flex-row items-center justify-center rounded-2xl bg-lime-600 p-2 shadow duration-300 hover:scale-110"
        >
          <i className={`${props.icon} pr-2 text-4xl`}></i>
          <span className="">{props.name}</span>
        </Link>
      </>
    );
}

export default ShortcutItem;