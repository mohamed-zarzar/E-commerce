import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import {Products} from "../data/productData"
import ProductCart from "../component/ProductCart";
import {useEffect, useState} from "react"
import { useTheme } from "@mui/material/styles";




function Shop () {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const theme =useTheme();
    const [productFilter,setProductFilter] = useState<string>("all");
    const buttonsName : string[]= ["all","shose","jacket","shirt","bag","hat","pants","watch"];
    const products =Products;
    return (
        <Box>
            <Box className="shop-banner" sx={{width:"100%",height:{xs:"200px",md:"300px"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <Typography variant="h2" color="white">#stayhome</Typography>
                <Typography variant="h6" color="white" sx={{m:"5px 0",opacity:"0.8",textAlign:"center"}}>Save more with coupons & up to 70% off!</Typography>
            </Box>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                m:"50px 0 0 0",
                '& > *': {
                m: 1,
                },
            }}
            >
                <ButtonGroup color="primary" sx={{maxWidth:"100%"}} variant="contained" aria-label="outlined primary button group">
                    {buttonsName.map((btn,index)=>(
                        <Button key={index} sx={{width:{xs:"40px",sm:"65px",md:"80px"},"&:disabled":{
                            color:`${theme.palette.primary.main}`,
                            backgroundColor:"white"
                        },fontSize:{xs:"10px",md:"16px"}}}
                        disabled={productFilter === btn ?  true : false}
                        onClick={()=>{setProductFilter(btn)}}>{btn}</Button>
                    ))}
                </ButtonGroup>
            </Box>
            <Box sx={{p:"50px 20px"}}>
                <Grid container>
                    {products.map((product) => {
                        if(productFilter === product.type || productFilter === 'all'){
                            return (
                                <ProductCart key={product.id}{...product}/>
                            );
                        }
                    })}
                </Grid>
            </Box>
        </Box>
    );
}




export default Shop;