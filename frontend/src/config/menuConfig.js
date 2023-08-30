
const menuList = [
  {
    title: "Beranda",
    path: "/dashboard",
    icon: "home",
    roles:["ROLE_ADMINISTRATOR"]
  },

  {
    title: "Manajemen Profil",
    path: "/profil",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR"]
  },
 
  {
    title: "Selayang Pandang",
    path: "/selayang",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  },
  {
    title: "Manajemen Jurusan",
    path: "/department",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR"]
  },
  
  {
    title: "Manajemen Berita",
    path: "/berita",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  },

  {
    title: "Manajemen Kegiatan",
    path: "/kegiatan",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR"]
  },

  {
    title: "Pendaftaran Mahasiswa",
    path: "/pendaftaran",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR"]
  },

  {
    title: "Struktur Organisasi",
    path: "/organisasi",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR"]
  },

  {
    title: "Kalender Akademik",
    path: "/kalender",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR"]
  },
  
];
export default menuList;
