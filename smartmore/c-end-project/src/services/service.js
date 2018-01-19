import request from '../utils/http';

export async function query() {
  return request('/member/current',{
  	method:'get',
  });
}

export async function score() {
  return request('/score/detail',{
  	method:'get',
  });
}

export async function recommend() {
  return request('/recommend',{
  	method:'get',
  });
}