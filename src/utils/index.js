import { showSuccessToast, showErrorToast } from "../services/toastService";

export function withToastForError(payloadCreator, successMsg, errorMsg) {
  return async (args) => {
    try {
      const response = await payloadCreator(args);
      showSuccessToast(successMsg);
      return response?.data;
    } catch (err) {
      showErrorToast(errorMsg);
      throw err;
    }
  };
}
