import { ListItem, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { ReactElement } from "react";
import { To, NavLink } from "react-router-dom";

export const ListNavLink: React.FC<{
  to: To;
  label: string;
  icon: ReactElement;
}> = ({ to, label, icon }) => {
  const theme = useTheme();

  return (
    <ListItem
      sx={{
        "&.active": {
          color: theme.palette.primary.main,
          pointerEvents: "none",
        },
        "&.active:hover": { background: "none" },
        "&.active svg": { fill: theme.palette.primary.main },
      }}
      button
      component={NavLink}
      to={to}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};
