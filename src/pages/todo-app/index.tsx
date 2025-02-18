import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useContext, useRef, useState } from "react";
import { Task } from "../../types/task";
import TaskList from "./components/taskList";
import { Person } from "../../types/person";
import DisplayPerson from "./displayPerson";
import { MessageContext } from "../../App";
let nextId = 3;
const initialTasks: Task[] = [
  { id: 0, text: "task 1", done: true },
  { id: 1, text: "task 2", done: false },
  { id: 2, text: "task 3", done: false },
];
function Sln4Component() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const { setMessage } = useContext(MessageContext);
  const [person, setPerson] = useState<Person>({ name: "trung", age: 18 });
  const messageRef = useRef<HTMLInputElement>(null);
  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task: Task) {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(newTasks);
  }

  function handleDeleteTask(taskId: number) {
    const newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    console.log(event);
    event.preventDefault();
    setMessage(messageRef.current?.value!);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Grid container columns={12}>
          <Grid item xs={12} padding={2}>
            <Typography variant="h2" fontWeight={"bold"} fontSize={"40px"}>
              <DisplayPerson person={person} />
            </Typography>
            <Button
              onClick={() => {
                person.age += 1;
                // console.log(person.age);
                setPerson({ ...person, age: person.age });
              }}
            >
              add age + 1
            </Button>
            <Box>
              <label>send message to Family tree</label>
              <TextField name="message" inputRef={messageRef} />{" "}
              <Button type="submit">go</Button>
            </Box>
          </Grid>
          <Grid item xs={7} padding={3}>
            <Stack
              direction={{ xs: "column" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <TaskList
                tasks={tasks}
                onAddTask={handleAddTask}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
}

export default Sln4Component;
