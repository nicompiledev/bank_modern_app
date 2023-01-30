import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

// feature card component 
const FeatureCard = ({ icon, title, content, index }) => (
  // container for each feature
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    {/* icon container */}
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      {/* icon image */}
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    {/* feature content container */}
    <div className="flex-1 flex flex-col ml-3">
      {/* title */}
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      {/* description */}
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

// Business section component
const Business = () =>  (
  <section id="features" className={layout.section}>
    {/* section info */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      {/* button */}
      <Button styles={`mt-10`} />
    </div>

    {/* section image */}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
