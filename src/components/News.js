// import React, { Component } from 'react'      //this is for class based components
import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from 'react'


// export class News extends Component {

const News = (props) => {


    // this is the method for proptypes and default props iin class based components

    // static defaultProps = {
    //     country: "in",
    //     pageSize: 6,
    //     category: "general"
    // }
    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string
    // }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // articles = []

    // constructor will only works with clss based components

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         articles: this.articles,
    //         loading: false,
    //         page: 1,
    //         totalResults: 0
    //     }
    // }
    // async update() {    this is syntax of class based components
    const update = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        // this.setState({ loading: true });
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        // console.log(parseData);

        // this is used to set state in class based components
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        // this.setState({
        //     articles: parseData.articles,
        //     totalResults: parseData.totalResults,
        //     loading: false
        // })

        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${props.category} - News`
        update();
    }, [])

    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     // console.log(parseData);
    //     this.setState({
    //         articles: parseData.articles,
    //         totalResults: parseData.totalResults,
    //         loading: false
    //     })

    // }

    // handlePrevClick = async () => {
    //     // console.log("previous");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9407a00972944d729c9a17b817a43733&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true });

    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parseData.articles,
    //     //     loading: false
    //     // })
    //     this.setState({ page: this.state.page - 1 })
    //     this.update();
    // }
    // handleNextClick = async () => {
    //     console.log("next");

    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 21))) {
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9407a00972944d729c9a17b817a43733&page=${this.state.page + 1}&pageSize=${props.pageSize}`;

    //     //     this.setState({ loading: true });

    //     //     let data = await fetch(url);
    //     //     let parseData = await data.json();
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parseData.articles,
    //     //         loading: false
    //     //     })
    //         this.setState({ page: this.state.page + 1 })
    //         this.update();
    //     }

    const fetchMoreData = async () => {
        // this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        // this.setState({ loading: true });
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setLoading(false);
        // this.setState({
        //     articles: this.state.articles.concat(parseData.articles),
        //     totalResults: parseData.totalResults,
        //     loading: false
        // })
    }

    // render() {
    return (
        <>

            <h1 className='text-center' style={{ margin: "70px 0 10px 0" }}>News - {props.category} Top Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container my-3'>
                    <div className="row my-2" >
                        {articles.map((e) => {
                            return <div className="col-md-4" key={e.url}>
                                <NewsItem Title={e.title ? e.title.slice(0, 40) : ""} Description={e.description ? e.description.slice(0, 80) : ""} imageUrl={e.urlToImage} newsUrl={e.url} source={e.source.name} author={e.author} time={e.publishedAt} />
                            </div>
                        })}
                        {/* <div className="container d-flex justify-content-between">

                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                            <button disabled={this.state.page + 1 > (this.state.totalResults / 21)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                        </div> */}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
// }

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News