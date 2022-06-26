import React, { FC } from "react";
import Check from "components/check";
import DeleteButton from "components/delete-button";
import { ITodoItem } from "types/index";

interface IListItemProps {
  todoItem: ITodoItem;
  onStatusChange: (status: boolean) => void;
  onDelete: (id: number) => void;
}

const ListItem: FC<IListItemProps> = ({
  todoItem,
  onStatusChange,
  onDelete,
}) => {
  return (
    <li>
      <Check
        checked={todoItem.status}
        text={todoItem.text}
        onChange={onStatusChange}
      />

      <DeleteButton
        onClick={() => {
          onDelete(todoItem.id);
        }}
      />
    </li>
  );
};
export default ListItem;
