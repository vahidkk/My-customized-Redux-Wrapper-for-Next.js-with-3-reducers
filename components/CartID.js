import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeCartID } from "../store/cartID/action";

const CartID = ({ myCartID, changeCartID }) => {
  changeCartID({
    CHANGE: myCartID === null ? true : false,
    VALUE: new Date().getUTCMilliseconds(),
  });
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <div className="d-flex ">Persistent cart id ={myCartID}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myCartID: state.myCartID.myCartID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCartID: bindActionCreators(
      (generatedCartID) => changeCartID(generatedCartID),
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartID);
