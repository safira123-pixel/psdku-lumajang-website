// import Divider from '@material-ui/core/Divider'
// import FormControl from '@material-ui/core/FormControl'
// import IconButton from '@material-ui/core/IconButton'
// import Input from '@material-ui/core/Input'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import InputLabel from '@material-ui/core/InputLabel'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import { withStyles } from '@material-ui/core/styles'
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
// import OpenInNewIcon from '@material-ui/icons/OpenInNew'
// import SearchIcon from '@material-ui/icons/Search'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import { withTranslation } from 'react-i18next';

// import {
//   aboutMenu,
//   academicsMenu,
//   admissionsMenu,
//   faithMenu,
//   studentMenu
// } from '../data/drawerMenu'
// import DrawerItem from './DrawerItem'

// class TemporaryDrawer extends Component {
//   static defaultProps = {
//     open: PropTypes.bool.isRequired,
//     toggleDrawer: PropTypes.func.isRequired
//   }
//   state = {
//     openItems: true,
//     search: ''
//   }

//   handleClick = () => {
//     this.setState({ openItems: !this.state.openItems })
//   }

//   handleSearchChange = e => {
//     this.setState({ search: e.target.value })
//   }

//   handleSearch = () => {
//     if (this.state.search !== '') {
//       window.location = `/search?search=${this.state.search}`
//     }
//   }

//   render() {
//     const { classes, toggleDrawer, open } = this.props
//     // Use the hook here
//     const iOS = window.process && /iPad|iPhone|iPod/.test(navigator.userAgent)
//     const { t, i18n } = this.props
//     return (
//       <SwipeableDrawer
//         open={open}
//         onOpen={toggleDrawer}
//         onClose={toggleDrawer}
//         disableBackdropTransition={!iOS}
//         disableDiscovery={iOS}
//         style={{ visibility: `${open ? 'visible' : 'hidden'}` }}
//       >
//         <div tabIndex={0} role="button">
//           <div className={classes.list}>
//             <List>
//               <ListItem>
//                 <Link to={'/'}>
//                   <img
//                     className={classes.drawerImg}
//                     width="100%"
//                     src="./assets/images/logo-polinema-navbar.png"
//                     alt="Polinema"
//                   />
//                 </Link>
//               </ListItem>
//               <ListItem>
//                 <FormControl className={classes.formControl}>
//                   <InputLabel htmlFor="search">Search</InputLabel>
//                   <Input
//                     id="search"
//                     variant="text"
//                     classes={{
//                       underline: classes.inputInkbar
//                     }}
//                     value={this.state.search}
//                     onChange={this.handleSearchChange}
//                     onKeyPress={e => e.key === 'Enter' && this.handleSearch()}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton onClick={this.handleSearch}>
//                           <SearchIcon />
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                   />
//                 </FormControl>
//               </ListItem>
//               <DrawerItem
//                 toggleDrawer={toggleDrawer}
//                 primaryText="Profil"
//                 submenuItems={aboutMenu}
//                 isSubOpen={this.props.drawerSubItems}
//                 isOpen={this.props.drawerItems.about}
//                 expandSubItem={this.props.expandSubItem}
//                 expandItem={this.props.expandItem}
//                 itemId="about"
//               />
//               <DrawerItem
//                 toggleDrawer={toggleDrawer}
//                 primaryText="Akademik"
//                 submenuItems={academicsMenu}
//                 isSubOpen={this.props.drawerSubItems}
//                 isOpen={this.props.drawerItems.academics}
//                 expandSubItem={this.props.expandSubItem}
//                 expandItem={this.props.expandItem}
//                 itemId="academics"
//               />
//               <DrawerItem
//                 toggleDrawer={toggleDrawer}
//                 expandSubItem={this.props.expandSubItem}
//                 expandItem={this.props.expandItem}
//                 itemId="admissions"
//                 primaryText="Program Studi"
//                 submenuItems={admissionsMenu}
//                 isSubOpen={this.props.drawerSubItems}
//                 isOpen={this.props.drawerItems.admissions}
//               />
//               <DrawerItem
//                 toggleDrawer={toggleDrawer}
//                 expandSubItem={this.props.expandSubItem}
//                 expandItem={this.props.expandItem}
//                 itemId="evangelization"
//                 primaryText="Info Penerimaan Mahasiswa Baru"
//                 submenuItems={faithMenu}
//                 isSubOpen={this.props.drawerSubItems}
//                 isOpen={this.props.drawerItems.evangelization}
//               />
//               <DrawerItem
//                 toggleDrawer={toggleDrawer}
//                 expandSubItem={this.props.expandSubItem}
//                 expandItem={this.props.expandItem}
//                 itemId="student-life"
//                 primaryText="Kegiatan Mahasiswa"
//                 submenuItems={studentMenu}
//                 isSubOpen={this.props.drawerSubItems}
//                 isOpen={this.props.drawerItems['student-life']}
//               />
//               <Divider />
//             </List>
//           </div>
//         </div>
//       </SwipeableDrawer>
//     )
//   }
// }

// const styles = theme => ({
//   list: {
//     width: 300,
//     [theme.breakpoints.down('xs')]: {
//       width: 265
//     }
//   },
//   listFull: {
//     width: 'auto'
//   },
//   formControl: {
//     margin: theme.spacing.unit
//   },
//   drawerImg: {
//     margin: '0 auto',
//     cursor: 'pointer'
//   },
//   externalLink: {
//     textDecoration: 'none',
//     color: 'inherit'
//   },
//   inputLabelFocused: {
//     color: '#998643'
//   },
//   inputInkbar: {
//     '&:after': {
//       backgroundColor: '#998643'
//     }
//   }
// })
// export default withStyles(styles)(TemporaryDrawer)
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { useTranslation } from 'react-i18next'

import {
  aboutMenu,
  academicsMenu,
  admissionsMenu,
  faithMenu,
  studentMenu
} from '../data/drawerMenu'
import DrawerItem from './DrawerItem'
const TemporaryDrawer = props => {
    const { classes, toggleDrawer, open } = props
    const { t } = useTranslation();

    const state = {
      openItems: true,
      search: ''
    }
  
    const handleClick = () => {
      this.setState({ openItems: !state.openItems })
    }
  
    const handleSearchChange = e => {
      this.setState({ search: e.target.value })
    }
  
    const handleSearch = () => {
      if (state.search !== '') {
        window.location = `/search?search=${state.search}`
      }
    }
    const iOS = window.process && /iPad|iPhone|iPod/.test(navigator.userAgent)
    return (
      <SwipeableDrawer
        open={open}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        style={{ visibility: `${open ? 'visible' : 'hidden'}` }}
      >
        <div tabIndex={0} role="button">
          <div className={classes.list}>
            <List>
              <ListItem>
                <Link to={'/'}>
                  <img
                    className={classes.drawerImg}
                    width="100%"
                    src="./assets/images/logo-polinema-navbar.png"
                    alt="Polinema"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="search">Search</InputLabel>
                  <Input
                    id="search"
                    variant="text"
                    classes={{
                      underline: classes.inputInkbar
                    }}
                    value={state.search}
                    onChange={handleSearchChange}
                    onKeyPress={e => e.key === 'Enter' && handleSearch()}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleSearch}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </ListItem>
              <DrawerItem
                toggleDrawer={toggleDrawer}
                primaryText={t("Profil")}
                submenuItems={aboutMenu}
                isSubOpen={props.drawerSubItems}
                isOpen={props.drawerItems.about}
                expandSubItem={props.expandSubItem}
                expandItem={props.expandItem}
                itemId="about"
              />
              <DrawerItem
                toggleDrawer={toggleDrawer}
                primaryText={t("Akademik")}
                submenuItems={academicsMenu}
                isSubOpen={props.drawerSubItems}
                isOpen={props.drawerItems.academics}
                expandSubItem={props.expandSubItem}
                expandItem={props.expandItem}
                itemId="academics"
              />
              <DrawerItem
                toggleDrawer={toggleDrawer}
                expandSubItem={props.expandSubItem}
                expandItem={props.expandItem}
                itemId="admissions"
                primaryText={t("Program Studi")}
                submenuItems={admissionsMenu}
                isSubOpen={props.drawerSubItems}
                isOpen={props.drawerItems.admissions}
              />
              <DrawerItem
                toggleDrawer={toggleDrawer}
                expandSubItem={props.expandSubItem}
                expandItem={props.expandItem}
                itemId="evangelization"
                primaryText={t("Info Penerimaan Mahasiswa Baru")}
                submenuItems={faithMenu}
                isSubOpen={props.drawerSubItems}
                isOpen={props.drawerItems.evangelization}
              />
              <DrawerItem
                toggleDrawer={toggleDrawer}
                expandSubItem={props.expandSubItem}
                expandItem={props.expandItem}
                itemId="student-life"
                primaryText={t("Kegiatan Mahasiswa")}
                submenuItems={studentMenu}
                isSubOpen={props.drawerSubItems}
                isOpen={props.drawerItems['student-life']}
              />
              <Divider />
            </List>
          </div>
        </div>
      </SwipeableDrawer>
    )

      }
      TemporaryDrawer.defaultProps = {
        open: PropTypes.bool.isRequired,
        toggleDrawer: PropTypes.func.isRequired
      }
      // const defaultProps = {
      //   open: PropTypes.bool.isRequired,
      //   toggleDrawer: PropTypes.func.isRequired
      // }

const styles = theme => ({
  list: {
    width: 300,
    [theme.breakpoints.down('xs')]: {
      width: 265
    }
  },
  listFull: {
    width: 'auto'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  drawerImg: {
    margin: '0 auto',
    cursor: 'pointer'
  },
  externalLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  inputLabelFocused: {
    color: '#998643'
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: '#998643'
    }
  }
})
export default withStyles(styles)(TemporaryDrawer)
