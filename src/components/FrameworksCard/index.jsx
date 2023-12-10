import React from "react";
import { SiteCard } from "../SiteCard";
export function FrameworksCard() {
  return (
    <SiteCard
      image={"/src/assets/jsFrameworksCA_screenshot.png"}
      desc={
        "This was a course assignment for our javascript frameworks module. We were to create an ecom site using react and a given api."
      }
      title={"JsFrameworks CA"}
      demoLink={"https://astounding-kataifi-4cdc59.netlify.app/"}
      repoLink={
        "https://github.com/lkmelberg/noroff_jsFrameworks_CA"
      }></SiteCard>
  );
}
