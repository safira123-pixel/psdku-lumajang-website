import React, { Component } from "react";
import { Card, Button, Table, message, Divider } from "antd";
import {
  getKegiatans,
  deleteKegiatan,
  editKegiatan,
  addKegiatan,
} from "@/api/kegiatan";
import TypingCard from "@/components/TypingCard";
import EditKegiatanForm from "./forms/edit-kegiatan-form";
import AddKegiatanForm from "./forms/add-kegiatan-form";
const { Column } = Table;
class Kegiatan extends Component {
  state = {
    kegiatans: [],
    editKegiatanModalVisible: false,
    editKegiatanModalLoading: false,
    currentRowData: {},
    addKegiatanModalVisible: false,
    addKegiatanModalLoading: false,
  };
  getKegiatans = async () => {
    const result = await getKegiatans();
    console.log(result);
    const { content, statusCode } = result.data;

    if (statusCode === 200) {
      this.setState({
        kegiatans: content,
      });
    }
  };
  handleEditKegiatan = (row) => {
    this.setState({
      currentRowData: Object.assign({}, row),
      editKegiatanModalVisible: true,
    });
  };

  handleDeleteKegiatan = (row) => {
    const { id } = row;
    if (id === "admin") {
      message.error("不能删除管理员用户！");
      return;
    }
    console.log(id);
    deleteKegiatan({ id }).then((res) => {
      message.success("删除成功");
      this.getKegiatans();
    });
  };

  handleEditKegiatanOk = (_) => {
    const { form } = this.editKegiatanFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ editModalLoading: true });
      editKegiatan(values, values.id)
        .then((response) => {
          form.resetFields();
          this.setState({
            editKegiatanModalVisible: false,
            editKegiatanModalLoading: false,
          });
          message.success("编辑成功!");
          this.getKegiatans();
        })
        .catch((e) => {
          message.success("编辑失败,请重试!");
        });
    });
  };

  handleCancel = (_) => {
    this.setState({
      editKegiatanModalVisible: false,
      addKegiatanModalVisible: false,
    });
  };

  handleAddKegiatan = (row) => {
    this.setState({
      addKegiatanModalVisible: true,
    });
  };

  handleAddKegiatanOk = (_) => {
    const { form } = this.addKegiatanFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ addKegiatanModalLoading: true });
      addKegiatan(values)
        .then((response) => {
          form.resetFields();
          this.setState({
            addKegiatanModalVisible: false,
            addKegiatanModalLoading: false,
          });
          message.success("添加成功!");
          this.getKegiatans();
        })
        .catch((e) => {
          message.success("添加失败,请重试!");
        });
    });
  };
  componentDidMount() {
    this.getKegiatans();
  }
  render() {
    const { kegiatans } = this.state;
    const title = (
      <span>
        <Button type="primary" onClick={this.handleAddKegiatan}>
          Tambahkan Kegiatan Mahasiswa
        </Button>
      </span>
    );
    const cardContent = `Pengelolaan Kegiatan Mahasiswa.`;
    return (
      <div className="app-container">
        <TypingCard title="Manajemen Kegiatan Mahasiswa" source={cardContent} />
        <br />
        <Card title={title}>
          <Table
            bordered
            rowKey="id"
            dataSource={kegiatans}
            pagination={false}
          >
            <Column title="ID Kegiatan" dataIndex="id" key="id" align="center" />
            <Column title="Judul" dataIndex="name" key="name" align="center" />
            <Column
              title="Deskripsi Kegiatan"
              dataIndex="description"
              key="description"
              align="center"
            />
            <Column
              title="Operasi"
              key="action"
              width={195}
              align="center"
              render={(text, row) => (
                <span>
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    title="edit"
                    onClick={this.handleEditKegiatan.bind(null, row)}
                  />
                  <Divider type="vertical" />
                  <Button
                    type="primary"
                    shape="circle"
                    icon="delete"
                    title="delete"
                    onClick={this.handleDeleteKegiatan.bind(null, row)}
                  />
                </span>
              )}
            />
          </Table>
        </Card>
        <EditKegiatanForm
          currentRowData={this.state.currentRowData}
          wrappedComponentRef={(formRef) =>
            (this.editKegiatanFormRef = formRef)
          }
          visible={this.state.editKegiatanModalVisible}
          confirmLoading={this.state.editKegiatanModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleEditKegiatanOk}
        />
        <AddKegiatanForm
          wrappedComponentRef={(formRef) =>
            (this.addKegiatanFormRef = formRef)
          }
          visible={this.state.addKegiatanModalVisible}
          confirmLoading={this.state.addKegiatanModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleAddKegiatanOk}
        />
      </div>
    );
  }
}

export default Kegiatan;