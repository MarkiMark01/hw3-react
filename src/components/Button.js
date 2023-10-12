import React from 'react';
import css from './styles.module.css';
export const Button = ({ handleLoadMore }) => {
    return (
        <button type="button" onClick={handleLoadMore} className={css.Button}>Load more</button>
    )
}