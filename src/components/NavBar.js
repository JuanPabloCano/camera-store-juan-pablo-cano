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
import CartWidget from "./CartWidget";

const NavBar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <AppBar sx={{ background: "#000000" }}>
                <Toolbar>
                    <CartWidget />
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
                                indicatorColor="primary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab label="Inicio" />
                                <Tab label="Productos" />
                                <Tab label="Categorías" />
                                <Tab label="Quienes somos" />
                                <Tab label="Contacto" />
                            </Tabs>
                            <Button sx={{ marginLeft: "auto" }} variant="contained">
                                Login
                            </Button>
                            <Button sx={{ marginLeft: "10px" }} variant="contained" >
                                SignUp
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default NavBar;