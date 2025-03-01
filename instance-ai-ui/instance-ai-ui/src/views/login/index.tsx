import {Container, Typography, Box, TextField, Button, CircularProgress, Snackbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useRequest} from "ahooks";
import {login} from "../../api/auth"
import {useState} from "react";


const Login =() => {

    const nav = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);

    const {runAsync, loading} = useRequest(login, {
        manual: true
    })

    const handleLogoClick = () => {
        nav("/");
    }

    const handleLogin = async () => {
        const data = await runAsync(username, password);
        setOpen(true);
        localStorage.setItem("AUTH_TOKEN", data.token);
        nav("/app")

    }

    return (
        <Container className="px-16 flex h-screen flex-col items-center">
            {loading && <CircularProgress className="mt-3" color="secondary" />}

            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={open}
                onClose={() => setOpen(false)}
                message="login successful"
            />

            <Box className="flex flex-col items-center gap-4 mt-20">
                {/*
                px-16: logo距离页边框的距离
                flex：居中 - 让logo可以动态调整大小
                h-screen：全屏，代表图片可以根据height铺满整个屏
                最后调整width和height
                flex-col: 因为image随着容器调整，所以调转轴
                cursor-pointer: 鼠标移动可以改变鼠标
                */}
                <img
                    onClick={handleLogoClick}
                    src="/icon.svg"
                    alt="logo"
                    width={60}
                    height={60}
                    className="cursor-pointer hover:animate-bounce"
                />

                {/*
                标题从MUI里选一个
                */}
                <Typography variant="h4" gutterBottom>
                    Sign in to your account
                </Typography>
            </Box>

            {/*
            Box: 用tailwind去写更方便, 来装用户名和password
            需要两个input框
            flex, flex-col: 变成两列（默认username password在一行）
            md:min-w-[40vw] lg:min-w-[30vw]: 适应不同屏幕进行调整 - responsive design (in tailwind css)
            */}
            <Box className="flex flex-col gap-6 min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] border p-6 rounded-xl dark:bg-black">
                <TextField
                    fullWidth
                    value = {username}
                     onChange={(e) => setUsername(e.target.value)}
                    label="Username or email address"
                    className = "dark:bg-[#0D1117]"
                    variant="outlined" />
                <TextField
                    value = {password}
                     onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    label="Password"
                    variant="outlined"
                    className = "dark:bg-[#0D1117]"
                    />
                <Button
                    variant="contained"
                    className="bg-purple-600 hover:bg-purple-700 transition-colors py-2"
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
