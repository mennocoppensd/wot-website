import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        backgroundColor?: undefined;
        border?: undefined;
      }
    | {
        title: string;
        color: string;
        backgroundColor: string;
        border: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
