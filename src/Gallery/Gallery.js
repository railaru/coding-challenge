import React, { Component } from 'react';
import './Gallery.css';
import './Rearrange';

let labelsFromImages;
let URL_Prefix;
let imgUrls;

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
        this.renderImageContent = this.renderImageContent.bind(this);   
        labelsFromImages = this.props.labelObjFromParent;
        URL_Prefix = this.props.prefixFromParent;
        imgUrls = this.props.urlsFromParent;
    }

  renderImageContent(src, index) {
    let labelsToAdd = labelsFromImages["labelId" + index.toString()];
    let labelsToAddJoined;

    if(labelsToAdd == undefined){console.log("undefined");}
    else{
        labelsToAddJoined = labelsToAdd.join(" ");
        console.log("labelsToAddJoined: ", labelsToAddJoined);
    }
    return (<div><img src={URL_Prefix + src} key={URL_Prefix + src} className={"filter " + labelsToAddJoined}/></div>);
  }
  
  render() {
    return (
        <div className="gallery-container">
            <div className="gallery-grid">
                {imgUrls.map(this.renderImageContent)}
            </div>
        </div>
        );
  }
}

