import Box from "@mui/material/Box/Box";
import { Grid, Typography} from "@mui/material"
import HomePageShop from "../img/home/landing/homePageShop.svg"
import ButtonHomePage from "../img/home/landing/button.png"
import F1Img from "../img/home/features/f1.png"
import F2Img from "../img/home/features/f2.png"
import F3Img from "../img/home/features/f3.png"
import F4Img from "../img/home/features/f4.png"
import F5Img from "../img/home/features/f5.png"
import F6Img from "../img/home/features/f6.png"
import {Products} from "../data/productData";
import ProductCart from "../component/ProductCart";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";


// start Feature Section
type FeaturedType = {
    title:string,
    img:string,
    color:string,
}

const arrOfFeatured:FeaturedType[] = [ 
    {
        title:"Free Shipping",
        img:F1Img,
        color:"#c4dbe6",
    },
    {
        title:"Online Order",
        img:F2Img,
        color:"#f2d5db",
    },
    {
        title:"Save Money",
        img:F3Img,
        color:"#bcdcb2",
    },
    {
        title:"Promotions",
        img:F4Img,
        color:"#c3c9eb",
    },
    {
        title:"Happy Sell",
        img:F5Img,
        color:"#e6cee8",
    },
    {
        title:"F24/7 Support",
        img:F6Img,
        color:"#ece1d5",
    },
]


function OnlyOneFeatured (featured:FeaturedType) {
    return(
        <Box sx={{margin:"30px 10px",p:"15px",border:"1px solid #ede5e5",borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",boxShadow:3}}>
            <img src={featured.img} alt="" />
            <Typography variant="h6" sx={{margin:"10px 0",backgroundColor:`${featured.color}`,borderRadius:"5px",p:"2px 5px",}} color="primary">{featured.title}</Typography>
        </Box>
    );
}
// end Feature Section



function Home () {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const theme =useTheme();
    // start banner section state
        const [isFirstBannerClick,setIsFirstBannerClick] = useState<boolean>(false);
        const [isSecondBannerClick,setIsSecondBannerClick] = useState<boolean>(false);
    // end banner section state

    return (
    <Box>
        {/* landing sektion */}
        <Box sx={{background:"#e3e6f3d9",height:{sx:"100vh",lg:"calc(100vh - 58px)"},display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:{xs:"column",lg:"row"},textAlign:{xs:"center",lg:"start"}}}>
            <Box sx={{display:"flex",flexDirection:"column",margin:{xs:"50px 0",lg:"0 30px"}}}>
                <Typography variant="h5">Trade-im-offer</Typography>
                <Typography variant="h2">Super value deals</Typography>
                <Typography variant="h2" color="primary">On all products</Typography>
                <Typography variant="h6" color="#a8abb5">Save more with coupons & up to 70% off!</Typography>
                <Box sx={{backgroundImage: `url(${ButtonHomePage})`,backgroundRepeat: "no-repeat",margin:{xs:"20px auto",lg:"20px 0"},display:"flex",justifyContent:"center",width:"230px",height:"55px"}}>
                    <Typography variant="h4" color="primary">Shop</Typography>
                </Box>
            </Box>
            <img src={HomePageShop} alt="" style={{width:"600px",maxWidth:"100%"}}/>
        </Box>
        {/* featured section */}
        <Box sx={{p:"50px 20px"}}>
            <Grid container rowSpacing={2} columnSpacing={2}>
                {arrOfFeatured.map((featured)=>(
                    <Grid xs={12} sm={6} md={4} lg={2}>
                        <OnlyOneFeatured {...featured}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
        {/* featured products */}
        <Box sx={{m:"20px auto",textAlign:"center"}}>
            <Typography variant="h2">Featured Products</Typography>
            <Typography variant="h6" color="#9fa29f" sx={{m:"5px 0"}}>Summer Collection New Modern Design</Typography>
        </Box>
        <Box sx={{p:{xs:"50px 0",md:"50px 20px"}}}>
            <Grid container >
                {Products.map((product) => {
                    if(product.status === "featured") {
                        return (
                            <ProductCart key={product.id}{...product}/>
                        );
                    }
                    else return (null);
                })}
            </Grid>
        </Box>
        {/* banner section */}
        <Box className="banner-bg" sx={{width:"100%",height:"100px",padding:"100px 0",color:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Typography variant="h6" sx={{m:"20px 0"}}>Repair Services</Typography>
            <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",m:"15px 0"}} fontSize={{xs:10,sm:30,md:50}}>
                up to <Typography sx={{color:"#d83b3e",m:"0 1px"}} fontSize={{xs:10,sm:30,md:50}}> 70% of </Typography> _ All-shirts & Accessoris
            </Typography>
            <Box sx={{backgroundColor:"white",color:"#06101b",p:"4px 10px",borderRadius:"5px",m:"15px 0",
            "&:hover":{
                backgroundColor:`${theme.palette.primary.main}`,
                color:"white",
            }}}>
                <Typography variant="h5">Explore More</Typography>
            </Box>
        </Box>
        {/* new products */}
        <Box sx={{m:"20px auto",textAlign:"center"}}>
            <Typography variant="h2">New Arrival</Typography>
            <Typography variant="h6" color="#9fa29f" sx={{m:"5px 0"}}>Summer Collection New Modern Design</Typography>
        </Box>
        <Box sx={{p:"50px 20px"}}>
            <Grid container>
                {Products.map((product) => {
                    if(product.status === "new") {
                        return (
                            <ProductCart key={product.id} {...product}/>
                        );
                    }
                    else return (null);
                })}
            </Grid>
        </Box>
        {/* bannel sektioon */}
        <Box sx={{display:"flex",flexDirection:"column"}}>
                <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"space-betwwen",alignItems:"center"}}>
                    <Box 
                    onMouseEnter={()=>setIsFirstBannerClick(true)}
                    onMouseLeave={()=>setIsFirstBannerClick(false)}
                    className="banner-bg-4" sx={{color:"white",height:"350px",width:"700px",maxWidth:"100%",m:"15px 20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:{xs:"center",sm:"start"},textAlign:{xs:"center",sm:"start"},p:"10px 20px"}}>
                        <Typography variant="h4" sx={{opacity:"0.75",m:"5px 0"}}>crazy deals</Typography>
                        <Typography variant="h3" sx={{fontWeight:"bold",m:"5px 0"}}>buy 1 get 1 free</Typography>
                        <Typography variant="h6" sx={{opacity:"0.8",m:"10px 0"}}>The best classic dress on sale at cara</Typography>
                        <Box sx={{p:"8px",m:"5px 0",borderRadius:"5px",border:"1px solid white",width:"100px",display:"flex",justifyContent:"center",alignItems:"center"
                        }}
                        style={isFirstBannerClick?{border:`1px solid ${theme.palette.primary.main}`,backgroundColor:`${theme.palette.primary.main}`}:{border:"1px solid white"}}>
                            Learn More
                        </Box>
                    </Box>
                    <Box 
                    onMouseEnter={()=>setIsSecondBannerClick(true)}
                    onMouseLeave={()=>setIsSecondBannerClick(false)}
                    className="banner-bg-1" sx={{color:"white",height:"350px",width:"700px",maxWidth:"100%",m:"15px 20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:{xs:"center",sm:"start"},textAlign:{xs:"center",sm:"start"},p:"10px 20px"}}>
                        <Typography variant="h4" sx={{opacity:"0.75",m:"5px 0"}}>spring/summer</Typography>
                        <Typography variant="h3" sx={{fontWeight:"bold",m:"5px 0"}}>upcommin season</Typography>
                        <Typography variant="h6" sx={{opacity:"0.8",m:"10px 0"}}>The best classic dress on sale at cara</Typography>
                        <Box sx={{p:"8px",m:"5px 0",borderRadius:"5px",width:"100px",display:"flex",justifyContent:"center",alignItems:"center",}}
                        style={isSecondBannerClick?{border:`1px solid ${theme.palette.primary.main}`,backgroundColor:`${theme.palette.primary.main}`}:{border:"1px solid white"}}>
                            Collection
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"space-betwwen",alignItems:"center"}}>
                    <Box className="banner-bg-3" sx={{color:"white",height:"350px",width:{xs:"700px",md:"400px"},maxWidth:"100%",m:"15px 20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:{xs:"center",sm:"start"},textAlign:{xs:"center",sm:"start"},p:"10px 20px"}}>
                        <Typography variant="h4" sx={{fontWeight:"bold",m:"5px 0"}}>T-SHIRTS</Typography>
                        <Typography variant="h5" sx={{color:"#f44336",m:"5px 0"}}>New Trendy</Typography>
                    </Box>
                    <Box className="banner-bg-2" sx={{color:"white",height:"350px",width:{xs:"700px",md:"800px"},maxWidth:"100%",m:"15px 20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:{xs:"center",sm:"start"},textAlign:{xs:"center",sm:"start"},p:"10px 20px"}}>
                        <Typography variant="h4" sx={{fontWeight:"bold",m:"5px 0"}}>NEW FOOTWEAR COLLECTION</Typography>
                        <Typography variant="h5" sx={{color:"#f44336",m:"5px 0"}}>Spring/Summer-2022</Typography>
                    </Box>
                    <Box className="banner-bg-5" sx={{color:"white",height:"350px",width:{xs:"700px",md:"400px"},maxWidth:"100%",m:"15px 20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:{xs:"center",sm:"start"},textAlign:{xs:"center",sm:"start"},p:"10px 20px"}}>
                        <Typography variant="h4" sx={{fontWeight:"bold",m:"5px 0"}}>SEASONAL SALE</Typography>
                        <Typography variant="h5" sx={{color:"#f44336",m:"5px 0"}}>Winter Collection -50% Off</Typography>
                    </Box>
                </Box>
        </Box>
    </Box>
    );
}





export default Home;