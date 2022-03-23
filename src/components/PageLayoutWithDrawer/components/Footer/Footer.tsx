import { styled, Typography } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
  boxShadow: theme.shadows[10],
  padding: theme.spacing(1.5),
  textAlign: "center",
  position: "relative",
  zIndex: 1300,
}));

export const Footer = () => (
  <StyledFooter>
    <Typography fontSize={14}>React MUI sandbox.</Typography>
  </StyledFooter>
);
