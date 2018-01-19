import fetch from 'dva/fetch';

function parseJSON(response) {
	return response.json();
}

function checkStatus(response) {
	if(response.status >= 200 && response.status < 300) {
		return response;
	}
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function get(url, params) {
	
	url = "/service1210"+url;
	var oriUr = url;
	// 添加时间戳清除ajax缓存
	const newOptions = {...params};
	let requestMode = params.method;
	let urlIE;
	const dateParameter = `&date=${new Date().getTime()}`;
	if(params.body) {
		let paramsArray = [];
		//拼接参数  
		Object.keys(params.body).forEach(key => {
			if(params.body[key]){
				paramsArray.push(key + '=' + params.body[key])
			}
		})
		if(url.search(/\?/) === -1) {
			url += '?' + paramsArray.join('&')
		} else {
			url += '&' + paramsArray.join('&')
		}
	}
	if(requestMode) {
		requestMode = requestMode.toUpperCase();
	}
	
	newOptions.credentials = 'include';
	newOptions.headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
		// 'AccessToken': window.sessionStorage.getItem('AccessToken')
		'AccessToken': 'eyJhbGciOiJIUzUxMiJ9.eyJtYWxsSWQiOjg4ODgsInR5cGUiOjEsImV4cCI6MTUxNjExMTYwNywidXNlcklkIjoxMDEwMDV9.jcUhnkl2bqDDpXx_LlhF8exVN077-h2IlTF5LMekAd4iLYx3QSzFFsgWEcVDTuxEGjAw7TKvJevwGoMyZd1c4A'
	}
	if(requestMode === 'POST') {
		urlIE = oriUr;
		newOptions.headers["Content-Type"] = 'application/json;charset=utf-8';
		newOptions.body.date = new Date().getTime();
		newOptions.body = JSON.stringify(newOptions.body);
	} else {
		newOptions.method = 'GET';
		urlIE = url;
	}
	return fetch(urlIE, newOptions)
		.then(checkStatus)
		.then(parseJSON)
		.then(data => ({data}))
		.catch(err => ({err}));
}