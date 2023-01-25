import React from 'react'

// export class NewsItem extends Component {            // this is for class based components now we are converting it to function based components

// render() {
const NewsItem = (props) => {
    // let { Title, Description, imageUrl, newsUrl, source, author, time } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: 1 }}>
                    {props.source}
                </span>
                <img src={!props.imageUrl ? "https://cdn.mos.cms.futurecdn.net/sVVYDN3Kb2oQg3RPFTEBmc-1200-80.jpg" : props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.Title}...</h5>
                    <p className="card-text">{props.Description}...</p>
                    <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    <p className="card-text"><small className="text-muted">By {!props.author ? "Unknown" : props.author} on {new Date(props.time).toGMTString()}</small></p>
                </div>
            </div>
        </div>
    )
}
// }

export default NewsItem