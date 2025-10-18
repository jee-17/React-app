import PropTypes from 'prop-types'

function Course(props){
   if(props.show  ){
    return(
        <div className="card">
            <img src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <p> {props.price}</p>
            <span>{props.rating}</span>
        </div>
    );
  }
  else{
    return(
       <div className="card">Course Not Available</div>
    );
  }
}
Course.propType={
    name : PropTypes.string,
    rating : PropTypes.float

}

export default Course