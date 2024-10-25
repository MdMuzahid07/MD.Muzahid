import { styles } from "../../styles";
import Aside from "./Aside";
import Form from "./Form";
import FormHeader from "./FormHeader";

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${styles.paddingX} ${styles.paddingY} w-full min-h-screen stripeBG`}
    >
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* heading start  */}
        <FormHeader />
        {/* heading end */}

        {/* form, and aside area start  */}
        <div className="mt-24 md:mt-44 grid grid-cols-12 gap-5  md:gap-10 xl:gap-20">
          <Form />
          <Aside />
        </div>
        {/* form, and aside area end */}
      </div>
    </section>
  );
};

export default Contact;
