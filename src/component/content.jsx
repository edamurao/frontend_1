import React from 'react';
import { Box, Button, Card, CardMedia, Link, makeStyles, Typography, withStyles } from '@material-ui/core';
import desktop_img_hero_1 from '../assets/desktop-image-hero-1.jpg';
import desktop_img_hero_2 from '../assets/desktop-image-hero-2.jpg';
import desktop_img_hero_3 from '../assets/desktop-image-hero-3.jpg';
import { ReactComponent as ArrowIcon } from '../assets/icon-arrow.svg';
import { ReactComponent as AngleRightIcon } from '../assets/icon-angle-right.svg';
import { ReactComponent as AngleLeftIcon } from '../assets/icon-angle-left.svg';
import Slider from 'react-slick';

const useStyles = makeStyles((theme) => ({
    content: {
        position: 'relative',
    },
    media: {
        '& .MuiCardMedia-root': {
            width: props => props.ratio * 840,
            height: props => props.ratio * 534,
        }
    },
    mediaMain: {
        width: props => props.ratio * 840,
        height: props => props.ratio * 534,
    },
    nav: {
        right: theme.spacing(48),
        bottom: 0,
        '& svg': {
            margin: '0 5px',
        }
    },
    slider: {
        '& .slick-list': {
            overflow: 'hidden',
        },
        '& .slick-slide': {
            display: 'block',
            float: 'left'
        }
    }
}))

const ArrowButton = withStyles((theme) => ({
    root: {
        backgroundColor: 'hsl(0, 0%, 0%)',
        borderRadius: 0,
        padding: theme.spacing(3),
    },
}))(Button);

const ShopNowLink = withStyles((theme) => ({
    root: {
        color: 'hsl(0, 0%, 27%)',
        '& svg': {
            stroke: 'hsl(0, 0%, 27%)',
            fill: 'hsl(0, 0%, 27%)',
        }, 
        '&:hover': {
            color: 'hsl(0, 0%, 63%)',
            '& svg': {
                stroke: 'hsl(0, 0%, 63%)',
                fill: 'hsl(0, 0%, 63%)',
            },
        }
    }
}))(Link);

export default function Content(props) {
    const classes = useStyles({ ratio: .895 });
    const sliderRef = React.useRef();
    const contentArray = [
        {
            img: desktop_img_hero_1,
            title: 'Discover innovative ways to decorate',
            content: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        },
        {
            img: desktop_img_hero_2,
            title: 'We are available all across the globe',
            content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            img: desktop_img_hero_3,
            title: 'Manufactured with the best materials',
            content: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
        }
    ];

    const handlePreviousClick = () => {
        sliderRef.current.slickPrev();
    }

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    }

    const ContentTemplate = (data) => {
        return (<Box display='flex'>
            <Box>
                <Card square className={classes.media}>
                    <CardMedia
                        image={data.content.img} />
                </Card>
            </Box>
            <Box flexGrow={1} px={11} position='relative'>
                <Box display='flex'
                    flex={1}
                    flexDirection='column'
                    justifyContent='center'
                    height='100%'>
                    <Typography componet='div' variant='h4'>
                        <Box component='div' fontWeight={700} color='hsl(0, 0%, 0%)' mb={3}>{data.content.title}</Box>
                    </Typography>
                    <Box lineHeight={1.5}>{data.content.content}</Box>
                    <Box pt={4} letterSpacing={6} fontWeight={700}>
                        <ShopNowLink href='#' underline='none' onClick={() => {
                            console.log(data.index);
                        }}>SHOP NOW <ArrowIcon /></ShopNowLink>
                    </Box>
                </Box>
            </Box>
        </Box>)
    }

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
    };

    return (<Box className={classes.content}>
        <Slider
            ref={slider => (sliderRef.current = slider)}
            {...sliderSettings}
            className={classes.slider}>
            {contentArray.map((item, index) => (
                <ContentTemplate
                    key={index}
                    content={item}
                    index={index} />
            ))}
        </Slider>
        <Box display='inline' position='absolute' className={classes.nav}>
            <ArrowButton variant='contained' onClick={handlePreviousClick}>
                <AngleLeftIcon />
            </ArrowButton>
            <ArrowButton variant='contained' onClick={handleNextClick}>
                <AngleRightIcon />
            </ArrowButton>
        </Box>
    </Box>)
}