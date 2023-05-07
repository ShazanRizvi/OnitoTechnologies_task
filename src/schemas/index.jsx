import * as yup from "yup";

export const validateSchema = yup
  .object({
    name: yup.string().min(2).required("Please enter your name"),
    dob: yup.string().required("Please enter your date of birth"),
    sex: yup.string().required("please select your gender"),
    mobile: yup.string().min(10).max(10),
    govID: yup.string().min(10).max(12),
    email: yup.string().email("Value should be a valid email").required("Email is required"),
  })
  .required();
