import { automotiveBattery } from "./products/autometiveBattery";
import { eRikshawBattery } from "./products/eRikshaw";
import { inverterBattery } from "./products/inverter";
import { marineBattery } from "./products/marine";
import { solarBattery } from "./products/solor";
import inverterBanner from "../assets/product/banners/Inverter.jpg";

import marineBanner from "../assets/product/banners/ship.jpg";
import eRickshawBanner from "../assets/product/E-ric/rickShaw.jpeg";
import solarBanner from "../assets/product/banners/solar.jpg";
import carBanner from "../assets/product/banners/car.jpg";
import automotiveImg from "../assets/product/Automotive/autometive.png";
import inverterImg from "../assets/product/Inverter/InverterBattery.png";
import marineImg from "../assets/product/Marine/MarineBattery.png";
import eRikshawImg from "../assets/product/E-ric/ErikshawBattery.png";
import solarImg from "../assets/product/Solar/SolarBattery.png";

//Automotive Applications
import bus from "../assets/product/Icons/Automotive/bus.png";
import excavator from "../assets/product/Icons/Automotive/excavator_8654464.png";
import hatchbackcar from "../assets/product/Icons/Automotive/hatchback.png";
import suv from "../assets/product/Icons/Automotive/suv-transportation-car-suv-svgrepo-com.png";
import tractor from "../assets/product/Icons/Automotive/tractor-svgrepo-com.svg";
import jcb from "../assets/product/Icons/Automotive/tractor_2318605.png";

//Inverter Applications
import home from "../assets/product/Icons/Inverter/home_553376.png";
import work from "../assets/product/Icons/Inverter/work_10866399.png";

//Marine Applications
import boatwithcontainer from "../assets/product/Icons/Marine/boat-with-containers_75931.png";

//E-Rikshaw Applications
import transport from "../assets/product/Icons/E-Rickshaw/transport_11334923.png";

// Solar Applications
import solarIcon from "../assets/product/Icons/Solar/solar.png";
export const products = [
  {
    id: 1,
    name: "Automotive",
    title: "Automotive Batteries",
    description: `When power stops, life stops. Before the light goes out, let our
    batteries take your load.Experience Meets Innovation to Deliver
    Next-Gen Batteries.`,
    banner: carBanner,

    tagline: "Rev Up Your Drive with Reliable Energy",
    desc: `Elevate Your Drive with Advanced Technology: Our Automotive
    Batteries Redefine Performance. Featuring high-surface carbon for
    enhanced discharge capabilities and rapid deep cycle recovery, our
    batteries are designed to thrive in the face of frequent and
    prolonged power demands. Crafted with a special-grade polyethylene
    separator, our batteries boast high volume porosity and superior
    mechanical strength. With minimal water top-up requirements and an
    impressive life expectancy of up to 5-6 years, these batteries
    guarantee a reliable and enduring power source. Whether for everyday
    commuting or heavy-duty industrial applications, our automotive
    batteries are engineered to power your journey with lasting
    brilliance`,
    featureSectionImage: automotiveImg,

    features: [
      {
        id: 1,
        title: "Voltage: 12 V",
      },
      {
        id: 2,
        title: "Excellent Cranking Performance.",
      },
      {
        id: 3,
        title: "High CCA Rating.",
      },
      {
        id: 4,
        title: "Corrosion-Resistance Alloy.",
      },
      {
        id: 5,
        title: "Low Water Loss.",
      },
      {
        id: 6,
        title: "Vibration Resistant.",
      },
      {
        id: 7,
        title: "Ideal For High Temperatures.",
      },
      {
        id: 8,
        title: "Quick Recharge.",
      },
    ],
    rangesOfBatteries: automotiveBattery,
    application: "Application",
    isApplication: true,
    applicationDetails: [
      {
        id: 1,
        img: hatchbackcar,
      },
      {
        id: 2,
        img: suv,
      },
      {
        id: 3,
        img: bus,
      },
      {
        id: 4,
        img: tractor,
      },
      {
        id: 5,
        img: excavator,
      },
    ],
    advantages: [
      {
        id: 1,
        title: "High starting power",
        desc: "combines CCA and low temp performance",
      },
      {
        id: 2,
        title: "Corrosion-resistant",
        desc: "Protects against corrosive elements.",
      },
      {
        id: 3,
        title: "Vibration-resistant",
        desc: "Withstands vehicle movement vibrations.",
      },
      {
        id: 4,
        title: "Ready to install",
        desc: "Hassle-free installation, immediate functionality.",
      },
      {
        id: 5,
        title: "Long-lasting",
        desc: "combines high reserve capacity and spill resistance",
      },
    ],
  },
  {
    id: 2,
    name: "Inverter",
    title: "Inverter Batteries",
    description: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries.`,
    banner: inverterBanner,

    tagline: "Power Back up for Every Need",
    desc: `We use high surface carbon in our tubular batteries. It not only improves the discharge performance of the batteries but also ensures fast recovery in the deep cycle. Suited for frequent and long power cuts these batteries have a long life cycle and can lighten up every moment of your life. Use of special grade polyethylene separator results in high volume porosity and higher mechanical strength. Our tubular batteries require low water top up and have a life expectancy up to 5-6 years. From household application to industrial use these batteries will run for life and power your world with brightness forever`,
    featureSectionImage: inverterImg,

    features: [
      {
        id: 1,
        title: "Voltage: 12 V",
      },
      {
        id: 2,
        title: "Super Strong Grid",
      },
      {
        id: 3,
        title: "Extra Positive Plate Surface Area",
      },
      {
        id: 4,
        title: "Factory Charged",
      },
      {
        id: 5,
        title: "Enhanced Charge Acceptance",
      },
      {
        id: 6,
        title: "Durability & Robustness",
      },
      {
        id: 7,
        title: "Longer Backup",
      },
      {
        id: 8,
        title: "Jumbo Tubular",
      },
    ],
    rangesOfBatteries: inverterBattery,
    isApplication: true,
    application: "Application",
    applicationDetails: [
      {
        id: 1,
        img: home,
      },
      {
        id: 2,
        img: work,
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Advanced Battery Technology",
        desc: "High power, long life",
      },
      {
        id: 2,
        title: "Super Strong Grid & Plates",
        desc: "Extended backup, improved charge retention",
      },
      {
        id: 3,
        title: "High Reliability & Long Life",
        desc: "Extended lifespan, reliable performance",
      },
      {
        id: 4,
        title: "Pre-Charged & Ready to Use",
        desc: "Factory charged, high-quality acid",
      },
      {
        id: 5,
        title: "Efficient Power Conversion",
        desc: "Efficient DC to AC conversion. Lowered bills.",
      },
    ],
  },
  {
    id: 3,
    name: "Marine",
    title: "Marine Batteries",
    description: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries.`,
    banner: marineBanner,

    tagline: "Uninterrupted Energy on the Open Seas",
    desc: `Navigate with Confidence: Our Marine Batteries Set Sail with High Surface Carbon for Peak Performance. Specially crafted for deep cycles, these batteries offer swift recovery and enduring power in the roughest waters. Featuring a unique polyethylene separator, they boast superior porosity and robust mechanical strength. Designed for low water top-up, these marine batteries have an impressive life expectancy of up to 5-6 years. Whether for leisure or professional marine applications, our batteries are built to endure, lighting up your maritime adventures with unwavering reliability`,
    featureSectionImage: marineImg,

    features: [
      {
        id: 1,
        title: "Voltage. 12 V.",
      },
      {
        id: 2,
        title: "Spill Resistant",
      },
      {
        id: 3,
        title: "High Cranking Power.",
      },
      {
        id: 4,
        title: "High Reserve Capacity",
      },
      {
        id: 5,
        title: "Resistance to Salt Water.",
      },
      {
        id: 6,
        title: "Vibration Resistant.",
      },
      {
        id: 7,
        title: "Extreme Temperature Tolerance",
      },
      {
        id: 8,
        title: "Ideal for Marine Applications",
      },
    ],
    rangesOfBatteries: marineBattery,
    isApplication: true,
    application: "Application",
    applicationDetails: [
      {
        id: 1,
        img: boatwithcontainer,
      },
    ],
    advantages: [
      {
        id: 1,
        title: "High starting power",
        desc: "combines CCA and low temp performance",
      },
      {
        id: 2,
        title: "Corrosion-resistant",
        desc: "Protects against corrosive elements.",
      },
      {
        id: 3,
        title: "Vibration-resistant",
        desc: "Withstands vehicle movement vibrations.",
      },
      {
        id: 4,
        title: "Spill-proof",
        desc: "Safeguards against leaks, ideal for marine environments.",
      },
      {
        id: 5,
        title: "Extended accessory power",
        desc: "highlights high reserve capacity",
      },
    ],
  },
  {
    id: 4,
    name: "E-Rickshaw",
    title: "E-Rickshaw Batteries",
    description: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries.`,

    banner: eRickshawBanner,

    tagline: "Uninterrupted Energy on the Open Seas",
    desc: `Empower Your E-Rickshaw with Cutting-Edge Energy: Our tubular batteries, featuring high surface carbon technology, elevate the performance of E-Rickshaws with enhanced discharge capabilities and rapid deep cycle recovery. Specially designed for prolonged and frequent use in demanding urban environments, these batteries boast an extended life cycle, providing reliable power for an uninterrupted journey. The utilization of advanced polyethylene separators ensures optimal porosity and mechanical strength, minimizing maintenance with low water top-ups. With a life expectancy of up to 5-6 years, our tubular batteries are engineered to meet the rigorous demands of E-Rickshaws, lighting up the path for sustainable and efficient transportation, from city streets to industrial zones`,
    featureSectionImage: eRikshawImg,

    features: [
      {
        id: 1,
        title: "Voltage: 12 V",
      },
      {
        id: 2,
        title: "Tubular Plate Technology.",
      },
      {
        id: 3,
        title: "Corrosion Resistant Alloy.",
      },
      {
        id: 4,
        title: "Optimized Tube Design.",
      },
      {
        id: 5,
        title: "High Quality Gauntlet.",
      },
      {
        id: 6,
        title: "Thicker and Taller Plate Designs.",
      },
      {
        id: 7,
        title: "Superior Paste Locking For Negative.",
      },
      {
        id: 7,
        title: "Robust Container Design.",
      },
    ],
    rangesOfBatteries: eRikshawBattery,
    isApplication: true,
    applicationDetails: [
      {
        id: 1,
        img: transport,
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Durable",
        desc: "Corrosion-resistant, handles deep discharge.",
      },
      {
        id: 2,
        title: "High Performance",
        desc: "Thicker plates, faster charging.",
      },
      {
        id: 3,
        title: "Long-lasting",
        desc: "Special additives for consistent mileage and reduced water loss.",
      },
      {
        id: 4,
        title: "Vibration-resistant",
        desc: "Handles rough roads.",
      },
      {
        id: 5,
        title: "Rapid Charging Capability",
        desc: "Rapid charging boosts productivity and profitability.",
      },
    ],
  },
  {
    id: 5,
    name: "Solar ",
    title: "Solar Batteries",
    description: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries.`,

    banner: solarBanner,

    tagline: "Empowering Tomorrow, Solar Batteries for Sustainable Power Today",
    desc: `Harvest the Sun's Power with Superior Solar Batteries. Our solar batteries utilize high surface carbon technology for enhanced discharge performance and swift recovery in deep cycles, making them ideal for areas with frequent and prolonged power cuts. With an extended life cycle and a lifespan of up to 5-6 years, these tubular batteries are designed to illuminate every moment of your life. The use of special-grade polyethylene separators ensures high volume porosity and superior mechanical strength. Low water top-up requirements and versatility for both household and industrial applications make our solar batteries the enduring choice to power your world with everlasting brightness`,
    featureSectionImage: solarImg,

    features: [
      {
        id: 1,
        title: "Voltage: 12 V.",
      },
      {
        id: 2,
        title: "Tubular Design.",
      },
      {
        id: 3,
        title: "High Energy Storage Capacity.",
      },
      {
        id: 4,
        title: "Extended Lifespan.",
      },
      {
        id: 5,
        title: "Seamless Integration.",
      },
      {
        id: 6,
        title: "Maximum Efficiency.",
      },
      {
        id: 7,
        title: "Smart Energy Management.",
      },
      {
        id: 7,
        title: "Eco-Friendly Solutions.",
      },
    ],
    rangesOfBatteries: solarBattery,
    isApplication: true,
    applicationDetails: [
      {
        id: 1,
        img: solarIcon,
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Efficient",
        desc: "High charge acceptance, low discharge rate, maximum storage.",
      },
      {
        id: 2,
        title: "Low Maintenance",
        desc: "Hassle-free operation.",
      },
      {
        id: 3,
        title: "Versatile",
        desc: "Easy installation, compatible with various systems.",
      },
      {
        id: 4,
        title: "Temperature-resistant:",
        desc: "Reliable performance in extreme climates.",
      },
      {
        id: 4,
        title: "Extended Lifespan",
        desc: "Prolonged battery durability and reliability.",
      },
    ],
  },
];
