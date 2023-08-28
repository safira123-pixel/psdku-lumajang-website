import React, { Component } from "react";
import { Card, Button, Table, message, Divider } from "antd";
import {
  getBeritas,
  deleteBerita,
  editBerita,
  addBerita,
} from "@/api/berita";
import TypingCard from "@/components/TypingCard";
import EditBeritaForm from "./forms/edit-question-form";
import AddBeritaForm from "./forms/add-question-form";
const { Column } = Table;
class Berita extends Component {
  state = {
    beritas: [],
    editBeritaModalVisible: false,
    editBeritaModalLoading: false,
    currentRowData: {},
    addBeritaModalVisible: false,
    addBeritaModalLoading: false,
  };
  getBeritas = async () => {
    const result = await getBeritas();
    console.log(result);
    const { content, statusCode } = result.data;

    if (statusCode === 200) {
      this.setState({
        beritas: content,
      });
    }
  };
  handleEditBerita = (row) => {
    this.setState({
      currentRowData: Object.assign({}, row),
      editBeritaModalVisible: true,
    });
  };

  handleDeleteBerita = (row) => {
    const { id } = row;
    if (id === "admin") {
      message.error("不能删除管理员用户！");
      return;
    }
    console.log(id);
    deleteBerita({ id }).then((res) => {
      message.success("删除成功");
      this.getBeritas();
    });
  };

  handleEditBeritaOk = (_) => {
    const { form } = this.editBeritaFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ editModalLoading: true });
      editBerita(values, values.id)
        .then((response) => {
          form.resetFields();
          this.setState({
            editBeritaModalVisible: false,
            editBeritaModalLoading: false,
          });
          message.success("编辑成功!");
          this.getBeritas();
        })
        .catch((e) => {
          message.success("编辑失败,请重试!");
        });
    });
  };

  handleCancel = (_) => {
    this.setState({
      editBeritaModalVisible: false,
      addBeritaModalVisible: false,
    });
  };

  handleAddBerita = (row) => {
    this.setState({
      addBeritaModalVisible: true,
    });
  };

  handleAddBeritaOk = (_) => {
    const { form } = this.addBeritaFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({ addBeritaModalLoading: true });
      addBerita(values)
        .then((response) => {
          form.resetFields();
          this.setState({
            addBeritaModalVisible: false,
            addBeritaModalLoading: false,
          });
          message.success("添加成功!");
          this.getBeritas();
        })
        .catch((e) => {
          message.success("添加失败,请重试!");
        });
    });
  };
  componentDidMount() {
    this.getBeritas();
  }
  render() {
    const { beritas } = this.state;
    const title = (
      <span>
        <Button type="primary" onClick={this.handleAddBerita}>
          Tambahkan Berita
        </Button>
      </span>
    );
    const cardContent = `Pengelolaan Berita.`;
    return (
      <div className="app-container">
        <TypingCard title="Manajemen Berita" source={cardContent} />
        <br />
        <Card title={title}>
          <Table
            bordered
            rowKey="id"
            dataSource={beritas}
            pagination={false}
          >
            <Column title="ID Berita" dataIndex="id" key="id" align="center" />
            <Column title="Judul" dataIndex="name" key="name" align="center" />
            <Column
              title="Deskripsi"
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
                    title="编辑"
                    onClick={this.handleEditBerita.bind(null, row)}
                  />
                  <Divider type="vertical" />
                  <Button
                    type="primary"
                    shape="circle"
                    icon="delete"
                    title="删除"
                    onClick={this.handleDeleteBerita.bind(null, row)}
                  />
                </span>
              )}
            />
          </Table>
        </Card>
        <EditBeritaForm
          currentRowData={this.state.currentRowData}
          wrappedComponentRef={(formRef) =>
            (this.editBeritaFormRef = formRef)
          }
          visible={this.state.editBeritaModalVisible}
          confirmLoading={this.state.editBeritaModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleEditBeritatOk}
        />
        <AddBeritaForm
          wrappedComponentRef={(formRef) =>
            (this.addBeritaFormRef = formRef)
          }
          visible={this.state.addBeritaModalVisible}
          confirmLoading={this.state.addBeritaModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleAddBeritaOk}
        />
      </div>
    );
  }
}

export default Berita;
