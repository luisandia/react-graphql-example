import React, { Component } from 'react'


class LyricList extends Component {

    renderLyrics() {
        console.log(this.props.lyrics)
        return this.props.lyrics.map(({ id, content }) => {
            console.log(content)
            return (
                <li key={id} className="collection-item"> {content}</li>
            );
        });
    }

    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        )
    }
}

export default LyricList;