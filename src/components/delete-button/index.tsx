import React, { FC } from "react";
import "./style.scss";

interface IDeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: FC<IDeleteButtonProps> = ({ onClick }) => (
  <button className="delete-button" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-trash"
    >
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  </button>
);

export default DeleteButton;
