import { Outlet } from "react-router";
import Header from "./Header";
import { ThemeProvider } from "../store/ThemeContext.jsx";

export default function Layout() {

    return (<>
        <ThemeProvider>
            <Header />
            <div id="outlet">
                <Outlet />
            </div>
        </ThemeProvider>
    </>)
}   