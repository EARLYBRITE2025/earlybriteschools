import React from "react";
import ImmaginariumHero from "@/componentspages/immaginarium/hero";
import ProgramOverview from "@/componentspages/immaginarium/program-overview";
import PlayLearnGrow from "@/componentspages/immaginarium/play-learn-grow";
import CoreLearningPillars from "@/componentspages/immaginarium/core-learning-pillars";
import EveryChildLearns from "@/componentspages/immaginarium/every-child-learns";
import PlaceForEveryLearner from "@/componentspages/immaginarium/place-for-every-learner";
import HowItWorks from "@/componentspages/immaginarium/how-it-works";
import QuarterlyLearningThemes from "@/componentspages/immaginarium/quarterly-learning-themes";
import ObservationFeedback from "@/componentspages/immaginarium/observation-feedback";
import ImmaginariumPromise from "@/componentspages/immaginarium/promise";
import Socialproofpage from "@/componentspages/home/social proof/socialproofpage";
import Faq from "@/componentspages/git/faq";

function Immaginarium() {
  return (
    <div>
      <ImmaginariumHero />
      <ProgramOverview />
      <PlayLearnGrow />
      <CoreLearningPillars />
      <EveryChildLearns />
      <PlaceForEveryLearner />
      <HowItWorks />
      <QuarterlyLearningThemes />
      <ObservationFeedback />
      <ImmaginariumPromise />
      <Socialproofpage />
      <Faq />
    </div>
  );
}

export default Immaginarium;
