"use client";
import styles from "@/app/page.module.css";
import { Button } from "@/components/button/Button.jsx";
import { useState } from "react";
import { CardComponent } from "@/components/cardComponent/Card.jsx";


export default function Home() {
  //for click me button
  const user = "Payal";

  //for toggle content
  const [showDetails, setShowDetails] = useState(true);
  const additionalInfo = (
    <div>
      <p>
        <strong>Email:</strong> payal@gmail.com
      </p>
      <p>
        <strong>Phone:</strong> +32234556789
      </p>
      <p>
        <strong>Address:</strong> Brussels, Belgium
      </p>
    </div>
  );

  //for counter
  const [countIncrement, setCountIncrement] = useState(0);
  const increment = () => {
    setCountIncrement(countIncrement + 1);
  };
  return (
    <div className="mainContainer">
      <CardComponent
        imageUrl="./user.png"
        title="Payal"
        description="I’m a learner exploring frontend development with React and JavaScript."
      />
      {/* button to show/hide additional info PART-4*/}
      <Button
        className="button-main"
        text={showDetails ? "Hide add. Info" : "Show add. Info"}
        onClick={() => setShowDetails(!showDetails)}

      />
      {showDetails && additionalInfo}

      {/* button to show alert ExercisesPart 1 */}
      <Button
        className="button-main"
        text="Click Me"
        onClick={() => alert(`Hello ${user}, Welcome to your dashboard!!!!!`)}
      />
      {/* counter component part-5 */}
      <div className="counter">Followers: {countIncrement}</div>
      <button
        type="button"
        className="button-main"
        onClick={increment}
      >
        Follow
      </button>
    </div>
  );
}
