
const getTodos = (resource)=>{
    return new Promise ((resolev, reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4&& request.status === 200)
            {
                const data =JSON.parse(request.responseText);
                resolev(data);
            }
            else if (request.readyState == 4)
                reject("coud not fetch data");
        });
        request.open('GET', resource);
        request.send();

    });
}