// This line imports the styles object from the specified file path.
import styles from "../style";

// This line imports the arrowUp image from the specified file path.
import { arrowUp } from "../assets";

// This is a functional component that returns a JSX element.
const GetStarted = () => (
  // This is a div with various classes assigned to it for styling purposes.

  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    {/* This is a nested div with various classes assigned to it for styling
    purposes. */}
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      {/* This is another nested div with the "flex-start" class assigned to it
      for styling purposes. */}
      <div className={`${styles.flexStart} flex-row`}>
        {/* This is a paragraph element with various classes assigned to it for
        styling purposes. */}
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          {/* This is a nested span element with the "text-gradient" class
          assigned to it for styling purposes. */}
          <span className="text-gradient">Get</span>
        </p>
        {/*This is an image element with various classes assigned to it for
        styling purposes. */}
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      {/*This is another paragraph element with various classes assigned to it
      for styling purposes. */}
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        {/* This is a nested span element with the "text-gradient" class assigned
        to it for styling purposes. */}
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);
// This line exports the GetStarted component as the default export.
export default GetStarted;
