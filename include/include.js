(async() => {
    let includeContainers = document.querySelectorAll("include");
    for(let container of includeContainers){
        let component = container;
        let attrs = component.getAttributeNames();

        const response = await fetch(`${component.innerText}.html`);
        const responseData = await response.text();
        component.innerHTML = responseData;
        let nodes = responseData.toString();
        for(let attr of attrs){
            let elementAttr = component.getAttribute(attr);
            nodes = nodes.replace(
                new RegExp(`{{\\s*${attr}\\s*}}`,"g"),
                elementAttr
            );
        }
         component.innerHTML = nodes;
    }
})();