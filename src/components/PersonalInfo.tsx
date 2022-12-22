import { FunctionComponent } from "react";
import Content from "./Content";
import Input from "./Input";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  modifyEmail,
  modifyName,
  modifyPhone,
  selectUser,
} from "../store/plans";

interface PersonalInfoProps {}
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

const PersonalInfo: FunctionComponent<PersonalInfoProps> = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  return (
    <>
      <Content
        header="Personal Info"
        description="Please Provide your name, email address, and phone number."
      >
        <Input
          label="Name"
          placeholder="e.g.Stephen King"
          value={user.name}
          onChange={(name) => dispatch(modifyName(name))}
        />
        <Input
          label="Email Address"
          placeholder="e.g.stephenking@lorem.com"
          value={user.email}
          onChange={(email) => dispatch(modifyEmail(email))}
        />
        <Input
          label="Phone Number"
          placeholder="e.g.+1 234 567 890"
          value={user.phone}
          onChange={(phone) => dispatch(modifyPhone(phone))}
        />
      </Content>
    </>
  );
};

export default PersonalInfo;
