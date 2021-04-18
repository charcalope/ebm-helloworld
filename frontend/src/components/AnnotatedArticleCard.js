import '../styles/ArticleCard.css';

export default function AnnotatedArticleCard({title, categories, lastEditedDate}) {

    function categoryIndicator() {
        let top2categories = [];
        let unseenCategories = 0;

        if (categories == null || categories == undefined) {
            top2categories = [];
            unseenCategories = 0;
        } else if (categories.length < 3) {
            top2categories = categories;
            unseenCategories = 0;
        } else {
            top2categories = categories.slice(0,2);
            unseenCategories = categories.length - 2;
        }

        if (top2categories != undefined || top2categories != null) {
            return (
            <span style={{}}>
                {(top2categories.map((category) =>
                    <button className="category-green-button">{category}</button>
                ))}
                {unseenCategories > 0 && (
                    <button className="category-unfilled-button">{String("+" + unseenCategories)}</button>
                )}
            </span>
            );
        } else {
            return;
        }
    }
    

    return (
        <div className="square-card">
            <img className="square-card-photo"></img>
            <h1>{title}</h1>
            <span>
                <h3>Last Edited:&nbsp;</h3> <p>{lastEditedDate}</p>
            </span>

            {categoryIndicator()}
            
            <span style={{marginTop: "5px"}}>
            <button className="unfilled-button">
                <svg width="15px" height="15px" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M213.546 16.9706C222.919 7.59799 238.115 7.59795 247.487 16.9706C256.86 26.3432 256.86 41.5391 247.487 50.9117L239.709 58.6899L205.768 24.7487L213.546 16.9706ZM230.517 67.8822L78.4889 219.91L44.5478 185.969L196.576 33.9411L230.517 67.8822ZM36.7696 193.747L16.9706 247.487L70.7107 227.688L36.7696 193.747Z" fill="#3B9F88"/>
                </svg>
                <p>Edit</p>
            </button>
            <button className="green-button">
                <svg width="15px" height="15px" viewBox="0 0 97 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M97 14.1137L35.7715 80L0 41.5072L14.9721 27.3935L35.7715 49.7753L82.0279 0L97 14.1137Z" fill="white"/>
                </svg>

                <p>Submit</p>
            </button>
            </span>
            
        </div>
    )
}

