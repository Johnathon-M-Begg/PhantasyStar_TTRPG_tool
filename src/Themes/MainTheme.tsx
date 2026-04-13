import type {Theme} from "@mui/material";
import {createTheme} from "@mui/material";

export const mainTheme: Theme = createTheme({
    palette: {
        primary: {
            main: "#284ebf",
        },
        secondary: {
            main: "#564c4d",
        },
        complementary: {
            main: "#bf9928",
        },
        orange: {
            main: "#f57c00",
            light: "#fb8c00",
            dark: "#ef6c00"
        },
        blue: {
            main: "#03a9f4",
            light: "#29b6f6",
            dark: "#0288d1",
        }
    }
})