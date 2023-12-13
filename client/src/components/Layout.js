import withStyles from '@material-ui/core/styles/withStyles'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import AppBar from './AppBar'
import Drawer from './Drawer'
import Footer from './Footer'
import { Desktop, Tablet, Mobile } from './Responsive'


const styles = theme => ({
  layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  main: {
    flex: '1 0 auto'
  }
})

class Layout extends Component {
  state = {
    drawer: false,
    drawerItems: {
      about: false,
      academics: false,
      admissions: false,
      'faith-and-life': false
    },
    drawerSubItems: {},
    isIE: false
  }

  componentDidMount() {
    // Internet Explorer 6-11
    this.setState({ isIE: /* @cc_on!@ */ false || !!document.documentMode })
  }

  toggleDrawer = itemId => {
    this.setState(state => ({ drawer: !state.drawer }))
    itemId && this.expandItem(itemId)
  }

  expandItem = itemId => {
    this.setState(prevState => ({
      drawerItems: {
        ...prevState.drawerItems,
        [itemId]: !prevState.drawerItems[itemId]
      }
    }))
  }

  expandSubItem = itemId => {
    this.setState(prevState => ({
      drawerSubItems: {
        ...prevState.drawerSubItems,
        [itemId]: !prevState.drawerSubItems[itemId]
      }
    }))
  }

  render() {
    const { classes, title } = this.props
    return (
      <>
      <Desktop>
      <div className={classes.layout}>
        <Helmet>
          <title>{`${title ? `${title} | ` : ''
            }PSDKU POLINEMA KAMPUS LUMAJANG`}</title>
        </Helmet>
        <Drawer
          open={this.state.drawer}
          toggleDrawer={this.toggleDrawer}
          drawerItems={this.state.drawerItems}
          expandItem={this.expandItem}
          drawerSubItems={this.state.drawerSubItems}
          expandSubItem={this.expandSubItem}
        />
        <AppBar toggleDrawer={this.toggleDrawer} />
        {this.state.isIE ? (
          <main className={classes.main}>
            {' '}
            <h1>
              Internet Explorer is not supported. We recommend using the latest
              version of <a href="https://www.google.com/chrome/">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>.
            </h1>
          </main>
        ) : (
          <main className={classes.main}>{this.props.children}</main>
        )}

        <Footer />
      </div>
      </Desktop>
      <Tablet>
      <div className={classes.layout}>
        <Helmet>
          <title>{`${title ? `${title} | ` : ''
            }PSDKU POLINEMA KAMPUS LUMAJANG`}</title>
        </Helmet>
        <Drawer
          open={this.state.drawer}
          toggleDrawer={this.toggleDrawer}
          drawerItems={this.state.drawerItems}
          expandItem={this.expandItem}
          drawerSubItems={this.state.drawerSubItems}
          expandSubItem={this.expandSubItem}
        />
        <AppBar toggleDrawer={this.toggleDrawer} />
        {this.state.isIE ? (
          <main className={classes.main}>
            {' '}
            <h1>
              Internet Explorer is not supported. We recommend using the latest
              version of <a href="https://www.google.com/chrome/">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>.
            </h1>
          </main>
        ) : (
          <main className={classes.main}>{this.props.children}</main>
        )}

        <Footer />
      </div>
      </Tablet>
    <Mobile>
    <div className={classes.layout}>
        <Helmet>
          <title>{`${title ? `${title} | ` : ''
            }PSDKU POLINEMA KAMPUS LUMAJANG`}</title>
        </Helmet>
        <Drawer
          open={this.state.drawer}
          toggleDrawer={this.toggleDrawer}
          drawerItems={this.state.drawerItems}
          expandItem={this.expandItem}
          drawerSubItems={this.state.drawerSubItems}
          expandSubItem={this.expandSubItem}
        />
        <AppBar toggleDrawer={this.toggleDrawer} />
        {this.state.isIE ? (
          <main className={classes.main}>
            {' '}
            <h1>
              Internet Explorer is not supported. We recommend using the latest
              version of <a href="https://www.google.com/chrome/">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>.
            </h1>
          </main>
        ) : (
          <main className={classes.main}>{this.props.children}</main>
        )}

        <Footer />
      </div>
    </Mobile>
      </>
    )
  }
}

export default withStyles(styles)(Layout)
