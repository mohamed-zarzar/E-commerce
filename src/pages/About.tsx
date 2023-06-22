import { Box, Typography } from "@mui/material";
import ImgAbout from "../img/about/a6.jpg"
import Footer from "../component/Footer";




function About () {
    return (
        <Box>
            <Box className="cart-banner" sx={{width:"100%",height:{xs:"200px",md:"300px"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <Typography variant="h2" color="white">#cart</Typography>
                <Typography variant="h6" color="white" sx={{m:"5px 0",opacity:"0.8",textAlign:"center"}}>Add your coupon coupons & up to 70% off!</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:{xs:"column-reverse",md:"row"},m:"30px 0",p:"30px",alignItems:{xs:"center",md:"start"}}}>
                <img src={ImgAbout} alt="" width="500px" style={{maxWidth:"100%"}}/>
                <Box sx={{display:"flex",flexDirection:"column",m:{xs:"30px 0",md:"0 30px"},textAlign:{xs:"center",md:"start"}}}>
                    <Typography variant="h3" >Who We Are</Typography>
                    <Typography variant="h6"  color="#9e9e9e">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate blanditiis, cumque corporis consequatur necessitatibus esse distinctio eos molestiae dignissimos, omnis delectus? Magni maiores sint provident voluptatum delectus quidem omnis harum?</Typography>
                </Box>
            </Box>
            <Footer/>
        </Box>
    );
}


export default About;