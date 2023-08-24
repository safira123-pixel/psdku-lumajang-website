import withStyles from '@material-ui/core/styles/withStyles'
import React from 'react'
import Layout from '../../components/Profile/Layout_Profile'
import withRoot from '../../components/withRoot'
import { withTranslation } from 'react-i18next'
const ProfilePage = () => {
    return (
        <Layout title="Profile" >
        </Layout >
    )
}

export default withRoot(withStyles(styles)(withTranslation()(ProfilePage)))
