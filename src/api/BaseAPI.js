
// import 'isomorphic-fetch';

const defaultHeaders = {
    'Content-Type': 'application/json; charset=UTF-8',
};

export default async function sendRequest(url, options = {}) {
    
    const optionMapping = {
        method: 'POST', // default method
        ...defaultHeaders,
        ...options,
    };
    const response = await fetch(
        url, optionMapping,
    );
    
    const data = await response.json();
    
    if (data.error) {
        throw new Error(data.error);
    }
    console.log('data', data);
    return data;
};