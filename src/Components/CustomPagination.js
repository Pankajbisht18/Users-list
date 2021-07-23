import Pagination from '@material-ui/lab/Pagination';
import './css/Pagination.css';

const CustomPagination = ({setPage, numOfPages=2}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }
    return(
        <div className="pagination">
            <Pagination 
                count={numOfPages}
                color="primary"
                hideNextButton
                hidePrevButton
                onChange={(e)=>handlePageChange(e.target.textContent)} 
            />
        </div>
    );
}
export default CustomPagination;