import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { BlobImageDisplay } from "../apps/pages/BlobImageDisplay3";



const styles = theme => ({
    card: {
        width: '100%',
        display: "flex",
        flexWrap: "wrap",
        marginRight: "20px",
        marginBottom: "20px",
        marginTop:"20px",
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        } 
    },
    cardImage: {
        width: '54%',
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px",
        marginTop:"20px",
        border: `solid 3px #eeeeee`,
        borderRadius:"5",
        boxShadow:'5px 5px 5px #999DA0',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        } 
    },
    media: {
        minHeight: '280px',
        [theme.breakpoints.up('xl')]: {
            minHeight: '1366px'
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: 500
        }
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        color: "#fff"
    },
    titleComponent: {
       backgroundColor:"#051d47",
       width: "100%"
    },
    category: {
        color: 'rgb(153, 134, 67)',
        textTransform: 'uppercase',
        fontSize: '14px'
    },
    description: {
        fontSize: '14px',
        marginTop: 10,
        color: '#52535A',
        textAlign: 'justify'
    }
})

const NewsCard = (props) => {
    const {
        classes,
        profileName,
        linkName1,
        profileLink1,
        profileLink2,
        profileLink3,
        linkName2,
        linkName3,
    } = props
    return (
        <Card className={classes.card}>
            <CardContent className={classes.titleComponent}>
            <Typography variant="headline" component="h2" className={classes.title}>
                    {profileName}
                </Typography>
            </CardContent>
            <CardContent>
            <CardActions>
                <Fragment>
                    <Link prefetch to={profileLink1} style={{textDecoration:"none", color:"#051d47"}}>
                            {linkName1}
                    </Link>
                </Fragment>
            </CardActions>
            <CardActions>
                <Fragment>
                    <Link prefetch to={profileLink2} style={{textDecoration:"none", color:"#051d47"}}>
                            {linkName2}
                    </Link>
                </Fragment>
            </CardActions>
            <CardActions>
                <Fragment>
                    <Link prefetch to={profileLink3} style={{textDecoration:"none", color:"#051d47"}}>
                            {linkName3}
                    </Link>
                </Fragment>
            </CardActions>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(NewsCard)