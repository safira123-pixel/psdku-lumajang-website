import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import TextSection from '../../components/TextSection'
import withRoot from '../../components/withRoot'
import SlideShow from '../../components/SlideShow'
import NewsCard from '../../components/NewsCard_profilLumajang'
import NewsCard2 from '../../components/NewsCard_NavBar'
import NewsCard1 from '../../components/NewsCard_NavBarKalender'
import NewsCard3 from '../../components/NewsCard_MenuNav'
import { useTranslation, withTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatIcon from '../../components/ChatIcon';
import ClipLoader from "react-spinners/ClipLoader";


const profil_lumajang = (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { classes} = props
    const { t } = useTranslation();

    // useEffect(() => {
    //     setTimeout(()=> {
    //     setLoading(false);
    //     }, 500);
    //     }, []);

        useEffect(() => {
            fetch('http://localhost:8080/api/kalender') // Pastikan URL endpoint sesuai
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
                            <Breadcrumb.Item href="/profil_lumajang"> {t('Kehidupan Kampus')}</Breadcrumb.Item>
                            <Breadcrumb.Item active href="/profil_lumajang"> {t('Profil Kota')}</Breadcrumb.Item>
                        </Breadcrumb>        
                    </div>
                </Card>
                <Grid container className={classes.contentContainer}>
                    <Grid item className={classes.gridItemFix} xs={12} sm={4} lg={9}>
                        {data.map((item, index) => (
                            <NewsCard
                                 key={index}
                                 profileName={t('Profil Kota Lumajang')}
                                 profileName1={t('Profil Kota')}
                                 profileImg={"/assets/images/peta.jpg"}
                                 content1={("Lumajang (Hanacaraka: ꦭꦸꦩꦗꦁ, Pegon: لوماجاڠ, Bahasa Jawa: Lumajâng) adalah sebuah kabupaten di Provinsi Jawa Timur, Indonesia. Ibu kotanya adalah Kecamatan Lumajang Kota. Kabupaten ini berbatasan dengan Kabupaten Probolinggo di utara, Kabupaten Jember di timur, Samudra Hindia di selatan, serta Kabupaten Malang di barat. Kabupaten Lumajang merupakan bagian dari wilayah Tapal Kuda Jawa Timur.")}
                                 content2={("Kabupaten Lumajang terletak pada 112°53'–113°23' Bujur Timur dan 7°54'–8°23' Lintang Selatan. Luas wilayah keseluruhan Kabupaten Lumajang adalah 1790,90 km2. Kabupaten Lumajang terdiri dari dataran yang subur karena diapit oleh tiga gunung berapi yaitu:")}
                                 content3={("1. Gunung Semeru (3.676 m)")}
                                 content4={("2.	Gunung Bromo (2.329 m)")}
                                 content5={("3.	Gunung Lemongan (1.651 m)")}
                                 content6={("Penduduk Kabupaten Lumajang umumnya adalah suku Jawa dan Suku Madura Pendalungan, dan agama mayoritas adalah Islam. Di Pegunungan Tengger Kecamatan Senduro (terutama di daerah Ranupane, Argosari, dan sekitarnya), terdapat masyarakat Tengger yang termasuk sub-suku Jawa yang memiliki bahasa khas dan beragama Hindu.")}
                                 profileName2={t('Sejarah Kota Lumajang')}
                                 profileImg2={"/assets/images/sejarah.jpg"}
                                 content8={("Prasasti Mula Malurung merupakan prasasti tertua yang mencatat keberadaan 'Nagara Lamajang' dan dianggap sebagai titik tolak hari jadi Lumajang. Prasasti ini ditemukan di Kediri pada tahun 1975 dan diterbitkan oleh Raja Kertanegara dari Singasari pada tahun 1177 Saka (setara dengan 1255 Masehi). Pada tanggal 15 Desember 1255 Masehi, Lumajang dianggap sudah merupakan sebuah negara yang berpenduduk dengan pemerintahan yang teratur.")}
                                 content9={("Sejarah Lumajang juga terkait dengan tokoh Aria Wiraraja yang mendukung Raden Wijaya dalam mendirikan Kerajaan Majapahit. Setelah Kerajaan Majapahit runtuh, wilayah Lumajang masuk pada masa pemerintahan kerajaan Blambangan dan kemudian dikuasai oleh keluarga Untung Suropati.")}
                                 content10={("Pada masa penjajahan Belanda, Lumajang awalnya merupakan bagian dari Pasuruan dan Probolinggo. Pada tahun 1882, Lumajang diangkat menjadi Afdeeling (setingkat kabupaten), dan pada tahun 1929, statusnya ditingkatkan menjadi Kabupaten.")}


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
        marginLeft: "20px",
        display:"flex"
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

export default withRoot(withStyles(styles)(withTranslation()(profil_lumajang)))
