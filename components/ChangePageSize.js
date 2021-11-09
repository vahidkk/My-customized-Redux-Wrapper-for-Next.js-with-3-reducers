import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changePageSize } from "../store/pagesize/action";

const ChangePageSize = ({ pagesize, changePageSize }) => {
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <div className="d-flex ">
        value={pagesize}
        {console.log("pagesize=", pagesize)}
        <select
          className="form-control"
          name="option"
          defaultValue={pagesize}
          onChange={(event) => {
            changePageSize(event);
          }}
        >
          <option value="6">Items in page: 6 </option>
          <option value="12">Items in page: 12</option>
          <option value="18">Items in page: 18</option>
          <option value="24">Items in page: 24</option>
        </select>
      </div>
      {/* <button onClick={addCount}>Add To Count</button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pagesize: state.pagesize.pagesize,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePageSize: bindActionCreators(
      (event) => changePageSize(event.target.value),
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePageSize);
