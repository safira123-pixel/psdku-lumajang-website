import React from "react";
import { withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
import menuList from "@/config/menuConfig";
import "./index.less";
/**
* Temukan jalur lompatan perutean di menuConfig sesuai dengan alamat perutean di bilah alamat browser saat ini
 * Jika alamat perutean adalah /charts/keyboard, jalur yang ditemukan adalah [{title: "Chart",...},{title: "Keyboard Chart",...}]
 */
const getPath = (menuList, pathname) => {
  let temppath = [];
  try {
    function getNodePath(node) {
      temppath.push(node);
      // Temukan node yang memenuhi syarat, dan hentikan rekursi melalui lemparan
      if (node.path === pathname) {
        throw new Error("GOT IT!");
      }
      if (node.children && node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i]);
        }
       //Node anak dari node saat ini masih belum ditemukan setelah dilintasi, lalu hapus node di jalur tersebut
        temppath.pop();
      } else {
        //Saat simpul daun ditemukan, hapus simpul daun di jalur
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
  if (first && first.title.trim() !== "Dashboard") {
    path = [{ title: "Dashboard", path: "/dashboard" }].concat(path);
  }
  return (
    <div className="Breadcrumb-container">
      <Breadcrumb>
        {path &&
          path.map((item) =>
            item.title === "Dashboard" ? (
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
