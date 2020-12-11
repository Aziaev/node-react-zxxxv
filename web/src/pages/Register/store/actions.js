export const appActionTypes = {
  SUBMIT_FORM: "SUBMIT_FORM",
  SUBMIT_FORM_SUCCESS: "SUBMIT_FORM_SUCCESS",
  SUBMIT_FORM_ERROR: "SUBMIT_FORM_ERROR",
};

export const registerActions = {
  submitForm(values) {
    return { type: appActionTypes.SUBMIT_FORM, payload: values };
  },
  submitFormSuccess(user) {
    return { type: appActionTypes.SUBMIT_FORM_SUCCESS, payload: user };
  },
  submitFormError(error) {
    return { type: appActionTypes.SUBMIT_FORM_ERROR, payload: error };
  },
};
