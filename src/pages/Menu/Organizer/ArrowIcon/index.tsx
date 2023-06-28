import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const ArrowIcon: React.FC<{ isOpened: boolean }> = ({ isOpened }) => {
  const size = 20;

  return (
    <>
      {isOpened ? (
        <MdKeyboardArrowUp size={size} />
      ) : (
        <MdKeyboardArrowDown size={size} />
      )}
    </>
  );
};

export default ArrowIcon;
