import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {

    renderBands = () => {
        return this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>)
    }

    render() {
        return (
            <div>
                {this.renderBands()}
            </div>
        )
    }
}
