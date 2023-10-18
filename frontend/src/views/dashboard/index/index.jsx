import React, { useState, useEffect, Component } from "react";
import { Row, Col } from "antd";
import "./index.less";
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import RaddarChart from "./components/RaddarChart";
import PieChart from "./components/PieChart";
import TransactionTable from "./components/TransactionTable";
import BoxCard from "./components/BoxCard";
import { getBeritas } from "@/api/berita";
import { getDepartments } from "@/api/department";
import { getKegiatans } from "@/api/kegiatan";
import { getSelayangs } from "@/api/selayang";
import { debounce } from "@/utils";
import PropTypes from "prop-types";

class Dashboard extends Component {
    static propTypes = {
        width: PropTypes.string,
        height: PropTypes.string,
        className: PropTypes.string,
        styles: PropTypes.object,
      };
    
      static defaultProps = {
        width: "100%",
        height: "300px",
        styles: {},
        className: "",
      };
    
      state = {
        chart: null,
        beritas: [], 
      };
    
      componentDidMount() {
        this.fetchBeritas();
        debounce(this.initChart.bind(this), 300)();
        window.addEventListener("resize", () => this.resize());
      }
    
      componentWillUnmount() {
        this.dispose();
      }
    
      resize() {
        const chart = this.state.chart;
        if (chart) {
          debounce(chart.resize.bind(this), 300)();
        }
      }
    
      dispose() {
        if (!this.state.chart) {
          return;
        }
        window.removeEventListener("resize", () => this.resize());
        this.setState({ chart: null });
      }
    
      fetchBeritas() {
        getBeritas()
          .then((response) => {
            const { content, statusCode } = response.data;
            if (statusCode === 200) {
              this.setState({ beritas: content }, () => {
                // After fetching data, initialize the chart
                debounce(this.initChart.bind(this), 300)();
              });
            }
          })
          .catch((error) => {
            console.error("Error fetching berita data:", error);
          });
      }
    
      initChart() {
        if (!this.el) return;
        this.setState({ chart: echarts.init(this.el, "macarons") }, () => {
          this.setOptions();
        });
      }
    
      render() {
        const { className, height, width, styles } = this.props;
        return (
          <div
            className={className}
            ref={(el) => (this.el = el)}
            style={{
              ...styles,
              height,
              width,
            }}
          />
        );
      }
    }
    
export default Dashboard;