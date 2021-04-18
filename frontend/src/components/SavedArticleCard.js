import '../styles/ArticleCard.css';

export default function SavedArticleCard({title, author, date}) {
    return (
        <div className="square-card">
            <img className="square-card-photo"></img>
            <h1>{title}</h1>
            <span>
                <h3>Author:&nbsp;</h3> <p>{author}</p>
            </span>
            <span>
                <h3>Date:&nbsp;</h3> <p>{date}</p>
            </span>
            <button className="unfilled-button">
                <svg width="15px" height="15px" viewBox="0 0 64 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H32H60C62.2091 0 64 1.79086 64 4V106.042C64 109.882 59.1154 111.516 56.8051 108.449L35.1949 79.7613C33.5947 77.6369 30.4053 77.6369 28.8051 79.7613L7.19494 108.449C4.8846 111.516 0 109.882 0 106.042V4Z" fill="#3B9F88"/>
                </svg>
                <p>Unsave Article</p>
            </button>
            <button className="green-button">
                <svg width="15px" height="15px" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M213.546 16.9706C222.919 7.59799 238.115 7.59795 247.487 16.9706C256.86 26.3432 256.86 41.5391 247.487 50.9117L239.709 58.6899L205.768 24.7487L213.546 16.9706ZM230.517 67.8822L78.4889 219.91L44.5478 185.969L196.576 33.9411L230.517 67.8822ZM36.7696 193.747L16.9706 247.487L70.7107 227.688L36.7696 193.747Z" fill="white"/>
                </svg>

                <p>New Annotation</p>
            </button>
        </div>
    )
}