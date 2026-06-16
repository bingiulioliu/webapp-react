import { useContext } from "react";
import { NewsletterContext } from "../contexts/NewsletterContext";

export const useNewsletter = () => useContext(NewsletterContext);