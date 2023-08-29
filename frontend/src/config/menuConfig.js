/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "Beranda",
    path: "/dashboard",
    icon: "home",
    roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE","ROLE_STUDENT"]
  },
  // {
  //   title: "Author Blog",
  //   path: "/doc",
  //   icon: "file",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE","ROLE_STUDENT"]
  // },
  // {
  //   title: "Guide",
  //   path: "/guide",
  //   icon: "key",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  // },
  // {
  //   title: "Permission",
  //   path: "/permission",
  //   icon: "lock",
  //   children: [
  //     {
  //       title: "Deskripsi Permission",
  //       path: "/permission/explanation",
  //       roles:["ROLE_ADMINISTRATOR"]
  //     },
  //     {
  //       title: "Halaman Admin",
  //       path: "/permission/adminPage",
  //       roles:["ROLE_ADMINISTRATOR"]
  //     },
  //     {
  //       title: "Halaman Dosen",
  //       path: "/permission/lecturePage",
  //       roles:["ROLE_LECTURE"]
  //     },
  //     {
  //       title: "Halaman Siswa",
  //       path: "/permission/studentPage",
  //       roles:["ROLE_STUDENT"]
  //     },
     
  //   ],
  // },
  // {
  //   title: "Komponen",
  //   path: "/components",
  //   icon: "appstore",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //   children: [
  //     {
  //       title: "Rich Text",
  //       path: "/components/richTextEditor",
  //       roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //     },
  //     {
  //       title: "Markdown",
  //       path: "/components/Markdown",
  //       roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //     },
  //     {
  //       title: "Drag List",
  //       path: "/components/draggable",
  //       roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //     },
  //   ],
  // },
  // {
  //   title: "Bagan",
  //   path: "/charts",
  //   icon: "area-chart",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //   children: [
  //     {
  //       title: "Bagan Keyboard",
  //       path: "/charts/keyboard",
  //       roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //     },
  //     {
  //       title: "Bagan Garis",
  //       path: "/charts/line",
  //       roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //     },
  //     {
  //       title: "Bagan Campuran",
  //       path: "/charts/mix-chart",
  //       roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //     },
  //   ],
  // },
  // {
  //   title: "Menu Bersarang",
  //   path: "/nested",
  //   icon: "cluster",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //   children: [
  //     {
  //       title: "Menu 1",
  //       path: "/nested/menu1",
  //       children: [
  //         {
  //           title: "Menu 1-1",
  //           path: "/nested/menu1/menu1-1",
  //           roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //         },
  //         {
  //           title: "Menu 1-2",
  //           path: "/nested/menu1/menu1-2",
  //           children: [
  //             {
  //               title: "Menu 1-2-1",
  //               path: "/nested/menu1/menu1-2/menu1-2-1",
  //               roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Tabel",
  //   path: "/table",
  //   icon: "table",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  // },
  // {
  //   title: "Excel",
  //   path: "/excel",
  //   icon: "file-excel",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"],
  //   children: [
  //     {
  //       title: "Export Excel",
  //       path: "/excel/export",
  //       roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  //     },
  //     {
  //       title: "Export Excel",
  //       path: "/excel/upload",
  //       roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  //     }
  //   ],
  // },
  // {
  //   title: "Zip",
  //   path: "/zip",
  //   icon: "file-zip",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  // },
  // {
  //   title: "Papan Klip",
  //   path: "/clipboard",
  //   icon: "copy",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  // },


  // Admin
  // {
  //   title: "Manajemen Pengguna",
  //   path: "/user",
  //   icon: "usergroup-add",
  //   roles:["ROLE_ADMINISTRATOR"]
  // },
  {
    title: "Manajemen Jurusan",
    path: "/department",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR"]
  },
  // {
  //   title: "Manajemen Prodi",
  //   path: "/study-program",
  //   icon: "border",
  //   roles:["ROLE_ADMINISTRATOR"]
  // },
  // {
  //   title: "Manajemen Dosen",
  //   path: "/lecture",
  //   icon: "team",
  //   roles:["ROLE_ADMINISTRATOR"]
  // },

  // // Lecture
  // {
  //   title: "RPS",
  //   path: "/rps",
  //   icon: "user",
  //   roles:["ROLE_LECTURE"]
  // },
  // {
  //   title: "Manajemen Berita",
  //   path: "/question",
  //   icon: "file-search",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  // },
  {
    title: "Manajemen Berita",
    path: "/berita",
    icon: "file",
    roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE"]
  },
  // {
  //   title: "Setting Ujian",
  //   path: "/setting-exam",
  //   icon: "user",
  //   roles:["ROLE_LECTURE"]
  // },
  // {
  //   title: "Setting Kuis",
  //   path: "/setting-quiz",
  //   icon: "user",
  //   roles:["ROLE_LECTURE"]
  // },
  // {
  //   title: "Setting Latihan",
  //   path: "/setting-exercise",
  //   icon: "user",
  //   roles:["ROLE_LECTURE"]
  // },
  // {
  //   title: "Nilai",
  //   path: "/result",
  //   icon: "user",
  //   roles:["ROLE_LECTURE"],
  //   children: [
  //     {
  //       title: "Nilai Ujian",
  //       path: "/result/exam",
  //       roles:["ROLE_LECTURE"]
  //     },
  //     {
  //       title: "Nilai Kuis",
  //       path: "/result/quiz",
  //       roles:["ROLE_LECTURE"]
  //     },
  //     {
  //       title: "Nilai Latihan",
  //       path: "/result/exercise",
  //       roles:["ROLE_LECTURE"]
  //     }
  //   ],
  // },
  // {
  //   title: "Tentang Penulis",
  //   path: "/about",
  //   icon: "user",
  //   roles:["ROLE_ADMINISTRATOR","ROLE_LECTURE","ROLE_STUDENT"]
  // },
  
  // {
  //   title: "Bug收集",
  //   path: "/bug",
  //   icon: "bug",
  //   roles:["ROLE_ADMINISTRATOR"]
  // },
];
export default menuList;
