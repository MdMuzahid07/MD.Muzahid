import { useState } from "react";
import { Switch } from "@headlessui/react";

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-green-500" : "bg-red-500"}
          relative inline-flex h-[16px] w-[44px]  shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block  h-[12px] w-[16px] transform bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </>
  );
};

export default Toggle;
