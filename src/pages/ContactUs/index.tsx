import emailjs from "@emailjs/browser";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";

import InfoModal from "@/components/InfoModal/index";
import {
  COMPANY_EMAIL,
  PUBLIC_KEY,
  SERVICE_ID_CONTACT_US,
  TEMPLATE_ID_CONTACT_US,
} from "@/constants/emailJS";
import { initialValue, validationSchema } from "@/pages/ContactUs/validation";

import * as StyledComponents from "./styled";
import { ContactUsType } from "./types";

const ContactUs: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const sendEmail = (values: ContactUsType) => {
    const templateParams = {
      to_name: `${values.firstName} ${values.lastName}`,
      from_email: values.email,
      subject: values.subject,
      message: values.message,
      to_email: COMPANY_EMAIL,
    };

    emailjs
      .send(
        SERVICE_ID_CONTACT_US,
        TEMPLATE_ID_CONTACT_US,
        templateParams,
        PUBLIC_KEY,
      )
      .then(
        () => {
          setModalMessage("Your request has been successfully processed!");
          setModalVisible(true);
        },
        () => {
          setModalMessage("An error occurred, please try again!");
          setModalVisible(true);
        },
      );
  };

  const handleSubmit = (
    values: ContactUsType,
    { resetForm }: FormikHelpers<ContactUsType>,
  ) => {
    sendEmail(values);
    resetForm();
  };

  return (
    <>
      <StyledComponents.StyledContactUs>
        <StyledComponents.StyledContactUsHeadingOne>
          Contact Us
        </StyledComponents.StyledContactUsHeadingOne>
        <StyledComponents.StyledContactUsHeadingThree>
          Say Hello, send us your thoughts about our products, or share
          <br /> your ideas with our Team!
        </StyledComponents.StyledContactUsHeadingThree>

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <StyledComponents.StyledGridBlockInput>
              <StyledComponents.WrapperInput>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  as={StyledComponents.Input}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error-message"
                />
              </StyledComponents.WrapperInput>

              <StyledComponents.WrapperInput>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  as={StyledComponents.Input}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error-message"
                />
              </StyledComponents.WrapperInput>

              <StyledComponents.WrapperInput>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  as={StyledComponents.Input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </StyledComponents.WrapperInput>

              <StyledComponents.WrapperInput>
                <Field
                  name="subject"
                  placeholder="Subject"
                  as={StyledComponents.Input}
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="error-message"
                />
              </StyledComponents.WrapperInput>

              <StyledComponents.WrapperInput>
                <Field
                  name="message"
                  placeholder="Message"
                  as={StyledComponents.TextArea}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error-message"
                />
              </StyledComponents.WrapperInput>
            </StyledComponents.StyledGridBlockInput>

            <StyledComponents.Button type="submit">
              SEND
            </StyledComponents.Button>
          </Form>
        </Formik>
      </StyledComponents.StyledContactUs>
      <InfoModal show={modalVisible} onClose={handleCloseModal}>
        {modalMessage}
      </InfoModal>
    </>
  );
};

export default ContactUs;
