import React from 'react';
import { Box, Card, CardMedia, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import img_about_dark from '../assets/image-about-dark.jpg';
import img_about_light from '../assets/image-about-light.jpg';

const mediaWidth = 426;

const useStyles = makeStyles((theme) => ({
    mediaBox: {
        flex: props => `${((mediaWidth / props.containerWidth) * 100)}%`,
        backgroundColor: 'red',
    },
    media: {
        width: '100%',
        height: 266,
    },
    title: {
        textTransform: 'uppercase',
        paddingBottom: theme.spacing(2)
    },
    contentText: {
        flex: props=> `${100 - (((mediaWidth / props.containerWidth) * 100) * 2)}%`,
        padding: theme.spacing(10, 4),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 6),
            paddingLeft: `calc(${theme.spacing(5)}px + 2px)`,
            paddingRight: `calc(${theme.spacing(5)}px + 2px)`,
        }
    }
}));

export default function About(props) {
    const classes = useStyles({ containerWidth: props.containerWidth });
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    return (<React.Fragment>
        <Box display='flex'
            flexDirection={desktop ? 'row' : 'column'}>
            <Box className={classes.mediaBox}>
                <Card square>
                    <CardMedia className={classes.media}
                        image={img_about_dark} />
                </Card>
            </Box>
            <Box className={classes.contentText}>
                <Box display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    height='100%'>
                    <Box>
                        <Box fontWeight={700}
                            letterSpacing={5}
                            color='hsl(0, 0%, 0%)'
                            className={classes.title}>About our furniture</Box>
                        <Typography component='div' variant='body2'>Our multifunctional collection blends design and function to suit your individual taste.
                            Make each room unique, or pick a cohesive theme that best express your interests and what
                            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                            or anything in between. Product specialists are available to help you create your dream space.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.mediaBox}>
                <Card square>
                    <CardMedia className={classes.media}
                        image={img_about_light} />
                </Card>
            </Box>
        </Box>
    </React.Fragment>)
}