import request from "@/utils/request";

export function addProfil(data) {
  return request({
    url: "/profil",
    method: "post",
    data,
  });
}

export function getProfil() {
  return request({
    url: "/profil",
    method: "get",
  });
}

export function editProfil(data, id) {
  return request({
    url: `/profil/${id}`,
    method: "put",
    data,
  });
}

export function deleteProfil(data) {
  return request({
    url: `/profil/${data.id}`,
    method: "delete",
    data,
  });
}
