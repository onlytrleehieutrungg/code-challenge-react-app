import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { Task } from "../../../types/task";
import TasKDetail from "./taskDetail";
type TaskListProps = {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
  onAddTask: (text: string) => void;
};

export default function TaskList({
  tasks,
  onChangeTask,
  onAddTask,
  onDeleteTask,
}: TaskListProps) {
  const [isNew, setIsNew] = useState(false);
  const [newTask, setNewTask] = useState<Task>();
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(tasks);
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Objective
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {tasks.map((task) => (
            <TasKDetail
              key={task.id}
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          ))}
          {isNew && (
            <TasKDetail
              key={tasks.length}
              isNew={isNew}
              inputRef={inputRef}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          )}
        </List>

        <CardActions>
          {isNew ? (
            <Stack direction={"row"} >
              <Button
                onClick={() => {
                  onAddTask(inputRef.current?.value!);
                  setIsNew(false);
                }}
                variant="contained"
              >
                Add
              </Button>
              <Button
                onClick={() => {
                  setIsNew(false);
                }}
                endIcon={<ClearIcon />}
                variant="text"
              >
                {""}
              </Button>
            </Stack>
          ) : (
            <Button
              size="small"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => {
                setIsNew(true);
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            >
              Add new task
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
