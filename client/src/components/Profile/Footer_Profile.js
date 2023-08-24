import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    const { classes } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div className={classes.root}>
        {/* <Grid
          container
          spacing={0}
          className={classNames(classes.footerText, classes.footerSections)} */}
        {/* > */}
          {/* <Grid item xs={12} sm={4}>
            <div vocab="http://schema.org/" typeof="Organization">
              <span property="name">Franciscan University of Steubenville</span>
              <div property="address" typeof="PostalAddress">
                <span property="streetAddress">1235 University Boulevard</span>
                <span property="addressLocality" style={{ display: 'block' }}>
                  Steubenville, Ohio{' '}
                </span>
                <span property="postalCode">43952</span>
              </div>
              <span property="telephone">(740) 283-3771</span>
            </div>
          </Grid> */}
          {/* <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: 'center' }}
                item
                xs={12}
              >
                <InvertedButton
                  style={{ width: '200px' }}
                  className={classes.invertedBtnDark}
                  to="https://franciscan.secure.force.com/form?formid=217772"
                  title="Request Info"
                >
                  Request Info
                </InvertedButton>
              </Grid>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: 'flex-end' }}
                item
                xs={6}
              >
                <InvertedButton
                  style={{ width: '92px' }}
                  className={classes.invertedBtnDark}
                  to="https://franciscanuniversity.force.com/portal"
                  title="Apply"
                >
                  Apply
                </InvertedButton>
              </Grid>
              <Grid className={classes.flexContainer} item xs={6}>
                <InvertedButton
                  style={{ width: '92px' }}
                  className={classes.invertedBtnDark}
                  to="https://franciscan.secure.force.com/events"
                  title="Visit"
                >
                  Visit
                </InvertedButton>
              </Grid>
            </Grid>
          </Grid> */}
          {/* <Grid item xs={12} sm={4}>
            <ul style={{ listStyle: 'none', margin: 0 }}>
              <li>
                <Link
                  prefetch={true}
                  as="/contact"
                  to="/page?type=aboutPages&id=contact"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/ferpa"
                  to="/page?type=aboutPages&id=ferpa"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/directions-and-attractions"
                  to="/page?type=aboutPages&id=directions-and-attractions"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Directions
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/consumer-information/non-discrimination/"
                  to="/page?type=aboutPages&id=non-discrimination"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Nondiscrimination Statement
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/consumer-information"
                  to="/page?type=aboutPages&id=consumer-information"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Consumer Information
                  </a>
                </Link>
              </li>
            </ul>
          </Grid> */}
        {/* </Grid> */}
        <Grid className={classes.subFooter} item xs={12}>
          <div className={classes.rootImage}>
              <img src='./assets/images/logo-polinema-footer.png' alt='Polinema' style={{ marginBottom: 20, width: '300px' }} />
            </div>
            <div class="menu-footer-program-studi-container">
            <ul id="secondary-menu" class="menu">
              <a style={{ color: 'white'}}>Program Studi</a><br></br>
              <li id="menu-item-682" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-682"><a href="#" style={{ color: 'white'}}>D-IV Teknologi Rekayasa Otomotif</a></li>
              <li id="menu-item-680" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-680"><a href="#" style={{ color: 'white'}}>D-III Teknologi Sipil</a></li>
              <li id="menu-item-326" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-326"><a href="#" style={{ color: 'white'}}>D-III Akutansi</a></li>
              <li id="menu-item-325" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-325"><a href="#" style={{ color: 'white'}}>D-III Teknologi Informasi</a></li>
              </ul>
              <ul id="secondary-menu" class="menu">
              <a href="#"><img src="https://www.linkpicture.com/q/pngwing.com_71.png" width="20" alt="Icon"/></a>    <a href="#"><img src="https://www.linkpicture.com/q/pngwing.com-1_32.png" width="20" alt="Icon"/></a>   <a href="#"><img src="https://www.linkpicture.com/q/pngwing.com-2_6.png" width="20" alt="Icon"/></a>
              </ul>
           </div>
           <div>
           <ul id="secondary-menu" class="menu">
           <a style={{color:'white'}}>Program Studi Diluar Kampus Utama (PSDKU) Lumajang adalah <br></br>bagian dari Politeknik Negeri Malang yang memiliki keberadaan <br></br>di luar kampus utama untuk memberikan pendidikan vokasi <br></br>berkualitas di daerah Lumajang, Jawa Timur, Indonesia</a>
           <br></br>
           <br></br>
           <a style={{color:'white'}}>Alamat : V66V+446, Area Sawah/Kebun, Jogoyudan, Kec. Lumajang, <br></br>Kabupaten Lumajang, Jawa Timur 67316</a>
           </ul>
           </div>
         
        </Grid>
        <Grid className={classes.subFooter1} item xs={12}>
        <div className={classes.rootImage}>
           <Typography
                className={classes.white}
                variant="subheading"
                component={'span'}
                style={{ fontSize: 14}}
              >
                © {currentYear} PSDKU Polinema Kampus Lumajang
              </Typography>
</div>
</Grid>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    marginTop: 30,
    backgroundColor: `#051d47`,
    borderTop: 'solid 3px #998643',
    paddingTop: '16px',
    overflowX: 'hidden'
  },
  footerSections: {
    margin: '0 16px'
  },
  subFooter: {
    backgroundColor: '#051d47',
    padding: '8px 16px 8px 16px',
    marginTop: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subFooter1: {
    backgroundColor: '#051d47',
    padding: '8px 16px 8px 16px',
    marginTop: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'column',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: 1.5
  },
  invertedBtnDark: {
    color: '#fff',
    backgroundColor: 'transparent',
    border: '2px #fff solid',
    boxShadow: 'none',
    margin: '8px'
  },
  white: {
    color: '#ffffff'
  },
  flexContainer: {
    display: 'flex'
  },
  childFooter: {
    maxWidth: '50%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'right',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      textAlign: 'center'
    },
    marginTop: 10,
    marginBottom: 100
  },
  rootImage: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      textAlign: 'center'
    },
  }
})

export default withStyles(styles)(Footer)
