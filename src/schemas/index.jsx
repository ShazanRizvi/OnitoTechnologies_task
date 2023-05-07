import * as yup from "yup"

export const validateSchema = yup.object({
  name: yup.string().min(2).required("Please enter your name"),
  dob: yup.date().required("Please enter your date of birth"),
  sex: yup.string().required("please select your gender"),
  
});