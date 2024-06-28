import * as yup from "yup";

import { ContactUsType } from "@/pages/ContactUs/types";

export const initialValue: ContactUsType = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export const formData = (): ContactUsType => {
  return {
    firstName: (
      document.querySelector('input[name="firstName"]') as HTMLInputElement
    ).value,
    lastName: (
      document.querySelector('input[name="lastName"]') as HTMLInputElement
    ).value,
    email: (document.querySelector('input[name="email"]') as HTMLInputElement)
      .value,
    subject: (document.querySelector('div[name="subject"]') as HTMLInputElement)
      .value,
    message: (document.querySelector("textarea") as HTMLTextAreaElement).value,
  };
};

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Name is required")
    .min(2, "The name must contain at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "The name must contain at least 2 characters"),
  email: yup
    .string()
    .email("Incorrect format email")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(2, "The message must contain at least 2 characters"),
});
