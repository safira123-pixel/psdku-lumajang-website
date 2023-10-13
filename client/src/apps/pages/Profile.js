import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import TextSection from '../../components/TextSection'
import withRoot from '../../components/withRoot'
import SlideShow from '../../components/SlideShow'
import NewsCard from '../../components/NewsCard'
import { useTranslation, withTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'
// import { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlobImageDisplay } from './BlobImageDisplay1'


const Profile = (props) => {
    const cardContent = `BreadCrumbs.`;
    const [data, setData] = useState([]);
    const { classes} = props
    const { t } = useTranslation();
    useEffect(() => {
        fetch('http://localhost:8080/api/profil') // Pastikan URL endpoint sesuai
        .then(response => response.json())
        .then(data => {
            setData([data.content]);
            console.log(data.content);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <Layout title="Home">
            {/* {data.map((item, index) => (
                        <div key={index}>
                            <h2>{item[1].name}</h2>
                            <h2>{item[1].description}</h2>
                        </div>
                    ))} */}
        <Card className={classes.card}>
            <div class="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/"> {t('beranda.label')}</Breadcrumb.Item>
          <Breadcrumb.Item href="/profile"> {t('Profil')}</Breadcrumb.Item>
          <Breadcrumb.Item href="/profile"> {t('Profil')}</Breadcrumb.Item>
        </Breadcrumb>        
      </div>
      </Card>
      <Card className={classes.cardContent}>
            <Grid item xs={12} sm={10} className={classes.section}>
                <div className={classes.innerContainer} style={{justifyContent: "left", marginLeft: '30px' }}>
                    <Typography variant="display2" style={{ color: '#051d47', textAlign: "left", marginLeft: '0px' }} gutterBottom>
                        {t('Profilku')}
                    </Typography>
                </div>

                {data.map((item, index) => (
                    <div key={index} className={classes.innerContainer} style={{justifyContent: "left", marginLeft: '30px' }}>
                        <Typography component="p" style={{ color: '#051d47', textAlign: "left", marginLeft: '0px', fontSize: '16px' }} gutterBottom>
                            <h2>{item[0].description}</h2>
                            <h2>{item[1].description}</h2>
                        </Typography>
                    </div>
                ))}

                {data.map((item, index) => (
                    <div key={index} className={classes.innerContainer} style={{justifyContent: "left", marginLeft: '30px', fontSize: '14px'  }}>
                        <Typography component="p" style={{ color: '#051d47', textAlign: "left", marginLeft: '0px', fontSize: '14px' }} gutterBottom>
                            <h2>{item[2].description}</h2>
                            <h2>{item[3].description}</h2>
                            <h2>{item[5].description}</h2>
                        </Typography>
                    </div>
                ))}

                {data.map((item, index) => (
                    <div key={index} className={classes.innerContainer} style={{justifyContent: "left", marginLeft: '30px', fontSize: '14px'  }}>
                                    <BlobImageDisplay blob={item[4].data} className={classes.image}/>
                        <Typography component="p" style={{ color: '#051d47', textAlign: "left", marginLeft: '0px', fontSize: '14px' }} gutterBottom>
                            <h2>{item[3].description}</h2>
                            <h2>{item[2].description}</h2>
                            <h2>{item[1].description}</h2>
                            <h2>{item[0].description}</h2>
                        </Typography>
                    </div>
                ))}
            </Grid>
            </Card>
        </Layout>
    )
}

const styles = theme => ({
    white: {
        color: '#fff'
    },
    card: {
        width: '97%',
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px",
        marginTop:"20px", 
        backgroundColor:"#FFD700",
    },
    cardContent: {
        width: '97%',
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px",
        marginTop:"20px", 
    },
    media: {
        minHeight: 280,
        [theme.breakpoints.up('xl')]: {
            minHeight: 1366
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: '400px'
        }
    },
    gridItemFix: {
        width: '100%',
        padding: '16px',
        [theme.breakpoints.down('sm')]: {
            padding: '8px'
        }
    },
    contentContainer: {
        width: '100%',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '85%'
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '95%'
        }
    },
    listItem: {
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'start'
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: 0
    },
    degreeList: {
        listStyleType: 'none'
    },
    avatarBig: {
        width: '200px',
        height: '200px',
        [theme.breakpoints.down('sm')]: {
            width: '100px',
            height: '100px'
        }
    },
    listItemTextBig: {
        fontSize: '34px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px'
        }
    },
    videoIframe: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        border: 'none'
    },
    videoIframeContainer: {
        width: '100%',
        height: 0,
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: '56.25%'
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '38px 0',
        textAlign: 'center'
    },
    innerContainer: {
        width: '70%',
        margin: '0 auto'
    },
    sectionText: {
        fontSize: '28px',
        fontWeight: 400,
        lineHeight: 1.5
    },
    heroBtn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '16px'
    },
    invertedBtn: {
        color: '#051d47',
        backgroundColor: 'transparent',
        border: '2px #051d47 solid',
        boxShadow: 'none'
    }
})

export default withRoot(withStyles(styles)(withTranslation()(Profile)))

