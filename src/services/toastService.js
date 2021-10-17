import { toast } from "react-toastify";

export const showSuccessToast = (values) => {
  toast.success(values);
};

export const showErrorToast = (values) => {
  toast.error(values);
};

export const showWarningToast = (values) => {
  toast.warn(values);
};
