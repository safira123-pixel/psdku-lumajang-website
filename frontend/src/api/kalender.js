import request from "@/utils/request";

export function addKalender(data) {
  // Buat objek FormData untuk mengirim file
  const formData = new FormData();
  formData.append('file', data.file); // 'file' sesuai dengan nama field di backend

  return request({
    url: "/kalender/upload",
    method: "post",
    data: formData, // Mengirim FormData dengan file
  });
}

export function getKalender() {
  return request({
    url: "/kalender",
    method: "get",
  });
}

export function editKalender(data, id) {
  // Buat objek FormData untuk mengirim file
  const formData = new FormData();
  formData.append('file', data.file); // 'file' sesuai dengan nama field di backend

  return request({
    url: `/kalender/${id}`,
    method: "put",
    data: formData, // Mengirim FormData dengan file
  });
}

export function deleteKalender(data) {
  return request({
    url: `/kalender/${data.id}`,
    method: "delete",
    data,
  });
}
