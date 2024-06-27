import { FC, FormEvent, FormEventHandler, useRef, useState } from "react";
import {
  StyledButtonNewsletter,
  StyledFormNewsletter,
  StyledInputNewsletter,
  WrapperInput,
} from "./styled";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { NewsletterType, initialValues, validationSchema } from "./helper";
import emailjs from "@emailjs/browser";
import {
  PUBLIC_KEY,
  SERVICE_ID_NEWSLETTER,
  TEMPLATE_ID_NEWSLETTER,
} from "@/constants/constants";
import InfoModal from "../InfoModal";

const Newsletter: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const sendEmail = (email: string) => {
    const templateParams = {
      to_email: email,
    };

    emailjs
      .send(
        SERVICE_ID_NEWSLETTER,
        TEMPLATE_ID_NEWSLETTER,
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
      <InfoModal show={modalVisible} onClose={handleCloseModal}>
        {modalMessage}
      </InfoModal>
    </StyledFormNewsletter>
  );
};

export default Newsletter;
