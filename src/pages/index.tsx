import {
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";

function HomePage() {
  const [isWeChatInstalled, setIsWeChatInstalled] = useState<boolean>();
  const [todos, setTodos] = useState<any>();
  const checkWeChat = () => {
    let fallbackUrl = "http://localhost:3000/";

    window.location.href = "weixajsnghrfdsghin://";

    const wechatFallbackUrl =
      "https://apps.apple.com/us/app/wechat/id414478124";

    fallbackUrl = wechatFallbackUrl;

    setTimeout(function () {
      if (document.hasFocus()) {
        window.location.href = fallbackUrl;
      }
    }, 1000);
  };

  useEffect(() => {
    async function fetchTodos() {
      await fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json().then((res) => setTodos(res))
      );
    }
    fetchTodos();
  }, [setTodos]);

  return (
    <Container>
      <Grid container columns={12}>
        <Grid item xs={12} padding={2}>
          <Typography variant="h2" fontWeight={"bold"} fontSize={"40px"}>
            Hi I am Trung.
          </Typography>
          <label className=""></label>
          <input className="" name="ashjd" autoFocus></input>{" "}
          <Typography
            variant="subtitle1"
            color={"#828282"}
            fontSize={"12px"}
            ml={"3px"}
          >
            made by trung tran.
          </Typography>
          <h1>Check if WeChat is Installed</h1>
          <button onClick={checkWeChat}>Check</button>
          {isWeChatInstalled === true && <p>WeChat is installed!</p>}
          {isWeChatInstalled === false && <p>WeChat is not installed.</p>}
          {isWeChatInstalled === null && <p>Click the button to check.</p>}
          <Grid item xs={7} padding={3}>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: { xs: 1, sm: 2, md: 4 } }}
            >
              {todos?.map((todo: any) => (
                <div className="flex flex-row">
                  <div>{todo?.title}</div>
                  <input name="" type="checkbox" checked={todo?.completed} />
                </div>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
