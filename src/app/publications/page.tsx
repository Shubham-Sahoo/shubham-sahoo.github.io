import { getPublications } from "../../lib/content";
import PublicationsClient from "./PublicationsClient";

export default async function Publications() {
  const publications = await getPublications();
  return <PublicationsClient publications={publications} />;
}
