import request from "@/utils/request";

export function addKegiatan(data) {
  return request({
    url: "/kegiatan",
    method: "post",
    data,
  });
}

export function getKegiatans() {
  return request({
    url: "/kegiatan",
    method: "get",
  });
}

export function editKegiatan(data, id) {
  return request({
    url: `/kegiatan/${id}`,
    method: "put",
    data,
  });
}

export function deleteKegiatan(data) {
  return request({
    url: `/kegiatan/${data.id}`,
    method: "delete",
    data,
  });
}
