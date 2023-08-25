import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Layout from '../../components/Layout'
import withRoot from '../../components/withRoot'
import { withTranslation } from 'react-i18next'
import TextSection from '../../components/TextSection'
import Pictures from '../../components/Pictures'

const visi_misi = (props) => {
    const { classes, t } = props
    const gridStyle = {
        backgroundColor: '#051d47'
    }
    return (
        <Layout title="Visi dan Misi" >
            <Pictures/>
            <Grid container className={classes.contentContainer} style={gridStyle}>
                <Grid item className={classes.gridItemFix} xs={12}>
                <Typography
                    variant="display2"
                    gutterBottom
                    style={{ textAlign: 'center', color: '#fff' }}
>
                Visi
                </Typography>
                </Grid>
            </Grid>
            <TextSection
                text="Menjadi Lembaga Pendidikan Tinggi Vokasi yang Unggul dalam Persaingan Global"
                bgColor="#fff"
                textColor=""
                borderColor="#998643"
                padding="12px 0"
                darkBg={true}
            />
            <Grid container className={classes.contentContainer} style={gridStyle}>
                <Grid item className={classes.gridItemFix} xs={12}>
                <Typography
                    variant="display2"
                    gutterBottom
                    style={{ textAlign: 'center', color: '#fff' }}
>
                Misi
                </Typography>
                </Grid>
            </Grid>
            <TextSection
                text="1. Menyelenggarakan dan Mengembangkan Pendidikan Vokasi yang Berkualitas, Inovatif, dan Berdaya Saing yang Mendorong Pola Pembelajaran Seumur Hidup dan Tumbuhnya Jiwa Kewirausahaan serta Sesuai Kebutuhan Industri, Lembaga Pemerintah, dan Masyarakat."
                bgColor="#fff"
                textColor=""
                padding="12px 0"
                darkBg={true}
            />
            <TextSection
                text="2. Menyelenggarakan Penelitian Terapan yang Bermanfaat bagi Pengembangan Ilmu Pengetahuan dan Teknologi serta Kesejahteraan Masyarakat."
                bgColor="#fff"
                textColor=""
                padding="12px 0"
                darkBg={true}
            />
            <TextSection
                text="3. Menyelenggarakan Pengabdian Kepada Masyarakat yang Bermanfaat bagi Kesejahteraan Masyarakat."
                bgColor="#fff"
                textColor=""
                padding="12px 0"
                darkBg={true}
            />
            <TextSection
                text="4. Menyelenggarakan Sistem Pengelolaan Pendidikan dengan Berdasar pada Prinsip-prinsip Tatapamong yang Baik."
                bgColor="#fff"
                textColor=""
                padding="12px 0"
                darkBg={true}
            />
            <TextSection
                text="5. Mengembangkan Kerjasama yang Saling Menguntungkan dengan Berbaga Pihak, baik di Dalam maupun di Luar Negeri pada Bidang-bidang yang Relevan."
                bgColor="#fff"
                textColor=""
                padding="12px 0"
                darkBg={true}
            />
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

export default withRoot(withStyles(styles)(withTranslation()(visi_misi)))
