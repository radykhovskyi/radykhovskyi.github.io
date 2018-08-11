

class Component {

  constructor(props, tag = 'div') {
    this._tag = tag;
    this._props = props;

    this._children = [];
  }

  /**
   * @returns DomElement
   */
  render() {
    const domElement = document.createElement(this._tag);

    if (this._props.innerText) {
      const t = document.createTextNode(this._props.innerText);
      domElement.appendChild(t);
    }

    if (this._props.classList) {
      if (!Array.isArray(this._props.classList)) {
        throw new Error('Class is not a class lol');
      }

      this._props.classList.forEach(cl => {
        domElement.classList.add(cl);
      });

    }

    this._children.forEach((chDomEle) => {
      domElement.appendChild(chDomEle.render());
    });

    const attrs = Object.keys(this._props);
    attrs.forEach((attr) => {
      if (Component.specialAttrs.has(attr)) {
        return;
      }
      domElement.setAttribute(attr, this._props[attr]);
    });

    return domElement;
  }

  addChild(ch) {
    this._children.push(ch);

    return this;
  }

}

Component.specialAttrs = new Set([
  'innerText',
  'classList'
]);
