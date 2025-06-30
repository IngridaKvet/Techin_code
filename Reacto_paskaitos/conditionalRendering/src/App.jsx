import WelcomeLogInBanner from "./components/WelcomeLogInBanner"; //Exercise 1
import MultipleStatesBanner from "./components/MultipleStatesBanner"; //Exercise 2
import RenderElements from "./components/RenderElements"; //Exercise 3
import RenderDifferent from "./components/RenderDifferent"; //Exercise 4
import DynamicList from "./components/DynamicList"; //Exercise 5
import Notification from "./components/Notification"; //Exercise 6

import Modal from "./components/Modal"; //Exercise 8

import FeatureFlags from "./components/FeatureFlags"; //Exercise 10

function App() {
  return (
    <>
      <WelcomeLogInBanner />
      <MultipleStatesBanner />
      <RenderElements />
      <RenderDifferent />
      <DynamicList/>
      <Notification/>

      <Modal/>

      <FeatureFlags/>
    </>
  );
}

export default App;
