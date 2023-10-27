import { Route, Switch } from 'react-router-dom'
import { HomePage, ProfilePage, selayang_pandang, akutansi, visi_misi, struktur_organisasi, Kalender_akademik, otomotif, teknologi_sipil, teknologi_informasi, snbp, snbt, mandiri, kegiatan_mahasiswa, kegiatan_mahasiswa2,kegiatan_mahasiswa3, pengumuman, pengumuman1, pengumuman2, profil_lumajang, kuliner_lumajang, pariwisata_lumajang, transportasi_lumajang, budaya_lumajang, item_kegiatan1, item_kegiatan2, item_kegiatan3, item_pengumuman1, item_pengumuman2, item_pengumuman3 } from './apps/pages'

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/selayang_pandang' component={selayang_pandang} />
            <Route exact path='/visi_misi' component={visi_misi} />
            <Route exact path='/struktur_organisasi' component={struktur_organisasi} />
            <Route exact path='/kalender_akademik' component={Kalender_akademik} />

            <Route exact path='/akuntansi' component={akutansi} />
            <Route exact path='/otomotif' component={otomotif} />
            <Route exact path='/teknologi_sipil' component={teknologi_sipil} />
            <Route exact path='/teknologi_informasi' component={teknologi_informasi} />

            <Route exact path='/snbp' component={snbp} />
            <Route exact path='/snbt' component={snbt} />
            <Route exact path='/mandiri' component={mandiri} />

            <Route exact path='/kegiatan_mahasiswa' component={kegiatan_mahasiswa} />
            <Route exact path='/kegiatan_mahasiswa2' component={kegiatan_mahasiswa2} />
            <Route exact path='/kegiatan_mahasiswa3' component={kegiatan_mahasiswa3} />
            <Route exact path='/item_kegiatan1' component={item_kegiatan1} />
            <Route exact path='/item_kegiatan2' component={item_kegiatan2} />
            <Route exact path='/item_kegiatan3' component={item_kegiatan3} />

            <Route exact path='/pengumuman' component={pengumuman} />
            <Route exact path='/pengumuman1' component={pengumuman1} />
            <Route exact path='/pengumuman2' component={pengumuman2} />
            <Route exact path='/item_pengumuman1' component={item_pengumuman1} />
            <Route exact path='/item_pengumuman2' component={item_pengumuman2} />
            <Route exact path='/item_pengumuman3' component={item_pengumuman3} />            

            <Route exact path='/profil_lumajang' component={profil_lumajang} />
            <Route exact path='/budaya_lumajang' component={budaya_lumajang} />
            <Route exact path='/kuliner_lumajang' component={kuliner_lumajang} />
            <Route exact path='/transportasi_lumajang' component={transportasi_lumajang} />
            <Route exact path='/pariwisata_lumajang' component={pariwisata_lumajang} />
        </Switch>
    )
}

export default AppRoute