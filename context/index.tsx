import { createContext, PropsWithChildren, useContext } from "react";
import { DesignProps } from "../types";

const AppState = {
  web: {
    title: "Web Design",
    subtitle:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    list: [
      {
        id: "web-design-1",
        src: "/assets/web-design/desktop/image-express.jpg",
        title: "EXPRESS",
        subtitle: "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        id: "web-design-2",
        src: "/assets/web-design/desktop/image-transfer.jpg",
        title: "TRANSFER",
        subtitle:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        id: "web-design-3",
        src: "/assets/web-design/desktop/image-photon.jpg",
        title: "PHOTON",
        subtitle:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        id: "web-design-4",
        src: "/assets/web-design/desktop/image-builder.jpg",
        title: "BUILDER",
        subtitle:
          "Connects users with local contractors based on their location",
      },
      {
        id: "web-design-5",
        src: "/assets/web-design/desktop/image-blogr.jpg",
        title: "BLOGR",
        subtitle:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        id: "web-design-6",
        src: "/assets/web-design/desktop/image-camp.jpg",
        title: "CAMP",
        subtitle:
          "Get expert training in coding, data, design, and digital marketing",
      },
    ],
    links: ["app", "graphic"],
  },
  app: {
    title: "App Design",
    subtitle:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    list: [
      {
        id: "app-design-1",
        src: "/assets/app-design/desktop/image-airfilter.jpg",
        title: "AIRFILTER",
        subtitle:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        id: "app-design-2",
        src: "/assets/app-design/desktop/image-eyecam.jpg",
        title: "EYECAM",
        subtitle:
          "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        id: "app-design-3",
        src: "/assets/app-design/desktop/image-faceit.jpg",
        title: "FACEIT",
        subtitle:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        id: "app-design-4",
        src: "/assets/app-design/desktop/image-todo.jpg",
        title: "TODO",
        subtitle:
          "A todo app that features cloud sync with light and dark mode",
      },
      {
        id: "app-design-5",
        src: "/assets/app-design/desktop/image-loopstudios.jpg",
        title: "LOOPSTUDIOS",
        subtitle: "A VR experience app made for Loopstudios",
      },
    ],
    links: ["web", "graphic"],
  },
  graphic: {
    title: "Graphic Design",
    subtitle:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    list: [
      {
        id: "app-design-1",
        src: "/assets/graphic-design/desktop/image-change.jpg",
        title: "TIM BROWN",
        subtitle: "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        id: "app-design-2",
        src: "/assets/graphic-design/desktop/image-boxed-water.jpg",
        title: "BOXED WATER",
        subtitle: "A simple packaging concept made for Boxed Water",
      },
      {
        id: "app-design-3",
        src: "/assets/graphic-design/desktop/image-science.jpg",
        title: "SCIENCE!",
        subtitle: "A poster made in collaboration with the Federal Art Project",
      },
    ],
    links: ["web", "app"],
  },
  locations: [
    {
      id: "location-1",
      src: "/assets/shared/desktop/illustration-canada.svg",
      map: "/assets/locations/desktop/image-map-canada.png",
      link: "/locations#Canada",
      country: "Canada",
      office: {
        name: "Designo Central Office",
        street: "3886 Wellington Street",
        city: "Toronto",
        region: "Ontario",
        postCode: "M9C 3J5",
      },
      contact: {
        phone: "+1 253-863-8967",
        email: "contact@designo.co",
      },
    },
    {
      id: "location-2",
      src: "/assets/shared/desktop/illustration-australia.svg",
      map: "/assets/locations/desktop/image-map-australia.png",
      link: "/locations#Australia",
      country: "Australia",
      office: {
        name: "Designo AU Office",
        street: "A book cover designed for Tim Brown’s new release, ‘Change’",
        city: "19 Balonne Street",
        region: "New South Wales",
        postCode: "2443",
      },
      contact: {
        phone: "(02) 6720 9092",
        email: "contact@designo.au",
      },
    },
    {
      id: "location-3",
      src: "/assets/shared/desktop/illustration-united-kingdom.svg",
      map: "/assets/locations/desktop/image-map-united-kingdom.png",
      link: "/locations#United Kingdom",
      country: "United Kingdom",
      office: {
        name: "Designo UK Office",
        street: "A book cover designed for Tim Brown’s new release, ‘Change’",
        city: "",
        region: "Rhyd-y-fro",
        postCode: "SA8 9GA",
      },
      contact: {
        phone: "078 3115 1400",
        email: "contact@designo.uk",
      },
    },
  ],
};

interface IDesign {
  title: string;
  subtitle: string;
  list: DesignProps[];
  links: string[];
}

interface IOffice {
  name: string;
  street: string;
  city: string;
  region: string;
  postCode: string;
}

interface IContact {
  phone: string;
  email: string;
}

interface ILocation {
  id: string;
  link: string;
  src: string;
  map: string;
  country: string;
  office: IOffice;
  contact: IContact;
}

type ContextProps = {
  web: IDesign;
  app: IDesign;
  graphic: IDesign;
  locations: ILocation[];
};

const AppContext = createContext<ContextProps>(null);

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  return <AppContext.Provider value={AppState}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
