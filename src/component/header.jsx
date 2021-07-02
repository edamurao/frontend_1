import React, { useState } from 'react';
import { Box, Link, makeStyles, Toolbar, useMediaQuery, useTheme, IconButton, Dialog } from '@material-ui/core';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as HamburgerIcon } from '../assets/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../assets/icon-close.svg';
import { useEffect } from 'react';

const duration = '0.2s';
const distance = 8;
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        position: 'absolute',
        color: 'hsl(0, 0%, 0%)',
        textTransform: 'lowercase',
        zIndex: theme.zIndex.appBar,
        width: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(7),
            color: 'hsl(0, 0%, 100%)',
            marginTop: theme.spacing(2),
            width: 'initial'
        }
    },
    mobileMenu: {
        '& .MuiDialog-scrollPaper': {
            alignItems: 'baseline',
        },
        '& .MuiDialog-paper': {
            margin: 0,
            width: '100%',
            borderRadius: 0
        },
        '& ul': {
            marginLeft: 'auto'
        }
    },
    logo: {
        width: '100%',
        paddingRight: 44,
        '& svg': {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(4),
            width: 'initial',
            '& svg': {
                marginLeft: 'initial ',
                marginRight: 'initial',
            },
        }
    },
    ulNav: {
        fontWeight: 700,

        paddingInlineStart: 0,
        '& li': {
            display: 'inline-block',
            textAlign: 'center',
        },
        '& a': {
            padding: theme.spacing(3, 0),

            display: 'inline-block',
            width: theme.spacing(9),
            margin: 0,
            textDecoration: 'none',
            textTransform: 'lowercase',
            color: 'inherit',
            position: 'relative',
            '&:hover': {
                textDecoration: 'inherit'
            },
            '&:before, &:after': {
                content: "''",
                position: 'absolute',
                bottom: theme.spacing(1),
                left: 28,
                right: 0,
                height: 2,
                backgroundColor: 'hsl(0, 0%, 100%)',
                width: theme.spacing(2)
            },
            '&:before': {
                opacity: 0,
                transform: `translateY(-${distance}px)`,
                transition: `transform 0s ${easeOutBack}, opacity 0s`,
            },
            '&:after': {
                opacity: 0,
                transform: `translateY(${distance / 2}px)`,
                transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
            },
            '&:hover, &:focus': {
                '&:before, &:after': {
                    opacity: 1,
                    transform: 'translateY(0)',
                },
                '&:before': {
                    transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
                },
                '&:after': {
                    transition: `transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration}`
                },
            },
            [theme.breakpoints.up('lg')]: {
                padding: theme.spacing(2, 0),                
            }
        },
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const theme = useTheme();
    const mediaDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    useEffect(() => {
        if(showMobileMenu)
            setShowMobileMenu(false);
    }, [mediaDesktop]);

    const handleMobileMenuClick = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    const handleCloseMobileMenu = () => {
        setShowMobileMenu(false);
    }

    const MenuList = () => {
        return (
            <ul className={classes.ulNav}>
                <li><Link href='#'>Home</Link></li>
                <li><Link href='#'>Shop</Link></li>
                <li><Link href='#'>About</Link></li>
                <li><Link href='#'>Contact</Link></li>
            </ul>
        )
    }

    return (<React.Fragment>
        <Toolbar className={classes.toolbar}>
            {!mediaDesktop && (<IconButton onClick={handleMobileMenuClick}>
                <HamburgerIcon />
            </IconButton>)}
            <Box display='flex'
                alignItems='center'
                height='100%'
                className={classes.logo}>
                <Logo />
            </Box>
            {(mediaDesktop) && (
                <MenuList />
            )}
        </Toolbar>
        <Dialog
            open={showMobileMenu}
            onClose={handleCloseMobileMenu}
            className={classes.mobileMenu}
            fullWidth
            maxWidth='xl'
            >
            <Toolbar>
                <IconButton onClick={handleMobileMenuClick}>
                    <CloseIcon />
                </IconButton>
                <MenuList />
            </Toolbar>
        </Dialog>
    </React.Fragment>
    );
}