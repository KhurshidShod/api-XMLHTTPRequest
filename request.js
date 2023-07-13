function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 10000;
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(JSON.parse(xhr.response))
            } else if(xhr.readyState === 4){
                let err = new Error('Invalid response');
                reject(err)
            }
        }
        xhr.open('GET', url);
        xhr.send()
    })
}
