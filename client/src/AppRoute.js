import { Route, Switch } from 'react-router-dom'
import { HomePage, ProfilePage } from './apps/pages'

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about/profile' component={ProfilePage} />
        </Switch>
    )
}

export default AppRoute