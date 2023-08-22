import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import InvertedButton from './InvertedButton'

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
              <img src='./assets/images/logo-polinema-footer.png' alt='Polinema' style={{ marginBottom: 20 }} />
              <Typography
                className={classes.white}
                variant="subheading"
                component={'span'}
                style={{ fontSize: 14}}
              >
                © {currentYear} PSDKU Polinema Kampus Lumajang
              </Typography>
              <Typography
                className={classes.white}
                variant="subheading"
                component={'span'}
                style={{ fontSize: 14}}
              >
                Designs and implementations by IT PSDKU Lumajang
              </Typography>
            </div>
          <div class="menu-footer-program-studi-container">
            <ul id="secondary-menu" class="menu">
              <li id="menu-item-682" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-682"><a href="#" style={{ color: 'white'}}>D-IV Teknologi Rekayasa Otomotif</a></li>
              <li id="menu-item-680" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-680"><a href="#" style={{ color: 'white'}}>D-III Teknologi Sipil</a></li>
              <li id="menu-item-326" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-326"><a href="#" style={{ color: 'white'}}>D-III Akutansi</a></li>
              <li id="menu-item-325" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-325"><a href="#" style={{ color: 'white'}}>D-III Teknologi Informasi</a></li>
              </ul>
           </div>	
           <div class="menu-footer-social-media-container">
            <ul id="secondary-menu" class="menu">
              <li id="menu-item-681" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-681"><a href="#" style={{ color: 'white'}}>Instagram</a></li>
              <li id="menu-item-682" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-682"><a href="#"style={{ color:  'white'}}>Facebook</a></li>
              <li id="menu-item-680" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-680"><a href="#" style={{ color: 'white'}}>Twitter</a></li>
              <li id="menu-item-326" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-326"><a href="#" style={{ color: 'white'}}>Whatsapp</a></li>
              <li id="menu-item-325" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-325"><a href="#" style={{ color: 'white'}}>Email</a></li>
              </ul>
           </div>	
           <div>
           <ul id="secondary-menu" class="menu">
              <h style={{ color: 'white'}}> V66V+446, Area Sawah/Kebun, Jogoyudan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316</h>
              </ul>
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
