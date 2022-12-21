import { FunctionComponent } from "react";
import { useAppSelector } from "../store/hooks";
import { selectAddOns } from "../store/plans";
import AddonsCard from "./AddOnsCard";
import Content from "./Content";

interface AddOnsProps {}

const AddOns: FunctionComponent<AddOnsProps> = () => {
  const addons = useAppSelector(selectAddOns);
  return (
    <>
      <Content
        header="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      >
        <div className="flex flex-col gap-3">
          <AddonsCard
            header="Online service"
            description="Access to multiplayer games"
            type="online"
            isChecked={addons.includes("online")}
          />
          <AddonsCard
            header="Larger storage"
            description="Extra 1TB of cloud save"
            type="larger"
            isChecked={addons.includes("larger")}
          />
          <AddonsCard
            header="Customizable profile"
            description="custom theme on your profile"
            type="customizable"
            isChecked={addons.includes("customizable")}
          />
        </div>
      </Content>
    </>
  );
};

export default AddOns;
