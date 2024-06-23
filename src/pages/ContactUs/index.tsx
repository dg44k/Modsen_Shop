import React, { FC } from "react";
import {
  Button,
  Input,
  StyledContactUs,
  StyledContactUsHeadingOne,
  StyledContactUsHeadingThree,
  StyledGridBlockInput,
  TextArea,
} from "./styled";

const ContactUs: FC = () => {
  return (
    <StyledContactUs>
      <StyledContactUsHeadingOne>Contact Us</StyledContactUsHeadingOne>
      <StyledContactUsHeadingThree>
        Say Hello send us your thoughts about our products or share
        <br /> your ideas with our Team!
      </StyledContactUsHeadingThree>

      <StyledGridBlockInput>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Subject" />
        <TextArea placeholder="Message"></TextArea>
        <Button type="submit">SEND</Button>
      </StyledGridBlockInput>
    </StyledContactUs>
  );
};

export default ContactUs;
