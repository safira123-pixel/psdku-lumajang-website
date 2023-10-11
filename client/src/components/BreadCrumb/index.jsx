// import React from "react";
// import { withRouter, useLocation } from "react-router-dom";
// import useBreadcrumbs from 'use-react-router-breadcrumbs'
// // import menuList from "@/config/menuConfig";
// // import drawerMenu from "@/data/drawerMenu";
// import "./index.less";
// import { Link} from 'react-router-dom'

// function Breadcrumbs() {
//   const location = useLocation();

//   return (
//     <nav>
//       <Link to="/"
//         className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
//       >
//         Home
//       </Link>
//       <span className="breadcrumb-arrow">&gt;</span>
//       <Link to="/profile"
//         className={location.pathname.startsWith("/profile") ? "breadcrumb-active" : "breadcrumb-not-active"}
//       >
//         Profil
//       </Link>
//       <span className="breadcrumb-arrow">&gt;</span>
//       <Link to="/selayang_pandang"
//         className={location.pathname === "/selayang_pandang" ? "breadcrumb-active" : "breadcrumb-not-active"}
//       >
//         Selayang Pandang
//       </Link>
//     </nav>
//   );
// }

// export default Breadcrumbs;

import React from "react";
import { withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
import menuList from "../../config/menuConfig";
import "./index.less";
/**
 * 根据当前浏览器地址栏的路由地址，在menuConfig中查找路由跳转的路径
 * 如路由地址为/charts/keyboard,则查找到的路径为[{title: "图表",...},{title: "键盘图表",...}]
 */
const getPath = (menuList, pathname) => {
  let temppath = [];
  try {
    function getNodePath(node) {
      temppath.push(node);
      //找到符合条件的节点，通过throw终止掉递归
      if (node.path === pathname) {
        throw new Error("GOT IT!");
      }
      if (node.children && node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i]);
        }
        //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
        temppath.pop();
      } else {
        //找到叶子节点时，删除路径当中的该叶子节点
        temppath.pop();
      }
    }
    for (let i = 0; i < menuList.length; i++) {
      getNodePath(menuList[i]);
    }
  } catch (e) {
    return temppath;
  }
};

const BreadCrumb = (props) => {
  const { location } = props;
  const { pathname } = location;
  let path = getPath(menuList, pathname);
  const first = path && path[0];
  if (first && first.title.trim() !== "Home") {
    path = [{ title: "Beranda", path: "/" }].concat(path);
  }
  return (
    <div className="Breadcrumb-container">
      <Breadcrumb>
        {path &&
          path.map((item) =>
            item.title === "Beranda" ? (
              <Breadcrumb.Item key={item.path}>
                <a href={`#${item.path}`}>{item.title}</a>
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
            )
          )}
      </Breadcrumb>
    </div>
  );
};

export default withRouter(BreadCrumb);
