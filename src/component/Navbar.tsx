import { AppBar, Badge, Box,  Drawer,  IconButton,  List,  ListItemButton,  ListItemIcon,  ListItemText,  Tab, Tabs, Toolbar, } from "@mui/material";
import BrandImg from "../img/logo.png"
import { useRef, useState } from "react";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector ,useAppDispatch} from "../rtk/hook";
import { shopStatus } from "../rtk/features/isInShop";

function Navbar () {
    const dispatch = useAppDispatch();
    const setStatusOfShop = (status:number) => {
        dispatch(shopStatus(status));
    }
    const lenghtOfProducts = useAppSelector(state => state.buyProduct.buyingProduct.length);
    const isInShopPage = useAppSelector(state => state.IsInShopPage);
    const RefHome = useRef<HTMLButtonElement>(null);
    const RefShop = useRef<HTMLButtonElement>(null);
    const RefMyProductBying = useRef<HTMLButtonElement>(null);
    const RefAbout = useRef<HTMLButtonElement>(null);
    const [openDrawer,setOpenDrawer] =useState<boolean>(false);
    const handelChange = (event: React.SyntheticEvent, newValue: number) => {
        setStatusOfShop(newValue);
    }
    const hnadelClickMyProductBying = () => {
        setStatusOfShop(0);
        RefMyProductBying.current?.click();
    }
    return (
        <AppBar position="static" sx={{background:"#e3e6f3",}}>
            <Toolbar>
                <img src={BrandImg} alt=""></img>
                <Box sx={{display:"flex",alignItems:"center",marginLeft:"auto"}}>
                <Tabs
                sx={{display:{xs:"none",sm:"block"}}}
                    value={isInShopPage}
                    onChange={handelChange}
                    textColor="primary"
                    indicatorColor="primary"
                    >
                    <Link to="*" style={{display:"none"}}><button  ref={RefHome}></button></Link> 
                    <Tab value={1} label="Home" sx={{textTransform:"capitalize"}} onClick={()=>{RefHome.current?.click();
                    setStatusOfShop(1);}}/>
                    <Link to="/shop" style={{display:"none"}}><button  ref={RefShop}></button></Link> 
                    <Tab value={2} label="Shop" sx={{textTransform:"capitalize"}} onClick={()=>{RefShop.current?.click();
                    setStatusOfShop(2);}}/>
                    <Link to="/about" style={{display:"none"}}><button  ref={RefAbout}></button></Link> 
                    <Tab value={3} label="About" sx={{textTransform:"capitalize"}} onClick={()=>{RefAbout.current?.click();
                    setStatusOfShop(3);}}/>
                    </Tabs>
                    <Badge color="primary" badgeContent={lenghtOfProducts}>
                        <LocalMallOutlinedIcon color={isInShopPage === 0 ?"primary":"disabled"} sx={{marginLeft:"20px"}} onClick={hnadelClickMyProductBying}/>
                        <Link to="/myProductBuing" style={{display:"none"}}><button  ref={RefMyProductBying}></button></Link> 
                    </Badge>
                    <React.Fragment>
                        <Drawer open={openDrawer}
                        onClose={()=>setOpenDrawer(false)}>
                            <List sx={{paddingTop:"15px"}}>
                                    <ListItemButton onClick={()=>{RefHome.current?.click();
                                    setStatusOfShop(1);}}>
                                        <ListItemIcon>
                                            <ListItemText>Home</ListItemText>
                                        </ListItemIcon>
                                    </ListItemButton>
                                <ListItemButton onClick={()=>{RefShop.current?.click();
                                setStatusOfShop(2);}}>
                                    <ListItemIcon>
                                        <ListItemText>Shop</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                                <ListItemButton onClick={()=>{RefAbout.current?.click();
                                setStatusOfShop(3);}}>
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