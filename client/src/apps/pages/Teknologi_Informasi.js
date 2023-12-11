import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import TextSection from '../../components/TextSection'
import withRoot from '../../components/withRoot'
import SlideShow from '../../components/SlideShow'
import NewsCard from '../../components/NewsCard_Jurusan'
import NewsCard2 from '../../components/NewsCard_NavBar'
import NewsCard1 from '../../components/NewsCard_NavBarKalender'
import NewsCard3 from '../../components/NewsCard_MenuNav'
import { useTranslation, withTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatIcon from '../../components/ChatIcon';
import ClipLoader from "react-spinners/ClipLoader";


const teknologi_informasi = (props) => {
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);
    const { classes} = props
    const { t } = useTranslation();

    useEffect(() => {
        fetch('http://localhost:8080/api/department') // Pastikan URL endpoint sesuai
        .then(response => response.json())
        .then(data => {
            setData([data.content]);
            setLoading(false); // Set loading to false when data is loaded
            console.log(data.content);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    return (
        <div>
        {loading ? (
          <div className={classes.spinnerContainer}>
            <ClipLoader color="#051d47" loading={loading} size={50} />
          </div>
        ) : (
        <div style={{backgroundImage: 'url("/assets/images/bg_polinema1.png")', backgroundRepeat: 'repeat', backgroundSize: 900}}>
        <Layout title="Home">
              <Card className={classes.card}>
                    <div className={classes.container}>
                        <Breadcrumb style={{marginTop:"10px"}}>
                            <Breadcrumb.Item href="/"> {t('beranda.label')}</Breadcrumb.Item>
                            <Breadcrumb.Item href="/teknologi_informasi"> {t('Program Studi')}</Breadcrumb.Item>
                            <Breadcrumb.Item active href="/teknologi_informasi"> {t('TI')}</Breadcrumb.Item>
                        </Breadcrumb>        
                    </div>
                </Card>
                <Grid container className={classes.contentContainer}>
                    <Grid item className={classes.gridItemFix} xs={12} sm={4} lg={9}>
                        {data.map((item, index) => (
                            <NewsCard
                                 key={index}
                                 profileName={t('TI')}           
                                //  profileImg={item[3].data}
                                 profileImg1={item[9].data}
                                 profileImg2={item[10].data}
                                 profileImg3={item[11].data}
                                 title1={t('Deskripsi')} 
                                 content1={item[9].description}
                                 title2={t('Kompetensi Lulusan')}  
                                 content2={item[9].kompetensi}
                                 title3={t('Peluang Kerja')}  
                                 content3={item[9].peluang}
                            />
                        ))}
                    </Grid>
                
                    <Grid item className={classes.gridItemFix} xs={10} sm={4} lg={3}>
                        <NewsCard1/>
                        <Grid>                    
                                <NewsCard2
                                    profileName= "PENGUMUMAN"
                                    subMenu1= "2023"
                                    subMenu2= "2022"
                                    subMenu3= "2021"
                                    linkName1={t('> Kegiatan Mentoring 2023')}
                                    profileLink1="/kegiatan_mahasiswa1"
                                    linkName2={t('> Kegiatan LDK 2023')}
                                    profileLink2="/kegiatan_mahasiswa2"
                                    linkName3={t('> Kegiatan Magang 2023')}
                                    profileLink3="/kegiatan_mahasiswa3"
                                    linkName4={t('> Kegiatan Mentoring 2023')}
                                    profileLink4="/kegiatan_mahasiswa1"
                                    linkName5={t('> Kegiatan LDK 2023')}
                                    profileLink5="/kegiatan_mahasiswa2"
                                    linkName6={t('> Kegiatan Magang 2023')}
                                    profileLink6="/kegiatan_mahasiswa3"
                                    linkName7={t('> Kegiatan Mentoring 2023')}
                                    profileLink7="/kegiatan_mahasiswa1"
                                    linkName8={t('> Kegiatan LDK 2023')}
                                    profileLink8="/kegiatan_mahasiswa2"
                                    linkName9={t('> Kegiatan Magang 2023')}
                                    profileLink9="/kegiatan_mahasiswa3"
                                />
                            </Grid>
                            <Grid>                    
                            <NewsCard3
                                    profileName= "MENU NAVIGASI"
                                    linkName1={t('Profil Lumajang')}
                                    profileLink1="/profil_lumajang"
                                    linkName2={t('Budaya Lumajang')}
                                    profileLink2="/budaya_lumajang"
                                    linkName3={t('Pariwisata Lumajang')}
                                    profileLink3="/pariwisata_lumajang"
                                    linkName4={t('Kuliner Lumajang')}
                                    profileLink4="/kuliner_lumajang"
                                    linkName5={t('Transportasi Lumajang')}
                                    profileLink5="/transportasi_lumajang"
                                />
                            </Grid>
                    </Grid>
                </Grid>
        </Layout>
        <ChatIcon/>
        </div>
        )}
        </div>
    )
}

const styles = theme => ({
    container: {
        marginLeft: "20px"
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
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        } 
    },
    cardContent: {
        width: '97%',
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px",
        marginTop:"20px",
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        } 

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
    },
    spinnerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
      spinnerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
})

export default withRoot(withStyles(styles)(withTranslation()(teknologi_informasi)))
