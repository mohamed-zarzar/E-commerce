import { AppBar, Badge, Box,  Drawer,  IconButton,  List,  ListItemButton,  ListItemIcon,  ListItemText,  Tab, Tabs, Toolbar, } from "@mui/material";
import BrandImg from "../img/logo.png"
import { useRef, useState } from "react";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../rtk/hook";

function Navbar () {
    const lenghtOfProducts = useAppSelector(state => state.buyProduct.buyingProduct.length);
    const RefHome = useRef<HTMLButtonElement>(null);
    const RefShop = useRef<HTMLButtonElement>(null);
    const RefMyProductBying = useRef<HTMLButtonElement>(null);
    const RefAbout = useRef<HTMLButtonElement>(null);
    const [activePage,setActivePage] =useState<number>(1);
    const [openDrawer,setOpenDrawer] =useState<boolean>(false);
    const handelChange = (event: React.SyntheticEvent, newValue: number) => {
        setActivePage(newValue);
    }
    const hnadelClickMyProductBying = () => {
        setActivePage(0);
        RefMyProductBying.current?.click()
    }
    return (
        <AppBar position="static" sx={{background:"#e3e6f3",}}>
            <Toolbar>
                <img src={BrandImg} alt=""></img>
                <Box sx={{display:"flex",alignItems:"center",marginLeft:"auto"}}>
                <Tabs
                sx={{display:{xs:"none",sm:"block"}}}
                    value={activePage}
                    onChange={handelChange}
                    textColor="primary"
                    indicatorColor="primary"
                    >
                    <Link to="*" style={{display:"none"}}><button  ref={RefHome}></button></Link> 
                    <Tab value={1} label="Home" sx={{textTransform:"capitalize"}} onClick={()=>{RefHome.current?.click()}}/>
                    <Link to="/shop" style={{display:"none"}}><button  ref={RefShop}></button></Link> 
                    <Tab value={2} label="Shop" sx={{textTransform:"capitalize"}} onClick={()=>{RefShop.current?.click()}}/>
                    <Link to="/about" style={{display:"none"}}><button  ref={RefAbout}></button></Link> 
                    <Tab value={3} label="About" sx={{textTransform:"capitalize"}} onClick={()=>{RefAbout.current?.click()}}/>
                    </Tabs>
                    <Badge color="primary" badgeContent={lenghtOfProducts}>
                        <LocalMallOutlinedIcon color={activePage === 0 ?"primary":"disabled"} sx={{marginLeft:"20px"}} onClick={hnadelClickMyProductBying}/>
                        <Link to="/myProductBuing" style={{display:"none"}}><button  ref={RefMyProductBying}></button></Link> 
                    </Badge>
                    <React.Fragment>
                        <Drawer open={openDrawer}
                        onClose={()=>setOpenDrawer(false)}>
                            <List sx={{paddingTop:"15px"}}>
                                    <ListItemButton onClick={()=>{RefHome.current?.click()}}>
                                        <ListItemIcon>
                                            <ListItemText>Home</ListItemText>
                                        </ListItemIcon>
                                    </ListItemButton>
                                <ListItemButton onClick={()=>{RefShop.current?.click()}}>
                                    <ListItemIcon>
                                        <ListItemText>Shop</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton onClick={()=>{RefAbout.current?.click()}}>
                                    <ListItemIcon>
                                        <ListItemText>About</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                            </List>
                        </Drawer>
                        <IconButton sx={{display:{xs:"block",sm:"none"},margin:"0 10px"}} onClick={()=>setOpenDrawer(!openDrawer)}>
                            <MenuOutlinedIcon/>
                        </IconButton>
                    </React.Fragment>
                </Box>
            </Toolbar>
        </AppBar>
    );
}



export default Navbar;