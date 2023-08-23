import React, { useState } from "react";
import { connect } from "react-redux";
import { Drawer, Switch, Row, Col, Divider, Alert, Icon, Button } from "antd";
import { toggleSettingPanel, changeSetting } from "@/store/actions";
import clip from "@/utils/clipboard";

const RightPanel = (props) => {
   const {
     settingPanelVisible,
     toggleSettingPanel,
     changeSetting,
     sidebarLogo: defaultSidebarLogo,
     fixedHeader: defaultFixedHeader,
     tagsView: defaultTagsView,
   } = props;

   const [sidebarLogo, setSidebarLogo] = useState(defaultSidebarLogo);
   const [fixedHeader, setFixedHeader] = useState(defaultFixedHeader);
   const [tagsView, setTagsView] = useState(defaultTagsView);

   const sidebarLogoChange = (checked) => {
     setSidebarLogo(checked);
     changeSetting({ key: "sidebarLogo", value: checked });
   };

   const fixedHeaderChange = (checked) => {
     setFixedHeader(checked);
     changeSetting({ key: "fixedHeader", value: checked });
   };

   const tagsViewChange = (checked) => {
     setTagsView(checked);
     changeSetting({ key: "tagsView", value: checked });
   };

   const handleCopy = (e) => {
     let config = `
     export default {
       showSettings: true,
       sidebarLogo: ${sidebarLogo},
       fixedHeader: ${fixedHeader},
       tagsView: ${tagsView},
     }
     `;
     clip(config, e);
   };

   return (
     <div className="rightSettings">
       <Drawer
         title="System Settings"
         placement="right"
         width={350}
         onClose={toggleSettingPanel}
         visible={settingPanelVisible}
       >
         <Row>
           <Col span={12}>
             <span>Sidebar Logo</span>
           </Col>
           <Col span={12}>
             <Switch
               checkedChildren="on"
               unCheckedChildren = "off"
               defaultChecked={sidebarLogo}
               onChange={sidebarLogoChange}
             />
           </Col>
         </Row>
         <Divider dashed />
         <Row>
           <Col span={12}>
             <span>Fixed Header</span>
           </Col>
           <Col span={12}>
             <Switch
               checkedChildren="on"
               unCheckedChildren = "off"
               defaultChecked={fixedHeader}
               onChange={fixedHeaderChange}
             />
           </Col>
         </Row>
         <Divider dashed />
         <Row>
           <Col span={12}>
             <span>Enable Tags-View</span>
           </Col>
           <Col span={12}>
             <Switch
               checkedChildren="on"
               unCheckedChildren = "off"
               defaultChecked={tagsView}
               onChange={tagsViewChange}
             />
           </Col>
         </Row>
         <Divider dashed />
         <Row>
           <Col span={24}>
             <Alert
               message="Developers please note:"
               description="The configuration bar is only used for preview in the development environment, and will not be displayed in the production environment. Please copy and manually modify the /src/defaultSettings.js configuration file"
               type="warning"
               showIcon
               icon={<Icon type="notification" />}
               style={{ marginBottom: "16px" }}
             />
             <Button style={{ width: "100%" }} icon="copy" onClick={handleCopy}>
               copy configuration
             </Button>
           </Col>
         </Row>
       </Drawer>
     </div>
   );
};

const mapStateToProps = (state) => {
   return {
     ...state.app,
     ...state.settings,
   };
};

export default connect(mapStateToProps, { toggleSettingPanel, changeSetting })(
   RightPanel
);
