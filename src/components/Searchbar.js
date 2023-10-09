import css from './styles.module.css'
import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = {
        value: '',
    }

    // handleChange({ target: { value } }) {
    //     this.setState({ value })
    // }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.value);
    }

    render() {
        return (<header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={css.searchFormButton}>
                    <span>Search</span>
                </button>

                <input
                    className={css.SearchFormInput}
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </form>
        </header>)
    }

}