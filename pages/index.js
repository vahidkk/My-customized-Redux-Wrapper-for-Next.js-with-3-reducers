import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../components/Page";
import { addCount } from "../store/count/action";
import { changePageSize } from "../store/pagesize/action";
import { changeCartID } from "../store/cartID/action";
import { wrapper } from "../store/store";
import { serverRenderClock, startClock } from "../store/tick/action";

const Index = (props) => {
  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return <Page title="Index Page" linkTo="/other" />;
};

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(serverRenderClock(true));
  store.dispatch(addCount());
  store.dispatch(changeCartID());
  store.dispatch(changePageSize());
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    changeCartID: bindActionCreators(changeCartID, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
    changePageSize: bindActionCreators(changePageSize, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Index);
