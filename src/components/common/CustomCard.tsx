import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

type IProp = {
  children: any;
  imgUrl: string;
  cardMaxWidth?: number;
  imgHeight?: number;
  cardTitle?: string;
};

const CustomCard: React.FC<IProp> = (props) => {
  const { children, imgUrl, cardMaxWidth, imgHeight, cardTitle } = props;
  return (
    <>
      <Card sx={{ maxWidth: cardMaxWidth ? cardMaxWidth : "100%" }}>
        {imgUrl && (
          <CardMedia
            sx={{ height: imgHeight ? imgHeight : 150 }}
            image={imgUrl}
          />
        )}
        <CardContent>
          {cardTitle && (
            <Typography gutterBottom variant="h5" component="div">
              {cardTitle}
            </Typography>
          )}
          {children}
        </CardContent>
      </Card>
    </>
  );
};

export default CustomCard;
