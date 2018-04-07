import React, { Component } from 'react';

class CamaraItem extends Component {
    render() {
        return (
            <div className="CamaraItem">
                <div className="camara">
                    {this.props.camara.nombre}: {this.props.camara.lugar}
                </div>
            </div>
        );
    }
}

export default CamaraItem;