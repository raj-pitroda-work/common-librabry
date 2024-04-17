import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Accordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import * as React from "react";

type IProps = {
  bgHeader?: string;
  bgDetail?: string;
  contentDetail: {
    header: string;
    content: string;
    isDefaultOpen?: boolean;
  }[];
};

const CustomAccordion: React.FC<IProps> = (props) => {
  const { bgHeader, contentDetail, bgDetail } = props;
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: bgHeader ? bgHeader : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: bgDetail ? bgDetail : "",
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  return (
    <div>
      {contentDetail.map((item, index) => {
        const { content, header, isDefaultOpen } = item;
        return (
          <Accordion
            disableGutters
            key={`acc-item-${index}`}
            defaultExpanded={isDefaultOpen}
          >
            <AccordionSummary
              aria-controls={`panel${index}d-content`}
              id={`panel${index}d-header`}
            >
              {header}
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CustomAccordion;
