

class RowComponent extends Component {

  _getComponent(element) {
      if (typeof(element) === 'object') {
          return new Component({}, 'td').addChild(element);
      }

      return new Component({innerText: element}, 'td');
  }

  render() {
    if (!this._props.data) {
      return super.render();
    }

    const fields = Object.keys(this._props.data);

    fields.forEach((elKey) => {
      this.addChild(this._getComponent(this._props.data[elKey]));
    });

    return super.render();
  }

}
