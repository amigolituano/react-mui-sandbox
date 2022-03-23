import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AppBar = styled(MuiAppBar)(() => ({
  position: "relative",
  zIndex: 1300,
}));

export const Header = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <AppBar position="fixed">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onMenuClick}
        edge="start"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Persistent drawer
      </Typography>
    </Toolbar>
  </AppBar>
);
