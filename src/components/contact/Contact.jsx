import { styles } from "../../styles";
import Aside from "./Aside";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${styles.paddingX} ${styles.paddingY} w-full min-h-screen bg-primary`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* heading start  */}
        <div className="flex justify-between items-center flex-row-reverse md:flex-row">
          <h1 className="capitalize text-[30px] xs:text-[50px] md:text-[60px] xl:text-[90px]  text-white inline font-bold">
            {`Let's`} Work{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Together
            </span>{" "}
          </h1>
          <figure className=" w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]">
            <img
              className="w-full h-full object-cover object-center rounded-full"
              src="https://img.freepik.com/free-photo/green-sprouts-dark-soil-against-blurred-background-symbolizing-concept-growth-potential_90220-1462.jpg?t=st=1702125875~exp=1702129475~hmac=d61ddb3cab8894c005238de188f387d4a304fcfc36759c903024b71ab3bbfc9d&w=900"
              alt=""
            />
          </figure>{" "}
        </div>
        {/* heading end */}

        {/* form, and aside area start  */}
        <div className="mt-32 grid grid-cols-12 gap-5  md:gap-10 xl:gap-20">
          <Form />
          <Aside />
        </div>
        {/* form, and aside area end */}
      </div>
    </section>
  );
};

export default Contact;
