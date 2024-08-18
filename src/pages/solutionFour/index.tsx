import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Task } from "../../types/task";
import TaskList from "./components/taskList";
import { Person } from "../../types/person";
import DisplayPerson from "./displayPerson";
let nextId = 3;
const initialTasks: Task[] = [
  { id: 0, text: "task 1", done: true },
  { id: 1, text: "task 2", done: false },
  { id: 2, text: "task 3", done: false },
];
function Sln4Component() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [person, setPerson] = useState<Person>({ name: "trung", age: 18 });
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
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }
  return (
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
              setPerson({...person, age: person.age});
            }}
          >
            add age + 1
          </Button>
        </Grid>
        <Grid item xs={7} padding={3}>
          <Stack direction={{ xs: "column" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
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
  );
}

export default Sln4Component;
