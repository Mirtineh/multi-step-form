import { FunctionComponent } from "react";
import AddonsCard from "./AddOnsCard";
import Content from "./Content";

interface AddOnsProps {}

const AddOns: FunctionComponent<AddOnsProps> = () => {
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
            amount="+$1/mo"
            isChecked={true}
          />
          <AddonsCard
            header="Larger storage"
            description="Extra 1TB of cloud save"
            amount="+$2/mo"
            isChecked={true}
          />
          <AddonsCard
            header="Customizable profile"
            description="custom theme on your profile"
            amount="+$2/mo"
            isChecked={false}
          />
        </div>
      </Content>
    </>
  );
};

export default AddOns;
