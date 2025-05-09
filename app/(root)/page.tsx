import Header from "@/components/Header";
import VidoeCard from "@/components/VidoeCard";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      <h1>Hello, World!</h1>
      <VidoeCard
        id="1"
        title="Snacast Message"
        thumbnail="/assets/samples/thumbnail (1).png"
        createdAt={new Date("2025-05-10")}
        userImg="/assets/images/jason.png"
        username="Sujal"
        views={10}
        visibility="public"
        duration={156}
      />
    </main>
  );
};

export default Page;
