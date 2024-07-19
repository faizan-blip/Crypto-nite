"use client"
import * as React from 'react';
import { styled, useTheme,alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, ListItemIcon, ListItemText, Stack } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import { usePathname, useRouter} from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { AppContext } from '../Context/AppContext';
import Explore from './Explore';
import Home from './Hero';
import Productid from '../explore/[id]/page';


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const router = useRouter()
  const pathname = usePathname()
  const extractId = () => {
    if (pathname.startsWith('/explore/')) {
        return pathname.split('/').pop();
    }
    return null;
};

var id = extractId()


  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Explore', icon: <ExploreIcon />, path: '/explore' },
  ];
  const {isDarkmode ,toggleDarkMode } = React.useContext(AppContext)
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: isDarkmode ? '#020716' : '#e2e2e2',
    '&:hover': {
      backgroundColor:  isDarkmode ? '#252525' : '#969ba0',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundColor: isDarkmode ? '#121212' : '#fff', 
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': {
          ...openedMixin(theme),
          backgroundColor: isDarkmode ? '#121212' : '#fff', 
        },
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': {
          ...closedMixin(theme),
          backgroundColor: isDarkmode ? '#121212' : '#fff',
        },
      }),
    })
  );
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: isDarkmode ? '#121212' : '#fff', justifyContent: "space-between" }}>
  <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
    <Stack flexDirection='row'>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{
        marginRight: 5,
        ...(open && { display: 'none' }),
      }}
    >
      <MenuIcon sx={{ color: "#6418c3" }} />
    </IconButton>
    
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
    </Stack>
    <DarkModeSwitch
      checked={isDarkmode}
      onChange={toggleDarkMode}
      size={40}
    />
  </Toolbar>
</AppBar>

      <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ display: "flex", justifyContent: "space-between" }}>
  <Stack flexDirection="row" gap="0.5em" alignItems="center">
    <Box component="img" src="/gamecredits-game-logo.svg" sx={{ width: "40px" }} />
      <Typography variant="h6" noWrap component="div" color= {!isDarkmode ? '#0a0c0d' : '#fff'}>
        Crypto-nite
      </Typography>
  </Stack>
  <IconButton onClick={handleDrawerClose}>
    {theme.direction === "rtl" ? <ChevronRightIcon sx={{ color: "#6418c3" }} /> : <ChevronLeftIcon sx={{ color: "#6418c3" }} />}
  </IconButton>
</DrawerHeader>

        <Divider />
        <List>
      {menuItems.map(({ text, icon, path }, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={() => router.push(path)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: pathname === path ? '#6418c3' : '#969ba0',
              }}
            >
              {index % 2 !== 0 ? <ExploreIcon /> : <HomeIcon />}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{
                opacity: open ? 1 : 0,
                color: pathname === path ? '#6418c3' : '#969ba0',
                fontWeight: 'bold',
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3  , background:isDarkmode ? '#2a2929' : '#f7f7f7'}}>
        <DrawerHeader />
     {
        pathname === '/' ? (
           <Home/>
        ) :  pathname === '/explore' ?(
            <Explore/>
        ) : pathname === `/explore/${id}` && (
           <Productid/>
        ) 
     }
      </Box>
    </Box>
  );
}
