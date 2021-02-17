import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { SEND_MESSAGE } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

export default compose(
  connect(mapStateToProps, { SEND_MESSAGE }),
  withAuthRedirect
)(Dialogs);
