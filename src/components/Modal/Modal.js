import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

export default class ModalWindow extends Component {

    componentDidMount() {
        console.log("Modal componentDidMount");
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        console.log("Modal componentWillUnmount");
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    };

    hanleBackDropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className="modal__backdrop" onClick={this.hanleBackDropClick}>
                <div className="modal__content">{this.props.children}</div>
            </div>,
            modalRoot
        );
    }
}