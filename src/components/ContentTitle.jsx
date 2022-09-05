function ContentTitle(props) {
  return (
    <>
      <div
        id="ContentTitle"
        className="pb-4 text-xl font-semibold text-[#0e0e0e] 2xl:pb-4"
      >
          {props.desc}
      </div>
    </>
  );
}

export default ContentTitle;
