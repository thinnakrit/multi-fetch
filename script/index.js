const unirest = require('unirest');
exports.FETCHING = async (url, data, method, format) => {
    const formatList = {
        'json': 'application/json',
        'form': 'multipart/form-data'
    }
    const headers = { 'Accept': '*', 'Content-Type': formatList[format] }
    const response = new Promise(reslove => {
        if (format === 'post') {
            if (format === 'json')
                unirest.post(url)
                    .headers(headers)
                    .send(data)
                    .end(function (response) {
                        resolve(response);
                    });
            else if (format === 'form')
                unirest.post(url)
                    .headers(headers)
                    .form(data)
                    .end(function (response) {
                        resolve(response);
                    });
        } else if (format === 'get') {
            if (format === 'json')
                unirest.get(url)
                    .headers(headers)
                    .send(data)
                    .end(function (response) {
                        resolve(response);
                    });
            else if (format === 'form')
                unirest.get(url)
                    .headers(headers)
                    .form(data)
                    .end(function (response) {
                        resolve(response);
                    });
        }

    })
    return response;
    
}
