import React, { Component } from 'react';
import css from './styles.module.css';
import { getNews } from '../services/getNews';
import ImageGalleryItem from './ImageGalleryItems';
// import { Loader } from './Loader';
// import { Button } from './Button';

export default class ImageGallery extends Component {
    state = {
        news: [],
        page: 1,
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('this.props', this.props);
        if (prevProps.searchText !== this.props.searchText || prevState.page !== this.state.page) {
            // Очищаємо масив news перед новим пошуком
            if (prevProps.searchText !== this.props.searchText) {
                this.setState({ news: [], page: 1 });
            }

            getNews(this.props.searchText, this.state.page)
                .then(resp => resp.json())
                .then(data => {
                    // Додаємо нові новини до існуючого списку
                    this.setState(prevState => ({
                        news: [...prevState.news, ...data.hits],
                    }));
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }

    handleLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }));
    }

    render() {
        const { news } = this.state;
        const { searchText } = this.props;

        return (
            <div>
                <ul className={css.ImageGallery}>
                    {news && news.map(el => (
                        <ImageGalleryItem key={el.id} image={el.webformatURL} pic={el.largeImageURL} />
                    ))}
                </ul>
                {/* {searchText && (
                    news.length > 0 ? (
                        <Button handleLoadMore={this.handleLoadMore} />
                    ) : (
                        <Loader />
                    )
                )} */}
            </div>
        );
    }
}


