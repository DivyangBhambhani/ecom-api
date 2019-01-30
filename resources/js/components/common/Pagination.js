var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';

class Pagination extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items:props.items,
	      	currentPage: 1,
	      	itemsPerPage: props.itemPerPage,
	      	upperPageBound: 3,
	        lowerPageBound: 0,
	        isPrevBtnActive: 'disabled',
	        isNextBtnActive: '',
	        pageBound: 3
	    }
	    this.handleClick = this.handleClick.bind(this);
	    this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ itemsPerPage: nextProps.itemPerPage });  
	}

	componentDidUpdate() {
        $(".pagination ul li a").removeClass('current');
        $('.pagination ul li #'+this.state.currentPage).addClass('current');
    }

	handleClick(event) {
	    $(".pagination ul li a").removeClass('current');
        $('.pagination ul li #'+this.state.currentPage).addClass('current');
	    this.setState({
	    	currentPage: Number(event.target.id)
	    });
        this.props.onPageChange(Number(event.target.id))
	    this.setPrevAndNextBtnClass(Number(event.target.id))
	}

	setPrevAndNextBtnClass(listid) {
        let totalPage = Math.ceil(this.state.items.length / this.state.itemsPerPage);
        console.log(this.state.items.length,this.state.itemsPerPage,'Plugin');
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if(totalPage === listid && totalPage > 1){
            this.setState({isPrevBtnActive: ''});
        }
        else if(listid === 1 && totalPage > 1){
            this.setState({isNextBtnActive: ''});
        }
        else if(totalPage > 1){
            this.setState({isNextBtnActive: ''});
            this.setState({isPrevBtnActive: ''});
        }
    }

    btnIncrementClick() {
    	// Increment ellipses - sets current page (upper + pagebound) and upper/lower pagebound values 
	    this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
	    this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});         
	    let currentPage = this.state.upperPageBound + 1;
	    this.setState({ currentPage });
	    this.props.onPageChange(currentPage);
	    // check prev and next disable/enable
	    this.setPrevAndNextBtnClass(currentPage);
    }
    btnDecrementClick() {
      	// Decrement ellipses - sets current page (upper - pagebound) and upper/lower pagebound values 
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        let currentPage = this.state.upperPageBound - this.state.pageBound;
        this.setState({ currentPage });
        this.props.onPageChange(currentPage);
        // check prev and next disable/enable
        this.setPrevAndNextBtnClass(currentPage);
    }

    btnPrevClick() {
        if((this.state.currentPage -1) == this.state.lowerPageBound){            
            this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        }
        let listid = this.state.currentPage - 1;
        this.setState({ currentPage : listid});
        this.props.onPageChange(listid);
        this.setPrevAndNextBtnClass(listid);
    }
    btnNextClick() {
        if((this.state.currentPage +1) > this.state.upperPageBound ){
            this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        }
        let listid = this.state.currentPage + 1;
        this.setState({ currentPage : listid});
        this.props.onPageChange(listid);
        this.setPrevAndNextBtnClass(listid);
    }

	render() {
		const { items, currentPage, itemsPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;

		// Logic for displaying items
	    const indexOfLastProd = currentPage * itemsPerPage;
	    const indexOfFirstProd = indexOfLastProd - itemsPerPage;
	    const currentProducts = items.slice(indexOfFirstProd, indexOfLastProd);

	    // Logic for displaying page numbers
	    const pageNumbers = [];
	    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
	    	pageNumbers.push(i);
	    }

	    const renderPageNumbers = pageNumbers.map(number => {
	    	if (number === 1 && currentPage === 1) {
		    	return (
		    		<li key={number}>
		    			<Link className="current" onClick={this.handleClick} id={number} to="#">
		    				{number}
		    			</Link>
		    		</li>
		      	);
		   	} else if((number < upperPageBound + 1) && number > lowerPageBound) {
		   		return (
		    		<li key={number}>
		    			<Link onClick={this.handleClick} id={number} to="#">
		    				{number}
		    			</Link>
		    		</li>
		      	);
		    }
	    });

	    let pageIncrementBtn = null;
        if(pageNumbers.length > upperPageBound){
            pageIncrementBtn = <li><Link to='#' onClick={this.btnIncrementClick}> &hellip; </Link></li>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1){
            pageDecrementBtn = <li><Link to='#' onClick={this.btnDecrementClick}> &hellip; </Link></li>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className=''><Link to="#" className="prev disable-anchor">Previous</Link></li>
        }
        else{
            renderPrevBtn = <li className=''><Link to="#" onClick={this.btnPrevClick} className="prev">Previous</Link></li>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <li><Link to="#" className="next disable-anchor">Next</Link></li>
        }
        else{
            renderNextBtn = <li><Link to="#" onClick={this.btnNextClick} className="next">Next</Link></li>
        }

		return(
			<div className="pagination">
				<ul className="page-list">
					{renderPrevBtn}
		            {pageDecrementBtn}
		            {renderPageNumbers}
		            {pageIncrementBtn}
		            {renderNextBtn}
				</ul>
			</div>
		)
	}
}

module.exports = Pagination;