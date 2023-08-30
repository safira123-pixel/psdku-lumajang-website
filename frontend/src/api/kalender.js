import request from "@/utils/request";

export function addKalender(data) {
  return request({
    url: "/kalender",
    method: "post",
    data,
  });
}

export function getKalender() {
  return request({
    url: "/kalender",
    method: "get",
  });
}

export function editKalender(data, id) {
  return request({
    url: `/kalender/${id}`,
    method: "put",
    data,
  });
}

export function deleteKalender(data) {
  return request({
    url: `/kalender/${data.id}`,
    method: "delete",
    data,
  });
}
