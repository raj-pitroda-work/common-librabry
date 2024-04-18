import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

type IProp = {
  children: any;
  imgUrl: string;
  cardMaxWidth?: number;
  imgHeight?: number;
  cardTitle?: string;
};

const CustomCard: React.FC<IProp> = (props) => {
  const { children, imgUrl, cardMaxWidth, imgHeight, cardTitle } = props;
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };
  return (
    <>
      <Card
        sx={{ maxWidth: cardMaxWidth ? cardMaxWidth : "100%" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {imgUrl && (
          <CardMedia
            sx={{ height: imgHeight ? imgHeight : 150 }}
            image={imgUrl}
            className={`zoom-image ${isZoomed ? "zoomed" : ""}`}
          />
        )}
        <CardContent>
          {cardTitle && (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-bold"
            >
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
