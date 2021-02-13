import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import {
  SEND_MESSAGE,
  UPDATE_NEW_MESSAGE_TEXT,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};
let mapDispatchToProps = (dispatch) => {
  return {
    SEND_MESSAGE: () => {
      dispatch(SEND_MESSAGE());
    },
    UPDATE_NEW_MESSAGE_TEXT: (body) => {
      dispatch(UPDATE_NEW_MESSAGE_TEXT(body));
    },
  };
};
const DialogsContainer = withAuthRedirect(
  connect(mapStateToProps, mapDispatchToProps)(Dialogs)
);

export default DialogsContainer;
