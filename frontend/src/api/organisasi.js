import request from "@/utils/request";

export function addOrganisasi(data) {
  return request({
    url: "/organisasi",
    method: "post",
    data,
  });
}

export function getOrganisasi() {
  return request({
    url: "/organisasi",
    method: "get",
  });
}

export function editOrganisasi(data, id) {
  return request({
    url: `/organisasi/${id}`,
    method: "put",
    data,
  });
}

export function deleteOrganisasi(data) {
  return request({
    url: `/organisasi/${data.id}`,
    method: "delete",
    data,
  });
}
