import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  DrawerProps,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { Fragment, MouseEvent, useState } from "react";

type IProp = {
  links: {
    title: string;
    onClick?: () => void;
    subChild?: {
      title: string;
      onClick: () => void;
    }[];
  }[];
  bgColor?: string;
  fontColor?: string;
};

type TCustomStyle = {
  custombgcolor?: string;
  customfontcolor?: string;
};

const CAppBar = styled(
  ({ className, ...props }: AppBarProps & TCustomStyle) => (
    <AppBar {...props} classes={{ root: className }} />
  )
)`
  &.MuiAppBar-root {
    background-color: ${({ custombgcolor }) => custombgcolor};
    color: ${({ customfontcolor }) => customfontcolor};
  }
  .MuiButtonBase-root {
    color: ${({ customfontcolor }) => customfontcolor};
  }
`;

const CDrawer = styled(
  ({ className, ...props }: DrawerProps & TCustomStyle) => (
    <Drawer {...props} classes={{ root: className }} />
  )
)`
  .MuiPaper-root {
    background-color: ${({ custombgcolor }) => custombgcolor};
    color: ${({ customfontcolor }) => customfontcolor};
  }
`;

const NavigationBar: React.FC<IProp> = (props) => {
  const { links, bgColor = "", fontColor = "" } = props;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<{
    ref: HTMLElement | null;
    index: number | null;
  }>({
    ref: null,
    index: null,
  });
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const handleMenuOpen = (
    event: MouseEvent<
      HTMLButtonElement | HTMLDivElement,
      globalThis.MouseEvent
    >,
    index: number
  ) => {
    if (anchorEl.index !== index) {
      setAnchorEl({
        ref: event.currentTarget,
        index: index,
      });
    } else {
      handleMenuClose();
    }
  };

  const handleMenuClose = () => {
    setAnchorEl({
      ref: null,
      index: null,
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        COMMON LIBRARY
      </Typography>
      <Divider />
      <List>
        {links.map((item, index) => (
          <Fragment key={item.title}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={(e) => {
                  if (item.subChild) {
                    handleMenuOpen(e, index);
                  } else if (item.onClick) {
                    item.onClick();
                    handleDrawerToggle();
                  }
                }}
              >
                <ListItemText
                  primary={
                    <>
                      {item.title}
                      {item.subChild &&
                        (index === anchorEl.index ? (
                          <ExpandLess className="absolute" />
                        ) : (
                          <ExpandMore className="absolute" />
                        ))}
                    </>
                  }
                />
              </ListItemButton>
            </ListItem>

            <Collapse
              in={index === anchorEl.index ? true : false}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.subChild?.map((x, subIndex) => {
                  return (
                    <ListItemButton
                      sx={{ textAlign: "center" }}
                      key={`${x.title}-${item.title}-${index}-${subIndex}`}
                    >
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} className="top-header">
      <CssBaseline />
      <CAppBar
        component="nav"
        custombgcolor={bgColor}
        customfontcolor={fontColor}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            COMMON LIBRARY
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {links.map((item, index) =>
              item.subChild ? (
                <Fragment key={item.title}>
                  <Button
                    sx={{ color: "#fff" }}
                    onClick={(e) => handleMenuOpen(e, index)}
                  >
                    {item.title}
                  </Button>
                  {index === anchorEl.index && (
                    <Menu
                      anchorEl={anchorEl.ref}
                      open={Boolean(anchorEl.ref)}
                      onClose={handleMenuClose}
                      sx={{ display: { xs: "none", sm: "block" } }}
                    >
                      {item.subChild?.map((x) => {
                        return (
                          <MenuItem
                            onClick={handleMenuClose}
                            key={`sub-chil-${item.title}-${x.title}`}
                          >
                            {x.title}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  )}
                </Fragment>
              ) : (
                <Button
                  key={item.title}
                  sx={{ color: "#fff" }}
                  onClick={item.onClick}
                >
                  {item.title}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </CAppBar>
      <nav>
        <CDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
          custombgcolor={bgColor}
          customfontcolor={fontColor}
        >
          {drawer}
        </CDrawer>
      </nav>
    </Box>
  );
};

export default NavigationBar;
