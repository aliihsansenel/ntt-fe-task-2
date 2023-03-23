import React from "react";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { height } from "@mui/system";

import "./style.scss";

import { tls } from "@srcRoot/utils/helper";

function ProductCard({ product }) {
    const { id, name, description, imageUrl, price, shippingMethod } = product;

    return (
        <Card
            sx={{
                p: "12px 13px",
                border: "1px solid #E6E6E6",
                borderRadius: "4px",
                boxShadow: "none",
            }}
        >
            <CardActionArea>
                <Box position={"relative"}>
                    <CardMedia
                        sx={{ height: 170, backgroundSize: "cover" }}
                        image={imageUrl}
                        title={name}
                    />
                    <Box
                        position={"absolute"}
                        top={10}
                        right={10}
                        bgcolor={"white"}
                        sx={{ borderRadius: "50%" }}
                    >
                        <CardActions>
                            <Button size="small" color="primary">
                                Kalp
                            </Button>
                        </CardActions>
                    </Box>
                </Box>

                <CardContent sx={{ height: 200, p: 0 }}>
                    <Box sx={{ p: "4px 8px" }}>
                        <Typography
                            fontSize={16}
                            fontWeight={600}
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {name}
                        </Typography>
                    </Box>
                    <Box sx={{ height: 24, p: "4px 8px" }} bgcolor={"#E6EEF8"}>
                        <Typography
                            fontWeight={700}
                            fontSize={14}
                            lineHeight={"16px"}
                            gutterBottom
                            component="div"
                        >
                            {tls(price)} TL
                        </Typography>
                    </Box>
                    <Box sx={{ p: "4px 8px" }}>
                        <Typography
                            component="span"
                            fontWeight={500}
                            fontSize={12}
                            lineHeight={"14px"}
                            gutterBottom
                        >
                            Description
                        </Typography>
                    </Box>
                    <Box sx={{ p: "4px 10px 4px 8px", overflow: "hidden" }}>
                        <Typography
                            className="multiline-ellipsis"
                            fontSize={12}
                            lineHeight={"14.06px"}
                            variant="body2"
                            component="p"
                        >
                            {description}
                        </Typography>
                    </Box>

                    <Box sx={{ p: "4px 8px" }}>
                        <Typography
                            fontSize={10}
                            lineHeight={"12px"}
                            variant="body2"
                            component="span"
                        >
                            {shippingMethod}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProductCard;
