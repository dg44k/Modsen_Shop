import React, { FC } from "react";
import {
  StyledButtonNewsletter,
  StyledFormNewsletter,
  StyledInputNewsletter,
  WrapperInput,
} from "./styled";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { NewsletterType, initialValues, validationSchema } from "./helper";

const Newsletter: FC = () => {
  const handleSubmit = (values: NewsletterType) => {
    console.log(values);
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
