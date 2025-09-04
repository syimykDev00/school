import React from "react";
import TheMainStaff from "./teaching_staff_the_main/TheMainStaff";
import OurTeachers from "./teaching_staff_the_main/OurTeachers";
import AdministrationSlider from "./teaching_staff_the_main/AdministrationSlider";
import PrimarySchoolDepartament from "./teaching_staff_the_main/PrimarySchoolDepartament";
import OfHumanities from "./teaching_staff_the_main/OfHumanities";
import Psychological from "./teaching_staff_the_main/Psychological";
import Curators from "./teaching_staff_the_main/Curators";

const TeachingStaf = () => {
  return (
    <div>
      <TheMainStaff />
      <OurTeachers />
      <AdministrationSlider />
      <PrimarySchoolDepartament />
      <OfHumanities />
      <Psychological />
      <Curators />
    </div>
  );
};

export default TeachingStaf;
