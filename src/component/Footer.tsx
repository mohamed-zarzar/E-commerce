import { Box, Button, Typography } from "@mui/material";
import logo from "../img/logo.png"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MpOutlinedIcon from '@mui/icons-material/MpOutlined';
import SosOutlinedIcon from '@mui/icons-material/SosOutlined';
import appStoreImg from "../img/footer/app.jpg"
import googlePlayImg from "../img/footer/play.jpg"
import payImg from "../img/footer/pay.png"
import { useTheme } from "@mui/material";

function Footer () {
    const theme = useTheme();
    return (
        <Box>
            <Box className="banner-bg-14" sx={{width:"100 %",height:"200px",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:{xs:"column",md:"row"},p:"10px 20px"}}>
                <Box sx={{display:"flex",flexDirection:"column",textAlign:{xs:"center",md:"start"}}}>
                    <Typography variant="h5" sx={{color:"white"}}>Sing Up For Newsletters</Typography>
                    <Typography variant="h6" sx={{m:"15px 0",color:"white",opacity:"0.7",display:"flex"}}>
                        Get E-mail updates about our latest shop and 
                        <Typography variant="h6" sx={{color:"#ff9800",m:"0 3px"}} >special offers    </Typography>
                    </Typography>
                </Box>
                <Box sx={{maxWidth:"100%",display:"flex",borderRadius:"5px",overflow:"hidden"}}>
                        <input type="email" placeholder="Your email address" style={{outline:"none",border:"none",fontSize:"15px" ,padding:"10px",width:"150px",maxWidth:"100%",color:"#b9bfbe",borderRadius:"0",margin:"0"}}/>
                        <Button variant="contained" sx={{borderRadius:"0",m:"0"}}>Contained</Button>
                </Box>
            </Box>
            <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},p:"50px",alignItems:{xs:"center",md:"start"}}}>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <img src={logo} alt=""  style={{width:"150px"}}/>
                    <Typography variant="h5" color="#242d64" sx={{m:"10px 0"}}>Contact</Typography>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <Typography  variant="h6" sx={{color:"black",fontWeight:"bold"}}>Address : </Typography>
                        <Typography  variant="h6" sx={{color:"gray",opacity:"0.8",m:"0 4px"}}>56 wellington Road Street</Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <Typography  variant="h6" sx={{color:"black",fontWeight:"bold"}}>Phone : </Typography>
                        <Typography  variant="h6" sx={{color:"gray",opacity:"0.8",m:"0 4px"}}>011 2222 365</Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <Typography  variant="h6" sx={{color:"black",fontWeight:"bold"}}>Hours : </Typography>
                        <Typography  variant="h6" sx={{color:"gray",opacity:"0.8",m:"0 4px"}}>10:00 - 18:00 mon-sat</Typography>
                    </Box>
                    <Typography variant="h5" color="#242d64" sx={{m:"10px 0"}}>Follow Us</Typography>
                    <Box sx={{display:"flex"}}>
                        <FacebookOutlinedIcon sx={{m:"0 10px",color:"gray"}}/>
                        <MpOutlinedIcon sx={{m:"0 10px",color:"gray"}}/>
                        <SosOutlinedIcon sx={{m:"0 10px",color:"gray"}}/>
                    </Box>
                </Box>
                <Box sx={{display:"flex",m:{xs:"15px 0",md:"0 50px"}}}>
                    <Box sx={{display:"flex",flexDirection:"column",m:"0 5px"}}>
                        <Typography variant="h5" color="#242d64" sx={{m:"10px 0"}}>About</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>About Us</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>Delivery Information</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>Privacy Policy</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>Terms & Confitions</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>Contact Us</Typography>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",m:"0 5px"}}>
                        <Typography variant="h5" color="#242d64" sx={{m:"10px 0"}}>My Account</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>Sing in</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>View Cart</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>My Wishlist</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>Tarck Mu Oreder</Typography>
                        <Typography variant="h6" sx={{color:"gray",opacity:"0.8"}}>Help</Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",m:{xs:"15px 0",md:"0"}}}>
                    <Typography variant="h5" color="#242d64" sx={{m:"10px 0"}}>Install App</Typography>
                    <Typography variant="h6" sx={{color:"gray",opacity:"0.8",m:"5px 0"}}>From App Store or Google Play</Typography>
                    <Box sx={{display:"flex"}}>
                        <img src={appStoreImg} alt="" style={{margin:"10px 4px",border:`2px solid ${theme.palette.primary.main}`,borderRadius:"5px"}} />
                        <img src={googlePlayImg} alt="" style={{margin:"10px 4px",border:`2px solid ${theme.palette.primary.main}`,borderRadius:"5px"}} />
                    </Box>
                    <Typography variant="h6" sx={{color:"gray",opacity:"0.8",m:"5px 0"}}>Secured Payment Gateways</Typography>
                    <img src={payImg} alt=""  style={{margin:"10px 0"}}/>
                </Box>
            </Box>
        </Box>
    );
}






export default Footer;