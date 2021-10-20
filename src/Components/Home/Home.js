import React from "react";
import { useStyles } from "./Styles";
import TopSection from "./SubComponentHome/TopSection/TopSection";
import DescriptedSlider from "./SubComponentHome/DescriptedSlider/DescriptedSlider";
import MapSections from "./SubComponentHome/MapSection/MapSections";
import MyGallery from "./SubComponentHome/Gallery/MyGallery";
import VedioSlider from "./SubComponentHome/VedioSlider/VedioSlider";
import CarRantals from "./SubComponentHome/CarRantals/CarRantals";
import TellUsForm from "./SubComponentHome/TellUsForm/TellUsForm";
import MyImageSlider from "./SubComponentHome/ImageSlider/MyImageSlider";
function Home() {
  const classes = useStyles();
  return (
    <main>
      <TopSection />
      <MyImageSlider/>
      <DescriptedSlider />
      <MapSections />
      <MyGallery />
      <VedioSlider />
      <CarRantals />
      <TellUsForm />
    </main>
  );
}

export default Home;
