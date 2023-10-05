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
import EventsCard from '../../components/EventsCard'
import { useTranslation, withTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const kegiatan_mahasiswa = (props) => {
    const [data, setData] = useState([]);
    const { classes} = props
    const { t } = useTranslation();
    useEffect(() => {
        fetch('http://localhost:8080/api/kegiatan') // Pastikan URL endpoint sesuai
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
                            <h2>{item[0].name}</h2>
                            <h2>{item[0].description}</h2>
                        </div>
                    ))}  */}

                    <div style={{ backgroundColor: '#e7e7e7' }}>
                <div className={classes.section}>
                    {/* <div className={classes.innerContainer}>
                        <Typography variant="display2" style={{ color: '#051d47' }} gutterBottom>
                            {t('Kegiatan Mahasiswa')}
                        </Typography>
                    </div> */}
                </div>
                <Grid container className={classes.contentContainer} style={{ justifyContent: 'center' }}>
                {data.map((item, index) => (
                    <EventsCard
                        // profileImg="https://franciscan.edu/wp-content/uploads/2023/01/March-for-Life-2022-768x512.jpg"
                        // profileName="Franciscan University President, Students Prepare for First Post-Roe March for Life in Washington, D.C."
                        // content="My choice to say Yes to giving my all even in those trying moments can be attributed to the growth and education I received at Franciscan."
                        // bgContain
                        key={index}
                        profileImg="https://franciscan.edu/wp-content/uploads/2023/01/March-for-Life-2022-768x512.jpg"
                        profileImgTitle="Mantapu Jiwa"
                        profileName={t(item[0].name)}
                        content={item[0].description}
                        bgContain
                    >
                    </EventsCard>
                    ))} 

                    {data.map((item, index) => (
                    <EventsCard
                        // profileImg="https://franciscan.edu/wp-content/uploads/2023/01/March-for-Life-2022-768x512.jpg"
                        // profileName="Franciscan University President, Students Prepare for First Post-Roe March for Life in Washington, D.C."
                        // content="My choice to say Yes to giving my all even in those trying moments can be attributed to the growth and education I received at Franciscan."
                        // bgContain
                        key={index}
                        profileImg="https://franciscan.edu/wp-content/uploads/2023/01/March-for-Life-2022-768x512.jpg"
                        profileImgTitle="Mantapu Jiwa"
                        profileName={item[1].name}
                        content={item[1].description}
                        bgContain

                    />
                    ))} 

                    <EventsCard
                        profileImg="https://franciscan.edu/wp-content/uploads/2023/01/March-for-Life-2022-768x512.jpg"
                        profileImgTitle="Mantapu Jiwa"
                        profileType="Alumni Profile"
                        profileName="Franciscan University President, Students Prepare for First Post-Roe March for Life in Washington, D.C."
                        content="My choice to say Yes to giving my all even in those trying moments can be attributed to the growth and education I received at Franciscan."
                        bgContain
                    />
                </Grid>
            <Grid container className={classes.Button} style={{ display: 'block', justifyContent: "center" }}>
                <div style = {{ backgroundColor: '#e7e7e7', margin: 10, padding: 10 }}>
                    <Button style={{ backgroundColor: '#051d47', float: 'left',color:'white' }} >Pos-Pos Lama</Button>
                </div>  
            </Grid>
            <Grid container className={classes.Button} style={{justifyContent: "center", margin: 10, padding: 10  }}>
            </Grid>
            </div>
        </Layout>
    )
}

const styles = theme => ({
    white: {
        color: '#fff'
    },
    card: {
        width: '100%'
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

export default withRoot(withStyles(styles)(withTranslation()(kegiatan_mahasiswa)))
