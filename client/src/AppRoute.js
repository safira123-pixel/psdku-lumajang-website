import { Route, Switch } from 'react-router-dom'
import { HomePage, ProfilePage, selayang_pandang, akutansi, visi_misi, struktur_organisasi, Kalender_akademik, otomotif, teknologi_sipil, teknologi_informasi, snbp, snbt, mandiri, kegiatan_mahasiswa, kegiatan_mahasiswa1, kegiatan_mahasiswa2, pengumuman, pengumuman1, pengumuman2, profil_lumajang, kuliner_lumajang, pariwisata_lumajang, penginapan_lumajang, budaya_lumajang } from './apps/pages'

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/selayang_pandang' component={selayang_pandang} />
            <Route exact path='/akuntansi' component={akutansi} />
            <Route exact path='/visi_misi' component={visi_misi} />
            <Route exact path='/struktur_organisasi' component={struktur_organisasi} />
            <Route exact path='/kalender_akademik' component={Kalender_akademik} />
            <Route exact path='/otomotif' component={otomotif} />
            <Route exact path='/teknologi_sipil' component={teknologi_sipil} />
            <Route exact path='/teknologi_informasi' component={teknologi_informasi} />
            <Route exact path='/snbp' component={snbp} />
            <Route exact path='/snbt' component={snbt} />
            <Route exact path='/mandiri' component={mandiri} />
            <Route exact path='/kegiatan_mahasiswa' component={kegiatan_mahasiswa} />
            <Route exact path='/kegiatan_mahasiswa1' component={kegiatan_mahasiswa1} />
            <Route exact path='/kegiatan_mahasiswa2' component={kegiatan_mahasiswa2} />
            <Route exact path='/pengumuman' component={pengumuman} />
            <Route exact path='/pengumuman1' component={pengumuman1} />
            <Route exact path='/pengumuman2' component={pengumuman2} />

            <Route exact path='/profil_lumajang' component={profil_lumajang} />
            <Route exact path='/budaya_lumajang' component={budaya_lumajang} />
            <Route exact path='/kuliner_lumajang' component={kuliner_lumajang} />
            <Route exact path='/penginapan_lumajang' component={penginapan_lumajang} />
            <Route exact path='/pariwisata_lumajang' component={pariwisata_lumajang} />



        </Switch>
    )
}

export default AppRoute