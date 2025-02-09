import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function CategorieCard(props) {
    
    return (
            <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <img className="card-img-top" src={props.imgSrc} alt={props.imgSrc} />
                <div className="card-body">
                    <h5 className="card-title">{props.category}</h5>
                    <p className="card-text">{props.description}</p>
                    <button to="/dashboard" className="btn btn-primary" onClick={
                        ()=>{
                            props.btnClick(props.category)
                        }
                    }>Explore Quiz</button>
                    
                </div>
            </div>
    )
}

export default CategorieCard;