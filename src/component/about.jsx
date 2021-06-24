import React from 'react';
import { Box, Card, CardMedia, makeStyles } from '@material-ui/core';
import img_about_dark from '../assets/image-about-dark.jpg';
import img_about_light from '../assets/image-about-light.jpg';

const useStyles = makeStyles((theme) => ({
    media: {
        width: props => props.ratio * 420,
        height: props => props.ratio * 266,
    },
    title: {
        textTransform: 'uppercase',
        paddingBottom: theme.spacing(2)
    }
}));

export default function About(props) {
    const classes = useStyles({ ratio: .915 });
    return (<React.Fragment>
        <Box display='flex'>
            <Box>
                <Card square>
                    <CardMedia className={classes.media}
                        image={img_about_dark} />
                </Card>
            </Box>
            <Box p={5} flexGrow={1}>
                <Box fontWeight={700}
                    letterSpacing={5}                    
                    color='hsl(0, 0%, 0%)'
                    className={classes.title}>About our furniture</Box>
                <Box lineHeight={1.6}>Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
                </Box>
            </Box>
            <Box>
                <Card square>
                    <CardMedia className={classes.media}
                        image={img_about_light} />
                </Card>
            </Box>
        </Box>
    </React.Fragment>)
}