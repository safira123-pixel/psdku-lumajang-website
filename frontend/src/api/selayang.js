import request from "@/utils/request";

export function addSelayang(data) {
  return request({
    url: "/selayang",
    method: "post",
    data,
  });
}

export function getSelayangs() {
  return request({
    url: "/selayang",
    method: "get",
  });
}

export function editSelayang(data, id) {
  return request({
    url: `/selayang/${id}`,
    method: "put",
    data,
  });
}

export function deleteSelayang(data) {
  return request({
    url: `/selayang/${data.id}`,
    method: "delete",
    data,
  });
}
