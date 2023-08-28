import request from "@/utils/request";

export function addBerita(data) {
  return request({
    url: "/berita",
    method: "post",
    data,
  });
}

export function getBeritas() {
  return request({
    url: "/berita",
    method: "get",
  });
}

export function editBerita(data, id) {
  return request({
    url: `/berita/${id}`,
    method: "put",
    data,
  });
}

export function deleteBerita(data) {
  return request({
    url: `/berita/${data.id}`,
    method: "delete",
    data,
  });
}
