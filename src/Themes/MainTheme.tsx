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
    }
})