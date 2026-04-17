import { motion } from "motion/react";
import {
  MapPin,
  Calendar,
  Users,
  Droplet,
  DollarSign,
  Target,
  Building2,
  Globe2,
  Briefcase,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import biLogo from "./components/logo/bi-international.png";
import turkishHvacLogo from "./components/logo/turkish-hvac.png";
import bgHero from "./components/logo/bg-hero.jpg";
import turkeyFlag from "./components/logo/turkey.png";
import c1Img from "./components/logo/c1-mgt.png";
import c2Img from "./components/logo/c2-niba.png";
import c3Img from "./components/logo/c3-pfi.png";
import c4Img from "./components/logo/c4-afs.png";
import c5Img from "./components/logo/c5-bvn.png";
import c6Img from "./components/logo/c6-untes.png";
import c7Img from "./components/logo/c7-dogu.png";
import c8Img from "./components/logo/c8-friterm.png";
import c9Img from "./components/logo/c9-refkar.png";
import c10Img from "./components/logo/c10-faf.png";
import c11Img from "./components/logo/c11-demirdokum.png";
import c12Img from "./components/logo/c12-duyar.png";

const companies = [
  {
    name: "MGT FİLTRE SANAYİ TİCARET A.Ş.",
    image: c1Img,
    profile: "MGT Filtre Sanayi Ticaret A.Ş. is a Turkey-based manufacturer specializing in high-quality air filtration solutions, including HEPA filters, panel filters, and industrial air purification systems. Their products cater to various industries, such as healthcare, pharmaceuticals, HVAC, and manufacturing, ensuring clean and efficient air filtration.",
    products: "Fine Filters, HEPA Filters, Carbon Filters, Industrial Filters, Equipment and Accessories",
    representatives: ["MR. EYÜP OĞUZ - Marketing & Business Development"]
  },
  {
    name: "NİBA SU SOĞUTMA KULELERİ SAN. VE TİC. A.Ş.",
    image: c2Img,
    profile: "NİBA SU SOĞUTMA KULELERİ SAN. VE TİC. A.Ş. is a Turkey-based company specializing in the design, manufacturing, and installation of water cooling towers for various industrial applications. With a focus on energy efficiency and durability, NİBA provides customized cooling solutions for power plants, manufacturing facilities, and HVAC systems worldwide.",
    products: "Cooling Towers, CTP Package Type Water Cooling Towers",
    representatives: ["MR. MURAT BAKANAY - Vice Chairman of the Board of Directors", "MR. ŞEMSETTİN ERSAN BAKANAY - Chairman of the Board of Directors"]
  },
  {
    name: "PFI END.KAPILAR VE OTOM.SAN.TİC.A.Ş.",
    image: c3Img,
    profile: "PFI Endüstriyel Kapılar ve Otomasyon Sistemleri San. ve Tic. A.Ş. (PFI) is a Turkish company specializing in industrial doors and automation systems, providing high-quality and advanced solutions for cold storage, logistics, and manufacturing industries. With worldwide offices and partners, PFI offers customized products and trusted technical support.",
    products: "Cold Storage Doors, Col Storage' Profiles, Components, Gaskets",
    representatives: ["MR. ALP BERKMAN - Sales Director"]
  },
  {
    name: "AFS BORU SANAYI A.Ş.",
    image: c4Img,
    profile: "A leading manufacturer in the HVAC sector, specializing in flexible and semi-flexible air ducts, along with various ventilation system components. With over 30 years of experience, AFS exports its high-quality products to more than 80 countries, emphasizing innovation and environmental responsibility in its operations.",
    products: "Flexible Air Duct, Industrial Hose Air Duct, Acoustic Air Duct, Ventilation Equipment",
    representatives: ["MR. GÖKHAN KANDEMİR - Export Chief"]
  },
  {
    name: "BAHÇIVAN HAVALANDIRMA SİS. VE ELEKTRİK MOTORLARI SAN.TİC.A.Ş.",
    image: c5Img,
    profile: "BAHÇIVAN HAVALANDIRMA SİSTEMLERİ VE ELEKTRİK MOTORLARI SAN. TİC. A.Ş. (BVN) is a Turkish manufacturer of ventilation systems and electrical motors, offering products like external rotor motors, smoke exhaust fans, and cooling fans. With over 30 years of experience, BVN exports to more than 98 countries, focusing on innovation and high-quality standards.",
    products: "Duct Fans, Cooling Fans, EC Fans, Shelter Fans, Roof Fans, Exproof Fans, Thermo Fans",
    representatives: ["MR. BİLAL BAHÇIVAN - Deputy General Manager / Strategy & Business Development"]
  },
  {
    name: "ÜNTES ISITMA KLİMA SOĞUTMA SAN.TİC.A.Ş.",
    image: c6Img,
    profile: "ÜNTES Isıtma Klima Soğutma San. ve Tic. A.Ş. is a leading Turkish HVAC manufacturer established in 1968. With over 450 employees and production facilities covering 120,000 m² in Ankara's Kazan and Saray districts, the company exports to more than 50 countries.",
    products: "Air Handling Units, Ventilation Systems, Heat Recovery Units, Package Air Conditioner and Rooftop Units, Chillers, Fan Coil",
    representatives: ["MR. SAFA AYHAN - International Business Development Manager"]
  },
  {
    name: "DOĞU İKLİMLENDİRME SAN. TİC. A.Ş.",
    image: c7Img,
    profile: "Doğu Klimalendirme, which started to produce ventilation and air conditioning equipment in İzmir in 1999, increased its success graph by moving to the Alsancak Factory with an area of 4,500 m² in 2004. Today, Doğu Klimalendirme continues to export with more than 200 different products in its product range and will sell products in more than 60 countries on 4 continents as of 2024.",
    products: "Air Handling Units, Heat/Energy Recovery Units, VRF-Outdoor Unit Systems, Rooftop Package Units",
    representatives: ["MR. NAZAR BUGUBAY - Export Director", "MR. VEHBİ AKYAR - Board Chairman"]
  },
  {
    name: "FRİTERM A.Ş.",
    image: c8Img,
    profile: "FRITERM A.S. has developed its know-how and expertise by providing design, manufacturing, contract and sales services in Commercial Cooling, Industrial Cooling and Air Conditioning. In time, Friterm has preferred to specialize on finned type heat exchangers and focused on the production of Air Cooled Condensers, Evaporators, Air Coolers, Dry Coolers, Water/Glycol Air Heaters and Coolers, Steam Heaters, Oil Coolers and Heat Recovery Coils for the Air Conditioning and Refrigeration Industry.",
    products: "Heat Exchangers, Unit Air Coolers, Air Cooled Condensers, Dry&Wet-Dry Coolers, Power Plant Products, Heat Recovery Units",
    representatives: ["MR. SERDAR TÜMEN - Business Development Manager"]
  },
  {
    name: "REFKAR SOĞUTMA VE ISI TRANSFER CİHAZLARI SAN VE TİC.LTD.ŞTİ.",
    image: c9Img,
    profile: "Refkar was established to offer technologically-advanced and high-quality products for the cooling industry and sets its goal to be the first company in Turkey and one of the five largest companies in the world in its sector and the product range in which it operates.",
    products: "Evaporators, Condensers, Oil Coolers, Plate Heat Exchangers",
    representatives: ["MR. HERMAN HAÇADURYAN - Sales Marketing Deputy General Manager"]
  },
  {
    name: "FAF VANA SAN. VE TİC.A.Ş.",
    image: c10Img,
    profile: "FAF Vana Sanayi ve Ticaret A.Ş., founded in 1986, specializes in manufacturing valves such as ball valves, butterfly valves, gate valves, globe valves, check valves, strainers, and hydrants, catering to sectors including heating, cooling, ventilation, infrastructure, and industrial applications. Operating from its 11,000 m² facility in Ankara's Kazan district, the company exports to over 65 countries and maintains offices in Istanbul, Moscow, and Dubai, supported by a network of over 50 domestic dealers.",
    products: "Ball Valves, Gate Valves, Butterfly Valves, Check Valves, Brass Valves, Expansion Joints",
    representatives: ["MR. VELİ GÖKTAŞ - Export Sales Representative"]
  },
  {
    name: "TÜRK DEMİRDÖKÜM FABRİKALARI A.Ş.",
    image: c11Img,
    profile: "Türk DemirDöküm Fabrikaları A.Ş., established in 1954 in Istanbul, is a leading Turkish manufacturer in the heating, water heating, and air conditioning sectors. The company offers a wide range of products, including boilers, water heaters, air conditioners, panel radiators, and solar energy systems, and has pioneered many firsts in Turkey. With a strong emphasis on R&D and quality, DemirDöküm exports to over 40 countries and operates one of Europe's largest integrated manufacturing facilities in Bozüyük.",
    products: "Wall Hung Boilers, Radiators, Heat Pumps, Room Thermostats, Electrical Storage Water Heaters",
    representatives: ["MR. AHMET VOLKAN KAYA - Export Sales Manager"]
  },
  {
    name: "DUYAR VANA MAKİNA SAN. VE TİC.A.Ş.",
    image: c12Img,
    profile: "Duyar Vana Makina Sanayi ve Ticaret A.Ş., founded in 1965 in Istanbul, Turkey, has evolved from a small metalworking workshop into a leading manufacturer of HVAC valves, plumbing systems, and fire protection systems. Operating from a 15,000 m² facility in Esenyurt and an 8,000 m² fully automated foundry in Beylikdüzü, the company manages all production processes in-house. Duyar exports to over 85 countries.",
    products: "Ball Valves, Gate Valves, Butterfly Valves, Check Valves, Valves, Fire Extinguishing Systems, Sprinkler",
    representatives: ["MR. ŞÜKRÜ GÜLER - International Sales Manager"]
  }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add the Event data since it's not a standard input field
    formData.append("Event", selectedEvent);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKnHdiVDXVGVox_peUxJblxyM6a03AX1Ril0BefO4PhvkUSEvDb5fCclgrZNJDamKt/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
        form.reset();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit reservation. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-20 md:py-32"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgHero}
            alt="International Meeting Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-blue-50/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <img src={biLogo} alt="BI International Logo" className="h-8 w-auto" />
            </div>
            <div className="flex items-center gap-2">
              <img src={turkishHvacLogo} alt="Turkish HVAC-R Logo" className="h-8 w-auto" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mx-auto mb-6 max-w-4xl text-center text-4xl font-bold leading-tight text-gray-900 md:text-6xl"
          >
            Business Trade Mission and Matchmaking
            <span className="block text-[#0F4069]">
              Turkiye and Indonesia
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap items-center justify-center gap-6 text-lg text-gray-600"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#0F4069]" />
              <span>Kempinsky Hotel, Jakarta</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#0F4069]" />
              <span>20-25th of April 2025</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button 
              onClick={() => {
                document.getElementById('participants')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-2 rounded-lg bg-[#0F4069] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0d3557] hover:shadow-xl"
            >
              See all participants
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => {
                document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 rounded-lg border-2 border-[#0F4069] bg-white px-8 py-4 font-semibold text-[#0F4069] shadow-sm transition-all hover:bg-[#0F4069] hover:text-white hover:shadow-lg"
            >
              About the Event
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
            >
              <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4069]/10">
                    <MapPin className="h-6 w-6 text-[#0F4069]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Bogota
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="mb-4 font-semibold text-gray-900">
                  Presentational Event and B2B Matchmaking
                </h4>
                <div className="mb-6 space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium text-gray-900">
                      Date:
                    </span>{" "}
                    20th of April 2026
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">
                      Location:
                    </span>{" "}
                    Kempinsky Hotel, Jakarta
                  </p>
                  <div className="mt-4 space-y-1 border-l-4 border-[#0F4069]/20 pl-4">
                    <p className="font-medium text-gray-900">
                      Schedule: (To Be Determined)
                    </p>
                    <p className="text-sm">
                      XX:XX - XX:XX [agenda]
                    </p>
                    <p className="text-sm">
                      XX:XX - XX:XX [agenda]
                    </p>
                    <p className="text-sm">
                      XX:XX - XX:XX [agenda]
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setSelectedEvent("Bogota - 20th of April 2026");
                    setIsModalOpen(true);
                  }}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F4069] px-6 py-3 font-semibold text-white transition-all hover:bg-[#0d3557]"
                >
                  RESERVE YOUR PLACE
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              transition={{ duration: 0.5,}}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
            >
              <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4069]/10">
                    <MapPin className="h-6 w-6 text-[#0F4069]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Medellin
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="mb-4 font-semibold text-gray-900">
                  B2B Matchmaking
                </h4>
                <div className="mb-6 space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium text-gray-900">
                      Date:
                    </span>{" "}
                    (To Be Determined)
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">
                      Location:
                    </span>{" "}
                    (To Be Determined)
                  </p>
                  <div className="mt-4 space-y-1 border-l-4 border-[#0F4069]/20 pl-4">
                    <p className="font-medium text-gray-900">
                      Schedule: (To Be Determined)
                    </p>
                    <p className="text-sm">
                      XX:XX - XX:XX [agenda]
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setSelectedEvent("Medellin - Date TBD");
                    setIsModalOpen(true);
                  }}
                  className="group mt-14 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F4069] px-6 py-3 font-semibold text-white transition-all hover:bg-[#0d3557]"
                >
                  RESERVE YOUR PLACE
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Turkish Companies Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
          >
            <div className="p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0F4069]/10">
                  <Building2 className="h-7 w-7 text-[#0F4069]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Turkish Companies
                </h3>
              </div>
              <p className="mb-8 text-lg text-gray-600">
                Detailed information on our Turkish project
                participants that you will meet at the event
              </p>
              <button 
                onClick={() => {
                  document.getElementById('participants')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 rounded-lg bg-[#0F4069] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0d3557] hover:shadow-xl"
              >
                LIST OF COMPANIES
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Description */}
      <section id="mission" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg leading-relaxed text-gray-700"
          >
            Turkiye HVAC-R Association is creating successful
            event to make more collaboration between Turkish
            companies with Indonesian companies by having direct
            and fruitful business mission in Indonesia. The
            mission aimed to provide technology transfer and
            collaborative discussion between companies.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4069]/10">
                <DollarSign className="h-8 w-8 text-[#0F4069]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                No-costs, pure benefit
              </h3>
              <p className="text-gray-600 text-justify">
                This mission is completely free of charge for
                you. There will be a free business matchmaking
                lunch between Presentations and B2B Meetings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4069]/10">
                <Target className="h-8 w-8 text-[#0F4069]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Sector focus
              </h3>
              <p className="text-gray-600">
                Heating, Ventilation, and Air Conditioning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
          >
            <div className="grid gap-8 md:grid-cols-5">
              <div className="flex items-center justify-center border-r border-gray-200 bg-gradient-to-br from-[#0F4069] to-[#0d3557] p-10 md:col-span-2">
                <div className="text-center">
                  <h2 className="mb-4 text-3xl font-bold leading-tight text-white">
                    THE MISSION
                  </h2>
                  <p className="mb-6 text-lg font-medium text-blue-100">
                    Turkiye association embrace collaboration
                    between Indonesia and Turkiye in HVAC
                    industry
                  </p>
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex h-16 w-32 items-center justify-center rounded-xl border-2 border-white/20 bg-white p-4 backdrop-blur-sm">
                      <img src={biLogo} alt="BI International Logo" className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex h-16 w-32 items-center justify-center rounded-xl border-2 border-white/20 bg-white p-4 backdrop-blur-sm">
                      <img src={turkishHvacLogo} alt="Turkish HVAC-R Logo" className="max-h-full max-w-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:col-span-3">
                <div className="space-y-6 text-gray-600 text-justify">
                  <p>
                    To support companies with updated and
                    technology products in their portfolio as
                    they venture into new markets abroad, the
                    Turkiye HVAC-R Exporter association support
                    its member to explore collaboration.
                  </p>
                  <p>
                    The focus of this initiative is on products
                    or services from the fields of Heating,
                    Ventilation, Air Conditioning.
                  </p>
                  <p>
                    This Programme assists Turkish SMEs during
                    all stages of their export activities.
                    Participating businesses receive widespread
                    support from the initial stages of market
                    exploration up to the making of actual
                    business contacts, e.g., by providing
                    first-hand market information, organizing
                    exploration trips and building networks. Key
                    element of this support is the personal
                    assistance during preparation,
                    implementation and follow-up of these
                    measures to ensure that the business
                    arrangements are of high quality and
                    sustainable.
                  </p>
                  <p>
                    This visit to Indonesia is part of the
                    initiating business opportunities and will
                    facilitate business contacts as well as
                    provide important impulses for the further
                    intensification of the fruitful co-operation
                    between Indonesia and Germany.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Participants */}
      <section id="participants" className="bg-gray-50/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-4xl font-bold text-gray-900"
          >
            These companies will be at the event
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ 
                  y: -12,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
              >
                <div className={`flex h-32 shrink-0 items-center justify-center p-4 ${company.image ? 'bg-white border-b border-gray-100' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                  {company.image ? (
                    <img src={company.image} alt={company.name} className="max-h-full max-w-full object-contain" />
                  ) : (
                    <Building2 className="h-12 w-12 text-gray-400" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                    <img src={turkeyFlag} alt="Turkey Flag" className="h-8 w-auto rounded-[2px]" />
                  </div>
                  <h4 className="mb-4 text-xl font-bold leading-tight text-gray-900">
                    {company.name}
                  </h4>

                  <div className="mb-6 flex-1 space-y-5">
                    <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed" title={company.profile}>
                      {company.profile}
                    </p>

                    <div>
                      <h5 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-900/60">
                        Products
                      </h5>
                      <p className="text-sm font-medium text-gray-800">
                        {company.products}
                      </p>
                    </div>

                    <div>
                      <h5 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-900/60">
                        Representatives
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {company.representatives.map((rep, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F4069]/40" />
                            <span>{rep}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedEvent(`Meeting with ${company.name}`);
                      setIsModalOpen(true);
                    }}
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F4069] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0c3557] hover:shadow-md"
                  >
                    <Calendar className="h-4 w-4" />
                    Reserve a Meeting Time
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About BI International */}
      <section className="bg-gradient-to-br from-[#0F4069] to-[#0d3557] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-4xl font-bold">
              About BI International
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-blue-100 text-justify">
              BI International is a global trade and investment
              development specialist consulting firm. Since its
              founding in 2008, BRIGHT Indonesia has evolved as
              one of the leading trade and investment consulting
              firms in Southeast Asia. Our values lead us to be
              reliable to deliver high-quality solutions in many
              services for business leaders and companies from
              various sectors.
            </p>
            <p className="mb-12 text-lg leading-relaxed text-blue-100 text-justify">
              BI International is appointed to support ISIB and
              its member to develop collaboration with
              Indonesian companies, pushing both countries trade
              and. The mission is one of the effort to develop
              business ahead
            </p>
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="mb-3 text-5xl font-bold">
                  63+
                </div>
                <div className="text-blue-200">
                  Partners & Associations
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-3 text-5xl font-bold">
                  100+
                </div>
                <div className="text-blue-200">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="mb-3 text-5xl font-bold">
                  118+
                </div>
                <div className="text-blue-200">
                  Country Network
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <a
                href="https://bi-international.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-8 py-4 font-semibold text-[#0F4069] transition-all hover:bg-transparent hover:text-white"
              >
                LEARN MORE
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-6 text-sm text-blue-200">
                BI International website
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reservation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="bg-[#0F4069] p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Reserve Your Place</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full p-1 transition-colors hover:bg-white/10"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="mt-2 text-sm text-blue-100">
                  Event: {selectedEvent}
                </p>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                  </motion.div>
                  <h4 className="mb-2 text-2xl font-bold text-gray-900">Reservation Confirmed!</h4>
                  <p className="text-gray-600">Your meeting request has been successfully submitted. We will contact you shortly.</p>
                </div>
              ) : (
                <form className="p-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        required
                        name="FullName"
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#0F4069] focus:outline-none focus:ring-2 focus:ring-[#0F4069]/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Company Name</label>
                      <input
                        required
                        name="CompanyName"
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#0F4069] focus:outline-none focus:ring-2 focus:ring-[#0F4069]/20"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        required
                        name="Email"
                        type="email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#0F4069] focus:outline-none focus:ring-2 focus:ring-[#0F4069]/20"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        required
                        name="Phone"
                        type="tel"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#0F4069] focus:outline-none focus:ring-2 focus:ring-[#0F4069]/20"
                        placeholder="+62 ..."
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      disabled={isLoading}
                      className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 rounded-lg bg-[#0F4069] py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#0d3557] hover:shadow-xl disabled:opacity-70 flex justify-center items-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Submitting...
                        </>
                      ) : (
                        "Confirm Reservation"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}