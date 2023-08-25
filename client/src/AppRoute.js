import { Route, Switch } from 'react-router-dom'
import { HomePage, ProfilePage, selayang_pandang, akutansi } from './apps/pages'

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about/profile' component={ProfilePage} />
            <Route exact path='/about/selayang_pandang' component={selayang_pandang} />
            <Route exact path='/akuntansi' component={akutansi} />
        </Switch>
    )
}

export default AppRoute