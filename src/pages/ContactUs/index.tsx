import { FC } from "react";
import {
  Button,
  Input,
  StyledContactUs,
  StyledContactUsHeadingOne,
  StyledContactUsHeadingThree,
  StyledGridBlockInput,
  TextArea,
  WrapperInput,
} from "./styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValue, validationSchema } from "@/pages/ContactUs/types/helper";
import { ContactUsType } from "./types/types";

const ContactUs: FC = () => {
  const handleSubmit = (values: ContactUsType) => {
    console.log(values);
  };
  return (
    <StyledContactUs>
      <StyledContactUsHeadingOne>Contact Us</StyledContactUsHeadingOne>
      <StyledContactUsHeadingThree>
        Say Hello send us your thoughts about our products or share
        <br /> your ideas with our Team!
      </StyledContactUsHeadingThree>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <StyledGridBlockInput>
            <WrapperInput>
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                as={Input}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </WrapperInput>

            <WrapperInput>
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                as={Input}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </WrapperInput>

            <WrapperInput>
              <Field type="email" name="email" placeholder="Email" as={Input} />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </WrapperInput>

            <WrapperInput>
              <Field
                type="text"
                name="subject"
                placeholder="Subject"
                as={Input}
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="error-message"
              />
            </WrapperInput>

            <WrapperInput>
              <Field name="message" placeholder="Message" as={TextArea} />
              <ErrorMessage
                name="message"
                component="div"
                className="error-message"
              />
            </WrapperInput>
          </StyledGridBlockInput>

          <Button type="submit">SEND</Button>
        </Form>
      </Formik>
    </StyledContactUs>
  );
};

export default ContactUs;
