import React, { Component } from 'react';
import css from './styles.module.css';
// import ModalWindow from './Modal/Modal';

export default class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false, // Додайте стейт для визначення, чи показувати модальне вікно
    };

    // Метод для відкриття модального вікна
    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    // Метод для закриття модального вікна
    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { image, pic } = this.props;
        const { isModalOpen } = this.state;

        return (
            <div>
                <li className={css.ImageGalleryItem} onClick={this.openModal}>
                    <img src={image} alt='Picture' />
                </li>

                {/* {isModalOpen && (
                    <ModalWindow onClose={this.closeModal}>
                        <img src={pic} alt='Picture' />
                    </ModalWindow>
                )} */}
            </div>
        );
    }
}
