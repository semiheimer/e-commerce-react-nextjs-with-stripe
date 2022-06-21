import { BsChevronLeft } from "react-icons/bs";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div>
      <BsChevronLeft
        className={className}
        onClick={onClick}
        style={{
          color: "gray",
          zIndex: "1",
          background: "transparent",
          width: "23px",
          height: "23px",
          display: "block",
          boxShadow: "1px 2px 10px -1px rgb(0 0 0 / 30%)",
          opacity: "1",
          borderRadius: "15px",
          position:"absolute",
          left: "-1%",
        }}
      />
    </div>
  );
};
export default PrevArrow;
