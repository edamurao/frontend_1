import React from 'react';
import { Box, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';

const duration = '0.2s';
const distance = 8;
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        position: 'absolute',
        color: 'hsl(0, 0%, 100%)',
        textTransform: 'lowercase',
        fontWeight: '700',
        marginTop: theme.spacing(4),
        paddingLeft: theme.spacing(7),
        zIndex: theme.zIndex.appBar,
    },
    ulNav: {      
        paddingInlineStart: 0,          
        '& li': {
            display: 'inline-block',
            textAlign: 'center',            
        },
        '& a': {
            display: 'inline-block',
            width: theme.spacing(9),
            padding: theme.spacing(2, 0),
            margin: 0,
            textDecoration: 'none',
            textTransform: 'inherit',
            color: 'inherit',            
            fontWeight: '700',
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
                transform: `translateY(${distance/2}px)`,
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
            }
        },
    }
}));

export default function Header(props) {
    const classes = useStyles();
    return (
        <Toolbar className={classes.toolbar}>
            <Box pr={4}><Typography component='div' variant='h5'>Room</Typography></Box>            
            <ul className={classes.ulNav}>
                <li><Link href='#'>Home</Link></li>
                <li><Link href='#'>Shop</Link></li>
                <li><Link href='#'>About</Link></li>
                <li><Link href='#'>Contact</Link></li>
            </ul>
        </Toolbar>
    );
}