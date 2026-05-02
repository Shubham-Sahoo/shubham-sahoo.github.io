import { getAboutPageData } from "../../lib/content";
import AboutClient from "./AboutClient";

export default async function About() {
  const data = await getAboutPageData();
  return <AboutClient {...data} />;
}
