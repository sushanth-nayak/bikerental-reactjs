// import all images from assets/images directory
import img01 from "../all-images/bikes-img/activa.png";
import img02 from "../all-images/bikes-img/olas1.png";
import img03 from "../all-images/bikes-img/pulsur150.png";
import img04 from "../all-images/bikes-img/apache160.png";
import img05 from "../all-images/bikes-img/mt15.png";
import img06 from "../all-images/bikes-img/r15.png";
import img07 from "../all-images/bikes-img/classic350.png";
import img08 from "../all-images/bikes-img/duke390.png";

const bikeData = [
  {
    id: 1,
    brand: "Honda",
    rating: 530,
    bikeName: "Honda Activa",
    imgUrl: img01,
    model: "Model-2023",
    price: 1000,
    speed: "80kmph",
    gps: "GPS Navigation",
    seatType: "Single seat",
    automatic: "Automatic",
    description:
      "The Activa is a popular line of scooters produced by Honda, renowned for its reliability, efficiency, and versatile design. Introduced to the market as a pioneering force in the scooter segment, the Activa series has become an iconic choice for urban commuting.",
  },

  {
    id: 2,
    brand: "Ola",
    rating: 102,
    bikeName: "Ola S1 Pro",
    imgUrl: img02,
    model: "Model-2022",
    price: 800,
    speed: "80kmph",
    gps: "GPS Navigation",
    seatType: "Single seat",
    automatic: "Automatic",
    description:
      "The Ola Electric scooter, produced by Ola Electric Mobility, aims to be a cutting-edge, eco-friendly solution for urban commuting. With a focus on sustainability, this electric scooter represents Ola's commitment to reducing carbon emissions and fostering a greener mode of transportation.",
  },

  {
    id: 3,
    brand: "Bajaj",
    rating: 1320,
    bikeName: "Bajaj Pulsur 150",
    imgUrl: img03,
    model: "Model-2019",
    price: 1300,
    speed: "90kmph",
    gps: "GPS Navigation",
    seatType: "Single Seat",
    automatic: "With Gear",
    description:
      "The Bajaj Pulsar 150 is a sporty and muscular motorcycle known for its aggressive design. Powered by a robust engine, it offers a balanced combination of performance and fuel efficiency. Equipped with modern features, comfortable ergonomics, and reliable handling, the Pulsar 150 is a popular choice for riders.",
  },

  {
    id: 4,
    brand: "Apache",
    rating: 1020,
    bikeName: "Apache RTR 160",
    imgUrl: img04,
    model: "Model-2020",
    price: 1600,
    speed: "90kmph",
    gps: "GPS Navigation",
    seatType: "Split seats",
    automatic: "With gear",
    description:
      "The Apache RTR 160, a product of TVS Motor Company, is a stylish and performance-oriented motorcycle. Renowned for its sporty design, it houses a powerful engine that delivers a thrilling riding experience. With advanced features, precise handling, and a comfortable riding position, the Apache RTR 160 is a popular choice in the 160cc motorcycle segment.",
  },

  {
    id: 5,
    brand: "Yamaha",
    rating: 1600,
    bikeName: "Yamaha MT-15",
    imgUrl: img05,
    model: "Model-2021",
    price: 2000,
    speed: "100kmph",
    gps: "GPS Navigation",
    seatType: "Split seats",
    automatic: "With Gear",
    description:
      "The Yamaha MT-15 is a dynamic and aggressive streetfighter motorcycle known for its distinctive design. Powered by a high-performance engine, it delivers a thrilling and responsive riding experience. With a compact and nimble chassis, the MT-15 offers precise handling, making it well-suited for urban environments.",
  },

  {
    id: 6,
    brand: "Yamaha",
    rating: 2100,
    bikeName: "Yamaha R15",
    imgUrl: img06,
    model: "Model-2022",
    price: 2200,
    speed: "110kmph",
    gps: "GPS Navigation",
    seatType: "Split Seats",
    automatic: "With Gear",
    description:
      "The Yamaha YZF-R15 is a sporty and aerodynamic motorcycle, recognized for its track-inspired design. Powered by a high-performance engine, it delivers a thrilling and agile riding experience. With advanced features like a digital instrument cluster and sleek fairings, the R15 represents Yamaha's commitment to precision engineering in the sportbike category.",
  },

  {
    id: 7,
    brand: "Royal Enfield",
    rating: 1800,
    bikeName: "RE Classic 350",
    imgUrl: img07,
    model: "Model-2021",
    price: 2500,
    speed: "100kmph",
    gps: "GPS Navigation",
    seatType: "Split Seats",
    automatic: "With Gear",
    description:
      "The Royal Enfield Classic 350 is an iconic cruiser known for its vintage-inspired design and thumping exhaust note. Powered by a robust single-cylinder engine, it provides a laid-back and comfortable riding experience. With classic styling cues, including a teardrop fuel tank and retro instrumentation, the Classic 350 is a timeless choice for riders.",
  },

  {
    id: 8,
    brand: "KTM",
    rating: 1300,
    bikeName: "KTM Duke 390",
    imgUrl: img08,
    model: "Model-2021",
    price: 2800,
    speed: "130kmph",
    gps: "GPS Navigation",
    seatType: "Split Seats",
    automatic: "With Gear",
    description:
      "The KTM Duke 390 is a high-performance naked sport bike celebrated for its aggressive design and dynamic capabilities. Powered by a potent single-cylinder engine, it delivers a thrilling and responsive riding experience. Known for its lightweight chassis and sharp handling, the Duke 390 is a favorite among enthusiasts.",
  },
];

export default bikeData;
