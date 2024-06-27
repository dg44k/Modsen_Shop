import React, { FC, FormEvent, FormEventHandler, useRef } from "react";
import {
  StyledButtonNewsletter,
  StyledFormNewsletter,
  StyledInputNewsletter,
  WrapperInput,
} from "./styled";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { NewsletterType, initialValues, validationSchema } from "./helper";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/constants/constants";

const Newsletter: FC = () => {
  const sendEmail = (email: string) => {
    const templateParams = {
      to_email: email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      response => {
        console.log("Email sent!", response.status, response.text);
      },
      error => {
        console.error("Email sending failed:", error);
      },
    );
  };

  const handleSubmit = (
    values: NewsletterType,
    { resetForm }: FormikHelpers<NewsletterType>,
  ) => {
    sendEmail(values.email);
    resetForm();
  };

  return (
    <StyledFormNewsletter>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <WrapperInput>
            <Field
              type="email"
              name="email"
              placeholder="Give an email, get the newsletter."
              as={StyledInputNewsletter}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </WrapperInput>
          <StyledButtonNewsletter type="submit" value="&#8594;" />
        </Form>
      </Formik>
    </StyledFormNewsletter>
  );
};

export default Newsletter;
