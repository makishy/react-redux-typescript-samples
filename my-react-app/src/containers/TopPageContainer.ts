import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TextInputActions } from "../actions";
import { TopPageForm } from "../components/TopPageForm";
import { AppState } from "../store";

export interface TopPageHandler {
    handleOnChangeValue(value: string): void
    handleOnSelectValue(value: string): void
    handleOnClick(): void
}

const mapStateToProps = (appState: AppState) => {
    return {...appState.state, 
        inputValue: appState.state.inputValue,
        selectedValue: appState.state.selectedValue,
        clickCount: appState.state.clickCount
    }
}

const handleOnChangeValue = (value: string) => async (dispatch: Dispatch) => {
    dispatch(TextInputActions.updateTextInputValue(value))
}

const handleOnSelectValue = (value: string) => async (dispatch: Dispatch) => {
    dispatch(TextInputActions.updateSelectedValue(value))
}
const handleOnClick = () => async (dispatch: Dispatch) => {
    dispatch(TextInputActions.updateClickCount())
}

export default connect(mapStateToProps, { handleOnChangeValue,handleOnSelectValue,handleOnClick })(TopPageForm)
