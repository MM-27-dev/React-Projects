function customRender(reactElement,container){
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHtml = reactElement.children;
    domElement.setAttribute('href', reactElement.href)
    domElement.setAttribute('target', reactElement.target);
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === "children") continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

}

const reactElement = {
  type: "a",

  props: {
    href: "https://www.google.com/maps",
    target: "_blank",
  },
  children: "Click me to vist google",
};


const mainConatiner =  document.querySelector("#root");

customRender(reactElement, mainConatiner)
