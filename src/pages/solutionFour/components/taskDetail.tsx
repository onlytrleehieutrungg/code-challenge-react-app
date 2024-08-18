import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  IconButton,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Task } from "../../../types/task";

type TaskBoxProps = {
  task?: Task;
  isNew?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange: (task: Task) => void;
  onDelete: (id: number) => void;
};

export default function TasKDetail({
  task = {
    id: 0,
    text: "",
    done: false,
  },
  isNew,
  onChange,
  onDelete,
  inputRef,
}: TaskBoxProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: Task) => () => {
    onChange({
      ...value,
      done: !value.done,
    });
  };

  const handleEdit = (value: Task) => {
    setIsEditing(isEditing ? false : true);
  };

  useEffect(() => {
    if (isNew && inputRef?.current) {
      inputRef?.current.focus();
    }
  }, [isNew, inputRef]);
  return (
    <ListItem
      secondaryAction={
        <Stack direction={"row"} display={isNew ? "none" : "initial"}>
          {isEditing ? (
            <IconButton
              edge="end"
              aria-label="save"
              onClick={() => handleEdit(task)}
            >
              <SaveIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => handleEdit(task)}
            >
              <EditIcon />
            </IconButton>
          )}
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDelete(task.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        onClick={handleToggle(task)}
        sx={{ border: "1px solid #555", borderRadius: "8px", mb: "2px" }}
        dense
      >
        {isEditing ? (
          <InputBase
            key={task.id}
            inputRef={(input) => input && input.focus()}
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
          />
        ) : (
          <ListItemText
            primary={task.text}
            sx={{ display: isNew ? "none" : "initial" }}
          />
        )}
        {isNew && <InputBase inputRef={inputRef} />}
      </ListItemButton>
    </ListItem>
  );
}
