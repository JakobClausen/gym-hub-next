import { object, string } from "yup";

export const loginValidationSchema = object().shape({
  email: string().email().required("Required"),

  password: string().required("Required"),
});
