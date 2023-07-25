import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Tooltip, Typography } from "@mui/material";
import { useAppSelector ,useAppDispatch} from "../rtk/hook";
import { useEffect, useRef, useState } from "react";
import { buyingProduct } from "../rtk/features/myProduct";
import { Link } from "react-router-dom";
import { shopStatus } from "../rtk/features/isInShop";


function CurrentProduct () {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const Ref =useRef<HTMLButtonElement>(null);
    const dispatch =useAppDispatch();
    const [isButtonHover,setIsButtonHover] =useState<boolean>(false);
    const [quantityNumber, setQuantityNumber] = useState<number>(1);
    const [countIsHover,setCountIsHover] =useState<boolean>(false);
    const onChangenumber = (number:number) => {
        setQuantityNumber(number);
    }
    const [size, setSize] = useState<string>('');
    const handleChange = (event: SelectChangeEvent) => {
        setSize(event.target.value);
    };
    const currentProduct = useAppSelector(state => state.currentProduct)
    const {img,title,type,status,price,count} = currentProduct
    return (
        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Box sx={{display:"flex",p:"40px",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"center",md:"start"}}}>
                <img src={img} alt="" style={{width:"400px" ,maxWidth:"100%"}} />
                <Box sx={{display:"flex",flexDirection:"column",p:"10px",alignItems:{xs:"center",md:"start"}}}>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="h6" color="#9e9e9e" margin="10px 0">{type}</Typography>
                    <Typography variant="h6">{status}</Typography>
                    <Box sx={{display:"flex",flexDirection:"column"}}>
                        <Tooltip title="should select size" placement="left-start" arrow
                        open={size === '' && isButtonHover}>
                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-simple-select-filled-label">Select Size</InputLabel>
                                <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={size}
                                onChange={handleChange}
                                >
                                    <MenuItem value={"small"}>small</MenuItem>
                                    <MenuItem value={"medium"}>medium</MenuItem>
                                    <MenuItem value={"large"}>large</MenuItem>
                                </Select>
                            </FormControl>
                        </Tooltip>
                        <Box sx={{display:"flex",m:"20px 0",flexDirection:{xs:"column",sm:"row"}}}>
                            <Tooltip 
                            title={`there is only : ${count} of ${title}`}
                            placement="left-start" arrow 
                            open={quantityNumber === count && countIsHover}
                            onMouseOver={()=>setCountIsHover(true)}
                            onMouseLeave={()=>setCountIsHover(false)}
                            >
                                <TextField
                                    color={`${quantityNumber === 0 ? "error" : "primary"}`}
                                    id="outlined-number"
                                    label="Number"
                                    type="number"
                                    value={quantityNumber}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{ 
                                        inputProps: {
                                            min:1 , max:count,
                                        }
                                    }}
                                    sx={{width:"150px"}}
                                    size="small"
                                    onChange={(e)=>{onChangenumber(+e.target.value)}}
                                    />
                            </Tooltip>
                            <Button 
                            variant="contained" sx={{m:{xs:"20px 0",sm:"0 0 0 10px"},cursor:`${size === '' ||
                            quantityNumber === 0 ? "no-drop":"pointer"}`}} size="small" 
                            onClick={()=>{
                                if (size !== '' &&
                                quantityNumber > 0 ) {
                                    dispatch(buyingProduct({
                                    product:currentProduct,
                                    quantity:quantityNumber,
                                    size:`${size}`,}));
                                    dispatch(shopStatus(true));
                                    Ref.current?.click();
                                }
                            }}
                            onMouseOver={()=>setIsButtonHover(!isButtonHover)}
                            onMouseLeave={()=>{setIsButtonHover(!isButtonHover)}}
                            >
                                Add To Cart
                            </Button>
                            <Link to="/myProductBuing" style={{display:"none"}}><button ref={Ref}></button></Link>
                        </Box>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",textAlign:{xs:"center",md:"start"}}}>
                        <Typography variant="h4" sx={{fontWeight:"bold"}}>Product Details</Typography>
                        <Typography marginTop="10px" color="#9e9e9e" fontSize="18px">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni officia atque fuga inventore et unde non libero mollitia nostrum. Quo debitis deserunt dolorem culpa ex quam animi omnis quasi eaque?
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Typography variant="h5" color="#4caf50" margin="0 auto 20px auto">{`$${price}`}</Typography>
        </Box>
    )
}
export default CurrentProduct;