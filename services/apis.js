import {request} from '../Utils/xhr';
import {HTTP_PROGRAM_TODAY, HTTP_ADD_REQUEST} from './endpoints';

const paramsToken = params => {
  return {
    params: params,
    headers: {
    //   Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': false,
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length',
    },
  };
};

//Auth

export async function login(body) {
  return await request.get(HTTP_ADD_REQUEST, body);
}

export async function getProgramData(params) {
  return await request.get(
    `${HTTP_PROGRAM_TODAY}`,
    paramsToken(params),
  );
}

  export async function contactFormData(params) {
    return await request.get(
      `${HTTP_ADD_REQUEST}`,
      paramsToken(params),
    );
}
