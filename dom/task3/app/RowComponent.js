

class RowComponent extends Component {


  render() {
    if (!this._props.data) {
      return super.render();
    }

    const fields = Object.keys(this._props.data);

    fields.forEach((elKey) => {
      this.addChild( new Component({
        innerText: this._props.data[elKey]
      }, 'td')
      );

    });

    return super.render();
  }

}
