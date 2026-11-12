import songkran from "../public/images/events/songkran.jpg";
import loyKrathong from "../public/images/events/loy-krathong.jpg";
import phiTaKhon from "../public/images/events/phi-ta-khon.jpg";
import surinElephantRoundUp from "../public/images/events/surin-elephant-round-up.jpg";
import vegetarianFestival from "../public/images/events/vegetarian-festival.jpg";
import candleFestival from "../public/images/events/candle-festival.jpg";

const events = [
  {
    id: 1,
    slug: "songkran",
    title: "Songkran Festival",
    description: "Celebrate Thailand's most refreshing festival with joyful water fights, cultural traditions, and family reunions.",
    location:"Thailand",
    thumbnail: songkran,
    layout:"hero"
  },
  {
    id: 2,
    slug: "loy-krathong",
    title: "Loy Krathong Festival",
    description: "Experience the magical beauty of floating lanterns and illuminated waterways during Thailand's most romantic festival.",
    location:"Thailand",
    thumbnail: loyKrathong,
    layout:"top1"
  },
  {
    id: 3,
    slug: "phi-ta-khon",
    title: "Phi Ta Khon Festival",
    description: "Thailand's most colorful ghost festival filled with masks, parades, and ancient folklore.",
    location:"Loei",
    thumbnail: phiTaKhon,
    layout:"top2"
  },
  {
    id: 4,
    slug: "surin-elephant-round-up",
    title: "Surin Elephant Round Up",
    description: "Witness Thailand's majestic elephants showcase their strength, intelligence, and centuries-old bond with humans.",
    location:"Surin",
    thumbnail: surinElephantRoundUp,
    layout:"bottom1"
  },
  {
    id: 5,
    slug: "vegetarian-festival",
    title: "Vegetarian Festival",
    description: "Experience a fascinating spiritual festival featuring sacred rituals, vegetarian cuisine, and colorful street processions.",
    location:"Phuket",
    thumbnail: vegetarianFestival,
    layout:"bottom2"
  },
  {
    id: 6  ,
    slug: "candle-festival",
    title: "Candle Festival",
    description: "Admire magnificent wax sculptures and traditional parades during Thailand's famous Candle Festival.",
    location:"Ubon Ratchathani",
    thumbnail: candleFestival,
    layout:"bottom3"
  },
];

export default events;