/**

* icon: menu item icon
 * roles: Indicates which roles the current menu item can be displayed in. 
 * If this option is not written, it means that the menu item is completely open and displayed in any role
 */
const menuList = [
  {
    title: "front page",
    path: "/dashboard",
    icon: "home",
    roles:["admin","editor","guest"]
  },
  {
    title: "author blog",
    path: "/doc",
    icon: "file",
    roles:["admin","editor","guest"]
  },
  {
    title: "Guide pages",
    path: "/guide",
    icon: "key",
    roles:["admin","editor"]
  },
  {
    title: "permission test",
    path: "/permission",
    icon: "lock",
    children: [
      {
        title: "Permission Description",
        path: "/permission/explanation",
        roles:["admin"]
      },
      {
        title: "admin Page",
        path: "/permission/adminPage",
        roles:["admin"]
      },
      {
        title: "guest Page",
        path: "/permission/guestPage",
        roles:["guest"]
      },
      {
        title: "editor Page",
        path: "/permission/editorPage",
        roles:["editor"]
      },
    ],
  },
  {
    title: "components",
    path: "/components",
    icon: "appstore",
    roles:["admin","editor"],
    children: [
      {
        title: "rich text",
        path: "/components/richTextEditor",
        roles:["admin","editor"],
      },
      {
        title: "Markdown",
        path: "/components/Markdown",
        roles:["admin","editor"],
      },
      {
        title: "drag list",
        path: "/components/draggable",
        roles:["admin","editor"],
      },
    ],
  },
  {
    title: "chart",
    path: "/charts",
    icon: "area-chart",
    roles:["admin","editor"],
    children: [
      {
        title: "keyboard chart",
        path: "/charts/keyboard",
        roles:["admin","editor"],
      },
      {
        title: "line chart",
        path: "/charts/line",
        roles:["admin","editor"],
      },
      {
        title: "hybrid chart",
        path: "/charts/mix-chart",
        roles:["admin","editor"],
      },
    ],
  },
  {
    title: "Route nesting",
    path: "/nested",
    icon: "cluster",
    roles:["admin","editor"],
    children: [
      {
        title: "Menu1",
        path: "/nested/menu1",
        children: [
          {
            title: "Menu1-1",
            path: "/nested/menu1/menu1-1",
            roles:["admin","editor"],
          },
          {
            title: "Menu1-2",
            path: "/nested/menu1/menu1-2",
            children: [
              {
                title: "Menu1-2-1",
                path: "/nested/menu1/menu1-2/menu1-2-1",
                roles:["admin","editor"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "sheet",
    path: "/table",
    icon: "table",
    roles:["admin","editor"]
  },
  {
    title: "Excel",
    path: "/excel",
    icon: "file-excel",
    roles:["admin","editor"],
    children: [
      {
        title: "export Excel",
        path: "/excel/export",
        roles:["admin","editor"]
      },
      {
        title: "upload Excel",
        path: "/excel/upload",
        roles:["admin","editor"]
      }
    ],
  },
  {
    title: "Zip",
    path: "/zip",
    icon: "file-zip",
    roles:["admin","editor"]
  },
  {
    title: "clipboard",
    path: "/clipboard",
    icon: "copy",
    roles:["admin","editor"]
  },
  {
    title: "User Management",
    path: "/user",
    icon: "usergroup-add",
    roles:["admin"]
  },
  {
    title: "about the author",
    path: "/about",
    icon: "user",
    roles:["admin","editor","guest"]
  },
  {
    title: "Bug collect",
    path: "/bug",
    icon: "bug",
    roles:["admin"]
  },
];
export default menuList;
