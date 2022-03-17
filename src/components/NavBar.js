import React, { useState } from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import Logo from '../assets/images/Logo.png'

const NavBar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>
            <AppBar sx={{ background: "#000000" }}>
                <Toolbar>
                    <img src= {Logo} alt="Logo" width={65}/>
                    {isMatch ? (
                        <>
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                                Shoppee
                            </Typography>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                            <Tabs
                                sx={{ marginLeft: "auto" }}
                                indicatorColor="secondary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab label="Productos" />
                                <Tab label="Categorías" />
                                <Tab label="Quienes somos" />
                                <Tab label="Contacto" />
                            </Tabs>
                            {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
                                Login
                            </Button>
                            <Button sx={{ marginLeft: "10px" }} variant="contained">
                                SignUp
                            </Button> */}
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default NavBar;