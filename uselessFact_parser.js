function fetchData(url) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
    data = xhr.responseText; 
    const parser = new DOMParser();
    const htmlString = parser.parseFromString(data, "text/html"); 
    const randomFactElement = htmlString.querySelector(".uselessfact");
    document.write(`<p>${randomFactElement.textContent}</p>`);    
    }); 

    xhr.open('GET', url, true); 
    xhr.send(); 
}
const randomFactUrl = `https://uselessfacts.jsph.pl/random?language=en`; 
let button = `<input type="button" value="Get Fact" href="javascript:void(0)" onclick="fetchData(randomFactUrl)"">`; 

document.write(button); 