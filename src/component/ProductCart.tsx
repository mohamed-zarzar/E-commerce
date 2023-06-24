import { Box, Rating, Typography } from "@mui/material";
import {ProductType} from "../data/productData"
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useAppDispatch } from "../rtk/hook";
import {addCurrentProduct} from "../rtk/features/currentProductSlice"
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

function ProductCart (props:ProductType) {
    const theme =useTheme();
    const dispatch = useAppDispatch();
    const {title,img,price,evaluation,} = props;
    return (
        <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center", p:"10px",boxShadow:3,borderRadius:"10px",m:"15px auto",maxWidth:"100%",transitionDuration:"200ms",
        "&:hover":{
            transform:"translate(0, -15px)",
        }}}
        onClick={()=>dispatch(addCurrentProduct(props))}>
            <img src={img} alt="" style={{width:"250px",maxWidth:"100%"}}/>
            <Typography variant="h6" sx={{color:"#a8a8a8",m:"10px 0"}}> adidas</Typography>
            <Typography variant="h5" sx={{fontWeight:"bold",textTransform:"capitalize"}}>{title}</Typography>
            <Box sx={{display:"flex",justifyContent:"space-between",m:"10px 0"}}>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                <Rating name="read-only" value={evaluation} readOnly />
                <Typography variant="h6" sx={{color:"#4caf50",fontWeight:"bold",m:"5px 0 0 0"}}>${price}</Typography>
                </Box>
                <Link to="/currentProduct" >
                    <LocalGroceryStoreOutlinedIcon color="primary" sx={{cursor:"pointer",width:"25px",height:"25px",backgroundColor:"#dae9da",p:"10px",borderRadius:"50%",
                    "&:hover": {
                        backgroundColor:`${theme.palette.primary.main}`,
                        color:"white",
                    }}}/>
                </Link>
            </Box> 
        </Box>
    );
}

export default ProductCart;