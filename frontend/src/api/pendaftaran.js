import request from "@/utils/request";

export function addPendaftaran(data) {
  return request({
    url: "/pendaftaran",
    method: "post",
    data,
  });
}

export function getPendaftarans() {
  return request({
    url: "/pendaftaran",
    method: "get",
  });
}

export function editPendaftaran(data, id) {
  return request({
    url: `/pendaftaran/${id}`,
    method: "put",
    data,
  });
}

export function deletePendaftaran(data) {
  return request({
    url: `/pendaftaran/${data.id}`,
    method: "delete",
    data,
  });
}