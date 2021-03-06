import React from 'react';
import { Box, Button, Card, CardMedia, Link, makeStyles, Typography, useMediaQuery, useTheme, withStyles, SvgIcon } from '@material-ui/core';
import desktop_img_hero_1 from '../assets/desktop-image-hero-1.jpg';
import desktop_img_hero_2 from '../assets/desktop-image-hero-2.jpg';
import desktop_img_hero_3 from '../assets/desktop-image-hero-3.jpg';
import mobile_img_hero_1 from '../assets/mobile-image-hero-1.jpg';
import mobile_img_hero_2 from '../assets/mobile-image-hero-2.jpg';
import mobile_img_hero_3 from '../assets/mobile-image-hero-3.jpg';
import { ReactComponent as ArrowIcon } from '../assets/icon-arrow.svg';
import { ReactComponent as AngleRightIcon } from '../assets/icon-angle-right.svg';
import { ReactComponent as AngleLeftIcon } from '../assets/icon-angle-left.svg';
import Slider from 'react-slick';

const mediaWidth = 862;

const useStyles = makeStyles((theme) => ({
    content: {
        position: 'relative',
    },
    contentMedia: {
        [theme.breakpoints.up('md')]: {
            flex: props => `${((mediaWidth / props.containerWidth) * 100)}%`
        }
    },
    media: {
        width: '100%',
        height: 360,
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: 534,
        }
    },
    contentTitle: {
        fontSize: 29,
        lineHeight: '2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: 39,
            lineHeight: '2.8rem',
        }
    },
    contentText: {
        padding: theme.spacing(10, 4),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 10),
            flex: props => `${100 - ((mediaWidth / props.containerWidth) * 100)}%`,
        }
    },
    nav: {
        display: 'inline-block',
        position: 'absolute',
        top: 360 - 64,
        right: 0,
        [theme.breakpoints.up('md')]: {
            left: props => `${((mediaWidth / props.containerWidth) * 100)}%`,
            top: 'initial',
            bottom: 0,
        },
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
        padding: '23.43px 17px 23.43px 23px',
        [theme.breakpoints.up('md')]: {
            padding: '26px 20px 26px 32px',
            '& svg': {
                fontSize: '1.5rem',
            }
        }
    },
}))(Button);

const ShopNowLink = withStyles((theme) => ({
    root: {
        color: 'hsl(0, 0%, 27%)',
        fontWeight: '600',
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
    const classes = useStyles({ containerWidth: props.containerWidth });
    const sliderRef = React.useRef();
    const theme = useTheme();
    const mediaDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const contentArray = [
        {
            img: mediaDesktop ? desktop_img_hero_1 : mobile_img_hero_1,
            title: 'Discover innovative ways to decorate',
            content: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        },
        {
            img: mediaDesktop ? desktop_img_hero_2 : mobile_img_hero_2,
            title: 'We are available all across the globe',
            content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we???re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            img: mediaDesktop ? desktop_img_hero_3 : mobile_img_hero_3,
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
        return (<Box display='flex'
            flexDirection={mediaDesktop ? 'row' : 'column'}>
            <Box className={classes.contentMedia}>
                <Card square>
                    <CardMedia className={classes.media}
                        image={data.content.img} />
                </Card>
            </Box>
            <Box
                className={classes.contentText}>
                <Box display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    height='100%'
                >
                    <Typography componet='div' variant='h4' className={classes.contentTitle}>
                        <Box component='div' color='hsl(0, 0%, 0%)' mb={3}>{data.content.title}</Box>
                    </Typography>
                    <Typography component='div' variant='body2'>{data.content.content}</Typography>
                    <Box pt={4} letterSpacing={6} fontWeight={700}>
                        <ShopNowLink href='#' underline='none'>SHOP NOW <ArrowIcon /></ShopNowLink>
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

    return (<Box className={classes.content} postion='relative'>
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
        <Box className={classes.nav}>
            <ArrowButton disableFocusRipple variant='contained' onClick={handlePreviousClick}>
                <SvgIcon fontSize='small' component={AngleLeftIcon} />
            </ArrowButton>
            <ArrowButton variant='contained' onClick={handleNextClick}>
                <SvgIcon
                    fontSize='small'
                    component={AngleRightIcon} />
            </ArrowButton>
        </Box>
    </Box>)
}