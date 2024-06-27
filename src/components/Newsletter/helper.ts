import * as yup from "yup";

export type NewsletterType = {
  email: string;
};

export const initialValues: NewsletterType = {
  email: "",
};

export const formData = (): NewsletterType => {
  return {
    email: (document.querySelector('input[name="email"]') as HTMLInputElement)
      .value,
  };
};

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Incorrect format email")
    .required("Email is required"),
});
