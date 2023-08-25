import { Route, Switch } from 'react-router-dom'
import { HomePage, ProfilePage, selayang_pandang, akutansi, visi_misi, Struktur_organisasi, Kalender_akademik } from './apps/pages'

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/selayang_pandang' component={selayang_pandang} />
            <Route exact path='/akuntansi' component={akutansi} />
            <Route exact path='/visi_misi' component={visi_misi} />
            <Route exact path='/struktur_organisasi' component={Struktur_organisasi} />
            <Route exact path='/kalender_akademik' component={Kalender_akademik} />

        </Switch>
    )
}

export default AppRoute