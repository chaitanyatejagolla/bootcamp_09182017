export class RestUtil {

  getCars = (obj) => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      });
      xhr.open(obj.method, obj.url);
      xhr.send();
    });
  };
  
}