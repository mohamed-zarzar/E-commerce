import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { useAppSelector,useAppDispatch } from "../rtk/hook";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deletProduct } from "../rtk/features/myProduct";
import Footer from "../component/Footer";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize:14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function MyProductBying () {
    const dispatch =useAppDispatch();
    const MyProducts =useAppSelector(state => state.buyProduct.buyingProduct);
    return (
        <Box>
            <Box className="cart-banner" sx={{width:"100%",height:{xs:"200px",md:"300px"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <Typography variant="h2" color="white">#cart</Typography>
                <Typography variant="h6" color="white" sx={{m:"5px 0",opacity:"0.8",textAlign:"center"}}>Add your coupon coupons & up to 70% off!</Typography>
            </Box>
            <TableContainer sx={{margin:"50px 0"}} component={Paper}>
                <Table sx={{ minWidth: 200 ,maxWidth:"100%"}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>REMOVE</StyledTableCell>
                            <StyledTableCell align="right">IMAGE</StyledTableCell>
                            <StyledTableCell align="right" sx={{display:{xs:"none",md:"table-cell"}}}>PRODUCT</StyledTableCell>
                            <StyledTableCell align="right" sx={{display:{xs:"none",md:"table-cell"}}}>PRICE</StyledTableCell>
                            <StyledTableCell align="right" sx={{display:{xs:"none",sm:"table-cell"}}}>QUANTITY</StyledTableCell>
                            <StyledTableCell align="right">SUBTOTAL</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                    {MyProducts.map((product)=>(
                            <StyledTableRow
                            key={product.product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    <DeleteForeverIcon sx={{color:"red",cursor:"pointer",
                                    "&:hover":{
                                        transform:"scale(1.2)",
                                    }}} onClick={()=>{dispatch(deletProduct(product.product.id))}}/>
                                </StyledTableCell>
                                <StyledTableCell align="right"><img src={product.product.img} alt="" width="50px"/></StyledTableCell>
                                <StyledTableCell align="right" sx={{display:{xs:"none",md:"table-cell"},color:"#9e9e9e"}}>{product.product.title}</StyledTableCell>
                                <StyledTableCell align="right" sx={{display:{xs:"none",md:"table-cell"},color:"#9e9e9e"}}>{product.product.price}</StyledTableCell>
                                <StyledTableCell align="right" sx={{display:{xs:"none",sm:"table-cell"}}}>{product.quantity}</StyledTableCell>
                                <StyledTableCell align="right" sx={{color:"#4caf50"}}>{product.quantity * product.product.price}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer/>
        </Box>
    );
}



export default MyProductBying;