const BtnCol = ({ textContent, id }) => {
  return (
  <div className="col">
    <div className="row h-100 align-items-center justify-content-center">
      <button 
        id={id} 
        className="btn btn-light btn-lg fs-1 rounded-circle h-50 w-75"
      >
        {textContent}
      </button>
    </div>
  </div>
)};

export default BtnCol;
