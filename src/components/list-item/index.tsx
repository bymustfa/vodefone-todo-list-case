import React, { FC } from "react";
import Check from "components/check";
import { ITodoItem } from "types/index";

interface IListItemProps {
  item: ITodoItem;
  onStatusChange: (id: number, status: boolean) => void;
  onDelete: (id: number) => void;
}

const ListItem: FC<IListItemProps> = ({ item, onStatusChange, onDelete }) => {
  console.log("ListItem", item);
  return (
    <li>
      <Check
        checked={item.status}
        text={item.text}
        onChange={(checkStatus: boolean) => {
          onStatusChange(item.id, checkStatus);
        }}
      />

      <button>Delete</button>
    </li>
  );
};
export default ListItem;
