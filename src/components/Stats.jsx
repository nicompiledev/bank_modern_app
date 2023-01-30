import { stats } from "../constants";
import styles from "../style";

//This is a functional component that returns a JSX element.
const Stats = () => (
  // This is a section element with various classes assigned to it for styling purposes.
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
     {/* This maps over the "stats" constant and returns a JSX element for each stat. */}
    {stats.map((stat) => (
      // This is a div with various classes assigned to it for styling purposes.
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
         // This is a header element with various classes assigned to it for styling purposes.
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;