import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Img1 from '../assets/img/chair1.webp';
import Img2 from '../assets/img/chair2.webp';
import Img3 from '../assets/img/chair3.webp';
import Img4 from '../assets/img/chair4.webp';
import Img5 from '../assets/img/chair5.webp';
import Img6 from '../assets/img/chair6.webp';
import Img7 from '../assets/img/chair7.webp';
import Img8 from '../assets/img/couch1.webp';
import Img9 from '../assets/img/couch2.webp';
import Img10 from '../assets/img/couch3.webp';
import Img11 from '../assets/img/couch4.webp';
import Img12 from '../assets/img/couch5.webp';
import Img13 from '../assets/img/couch6.webp';
import Img14 from '../assets/img/couch7.webp';
import Img15 from '../assets/img/table1.webp';
import Img16 from '../assets/img/table2.webp';
import Img17 from '../assets/img/table3.webp';
import Img18 from '../assets/img/table4.webp';
import Img19 from '../assets/img/table5.webp';
import Img20 from '../assets/img/table6.webp';
import Img21 from '../assets/img/bed1.webp';
import Img22 from '../assets/img/bed2.webp';
import Img23 from '../assets/img/bed3.webp';
import Img24 from '../assets/img/bed4.webp';
import Img25 from '../assets/img/bed5.webp';
import Img26 from '../assets/img/bed6.webp';
import Img27 from '../assets/img/bed7.webp';
import Img28 from '../assets/img/bed8.webp';
import Img29 from '../assets/img/bed9.webp';
import Chair1 from '../assets/img/chair5.webp';
import Chair2 from '../assets/img/chair6.webp';
import Chair3 from '../assets/img/chair7.webp';

export const items = [
  {
    id: 1,
    category: 'chair',
    path: 'chairs',
    description:
      'Chairs provide comfortable seating options for various purposes. Whether you need a chair for your living room, office, or dining area, a chair is a versatile piece of furniture that offers both functionality and style. From vintage armchairs to minimalist bar stools, chairs come in various designs to suit different preferences and interior styles.',
    img: Img1,
    title: 'Vintage Armchair',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'chair',
    price: 79,
    isNew: true,
    relatedImgs: [Img1, Chair1, Chair2, Chair3],
  },
  {
    id: 2,
    category: 'couch',
    description:
      'Couches are large, upholstered seating furniture designed for relaxation and comfort. They are perfect for lounging, socializing, or watching TV. From elegant dining couches to contemporary couches, you can find a wide range of styles to complement your living space. Velvet couches, family couches, and L-shaped couches are just a few examples of the diverse options available.',
    img: Img8,
    title: 'Elegant Dining Couch',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'couch',
    price: 99,
    isNew: true,
    relatedImgs: [Img8, Chair1, Chair2, Chair3],
  },
  {
    id: 3,
    category: 'table',
    description:
      'Tables are flat surfaces with legs or supports, used for placing objects or serving as workspaces. They are essential pieces of furniture in homes, offices, and other settings. Lounge tables, office tables, dining tables, round tables, marble tables, and study tables are some of the table variations you can choose from. Each type serves a specific purpose and adds functionality to the environment.',
    img: Img15,
    title: 'Lounge Table',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'table',
    price: 129,
    isNew: true,
    relatedImgs: [Img15, Chair1, Chair2, Chair3],
  },
  {
    id: 4,
    category: 'chair',
    description:
      'Bar stools are tall chairs often used in bars and kitchen counters. They provide elevated seating options for enjoying drinks or quick meals. With their sleek and minimalist designs, bar stools add a touch of modernity to any space.',
    img: Img5,
    title: 'Minimalist Bar Stool',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'chair',
    price: 149,
    isNew: true,
    relatedImgs: [Img5, Chair1, Chair2, Chair3],
  },
  {
    id: 5,
    category: 'bed',
    description:
      'Beds are furniture pieces designed for sleeping or resting. They are the focal point of any bedroom and come in various sizes and styles. From comfortable beds with upholstered headboards to sleek platform beds and queen size beds, there are options to suit different preferences and room sizes. Some beds, such as storage platform beds and bunk beds, offer additional features like built-in storage or space-saving designs.',
    img: Img21,
    title: 'Comfortable Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 89,
    relatedImgs: [Img21, Chair1, Chair2, Chair3],
  },
  {
    id: 6,
    category: 'couch',
    description:
      'Contemporary couches feature modern designs and are suitable for a variety of living spaces. With clean lines, minimalistic shapes, and bold colors, contemporary couches add a touch of sophistication and style to your home. They are designed to offer both comfort and aesthetic appeal, making them a popular choice among homeowners.',
    img: Img12,
    title: 'Contemporary Couch',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'couch',
    price: 109,
    relatedImgs: [Img12, Chair1, Chair2, Chair3],
  },
  {
    id: 7,
    category: 'chair',
    description:
      'Accent chairs are stylish seating options that add a touch of elegance to any room. They serve as decorative pieces while providing additional seating. Accent chairs come in various designs, from classic armchairs to modern swivel chairs. With their unique patterns, vibrant colors, and eye-catching upholstery, they become the focal point of the space they are placed in.',
    img: Img7,
    title: 'Accent Chair',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'chair',
    price: 109,
    relatedImgs: [Img7, Chair1, Chair2, Chair3],
  },
  {
    id: 8,
    category: 'chair',
    description:
      'Lounge chairs are comfortable chairs designed for relaxation, often found in living rooms or lounges. They provide a cozy spot for reading, napping, or simply unwinding after a long day. Lounge chairs come in various styles and materials, such as leather, fabric, or wood. Their ergonomic designs and cushioned seats make them perfect for lounging and enjoying leisure time.',
    img: Img2,
    title: 'Lounge Chair',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'chair',
    price: 60,
    relatedImgs: [Img2, Chair1, Chair2, Chair3],
  },
  {
    id: 9,
    category: 'table',
    description:
      'Office tables are work surfaces used in office spaces for various tasks and activities. They provide a dedicated space for working, organizing documents, and setting up equipment like computers and printers. Office tables come in different sizes and designs, including sleek modern styles and more traditional options. Having a functional and ergonomic office table is essential for productivity and comfort.',
    img: Img17,
    title: 'Office Table',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'table',
    price: 80,
    isNew: true,
    relatedImgs: [Img17, Chair1, Chair2, Chair3],
  },
  {
    id: 10,
    category: 'couch',
    description:
      'Family couches are large and comfortable seating options suitable for multiple people. They provide ample space for the whole family to sit together, watch movies, or engage in conversations. Family couches are designed with durability and comfort in mind, ensuring that they can withstand everyday use and offer a cozy and inviting atmosphere for family gatherings.',
    img: Img10,
    title: 'Family Couch',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'couch',
    price: 200,
    relatedImgs: [Img10, Chair1, Chair2, Chair3],
  },
  {
    id: 11,
    category: 'couch',
    description:
      'Velvet couches feature luxurious upholstery and add a touch of elegance to any space. With their soft and plush fabric, velvet couches create a sense of opulence and sophistication. They come in various colors and designs, from classic tufted styles to more modern and sleek silhouettes. Velvet couches can transform a room and become a statement piece within your interior.',
    img: Img11,
    title: 'Velvet Couch',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'couch',
    price: 90,
    relatedImgs: [Img11, Chair1, Chair2, Chair3],
  },
  {
    id: 12,
    category: 'chair',
    description:
      'Swivel chairs can rotate 360 degrees and provide flexible seating options. They are versatile and convenient, allowing you to easily turn and reach different areas without having to move the entire chair. Swivel chairs are popular choices for home offices, workspaces, or areas where mobility and flexibility are required. With their adjustable height and comfortable seating, swivel chairs offer both functionality and comfort.',
    img: Img6,
    title: 'Swivel Chair',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'chair',
    price: 70,
    relatedImgs: [Img6, Chair1, Chair2, Chair3],
  },
  {
    id: 13,
    category: 'bed',
    description:
      'Platform beds feature a low-profile design with a solid base that eliminates the need for a box spring. They provide a sleek and modern look to the bedroom and are available in various materials and finishes. Platform beds offer excellent support and stability, making them a popular choice for those who prefer a minimalist aesthetic and a comfortable sleeping experience.',
    img: Img23,
    title: 'Platform Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 150,
    isNew: true,
    relatedImgs: [Img23, Chair1, Chair2, Chair3],
  },
  {
    id: 14,
    category: 'table',
    description:
      'Dining tables are specifically designed for meals and gatherings. They come in various sizes, shapes, and materials to suit different dining spaces and accommodate the desired number of people. From classic wooden tables to modern glass-top designs, dining tables create a focal point in the dining area and provide a space for sharing meals and creating memories with family and friends.',
    img: Img18,
    title: 'Dining Table',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'table',
    price: 120,
    relatedImgs: [Img18, Chair1, Chair2, Chair3],
  },
  {
    id: 15,
    category: 'chair',
    description:
      'Rocking chairs provide a relaxing and soothing experience with their gentle back-and-forth motion. They are commonly associated with nurseries or outdoor spaces, but rocking chairs also come in various styles suitable for indoor use. From traditional wooden rocking chairs to modern designs, they offer a comfortable spot for reading, nursing, or simply enjoying a moment of tranquility.',
    img: Img3,
    title: 'Rocking Chair',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'chair',
    price: 95,
    relatedImgs: [Img3, Chair1, Chair2, Chair3],
  },
  {
    id: 16,
    category: 'bed',
    description:
      'Queen size beds are larger than standard double beds and offer more space for sleeping comfortably. They are a popular choice for couples or individuals who prefer extra room while sleeping. Queen size beds come in various styles and materials, from elegant upholstered frames to sturdy wooden designs. They provide both comfort and style to any bedroom.',
    img: Img22,
    title: 'Queen Size Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 180,
    relatedImgs: [Img22, Chair1, Chair2, Chair3],
  },
  {
    id: 17,
    category: 'chair',
    description:
      'Wingback chairs are classic and elegant seating options that feature high backrests and distinctive wing-like side panels. They are often upholstered with luxurious fabric and add a touch of sophistication to any room. Wingback chairs provide both comfort and style, making them suitable for various settings, from cozy reading nooks to formal living spaces.',
    img: Img4,
    title: 'Wingback Chair',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'chair',
    price: 85,
    relatedImgs: [Img4, Chair1, Chair2, Chair3],
  },
  {
    id: 18,
    category: 'couch',
    description:
      'Leather couches exude timeless style and sophistication. They are known for their durability, comfort, and luxurious appearance. Leather couches come in various styles, such as classic Chesterfield designs or modern sectional sofas. They add a touch of elegance to any space and can withstand years of use while still maintaining their charm and beauty.',
    img: Img13,
    title: 'Leather Couch',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'couch',
    price: 250,
    relatedImgs: [Img13, Chair1, Chair2, Chair3],
  },
  {
    id: 19,
    category: 'table',
    description:
      'Round tables offer a unique and versatile option for various spaces. With no sharp corners, they are ideal for small spaces and create a more intimate dining or gathering experience. Round tables come in different sizes and materials, from compact bistro tables to larger dining tables. They can enhance the aesthetics of your room and promote better conversation flow during meals or socializing.',
    img: Img19,
    title: 'Round Table',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'table',
    price: 110,
    relatedImgs: [Img19, Chair1, Chair2, Chair3],
  },
  {
    id: 20,
    category: 'couch',
    description:
      'Couch are specifically designed for to watch movies. They come in a variety of styles, including upholstered chairs, wooden chairs, and modern plastic chairs. Couch are essential for creating a comfortable and inviting dining experience. With their ergonomic designs and supportive features, they allow you to enjoy meals with family and friends in a relaxed and cozy setting.',
    img: Img9,
    title: 'Soft couch',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'couch',
    price: 45,
    relatedImgs: [Img9, Chair1, Chair2, Chair3],
  },
  {
    id: 21,
    category: 'bed',
    description:
      'Storage platform beds offer a practical solution for those in need of extra storage space in their bedrooms. These beds come with built-in drawers or compartments underneath the mattress, allowing you to store items such as bedding, clothing, or personal belongings. Storage platform beds are stylish and functional, making them a great choice for optimizing space in smaller bedrooms.',
    img: Img24,
    title: 'Storage  Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 210,
    relatedImgs: [Img24, Chair1, Chair2, Chair3],
  },
  {
    id: 22,
    category: 'couch',
    description:
      'Sectional sofas consist of multiple interconnected seating units, providing ample seating space for larger groups or families. They often feature a corner piece that allows for different configurations, adapting to various room layouts. Sectional sofas come in various styles, from contemporary designs to more traditional options, and they offer both comfort and versatility for your living space.',
    img: Img14,
    title: 'Sectional Sofa',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'couch',
    price: 320,
    relatedImgs: [Img14, Chair1, Chair2, Chair3],
  },
  {
    id: 23,
    category: 'table',
    description:
      'Coffee tables are low tables placed in front of sofas or chairs in the living room. They provide a convenient surface for placing drinks, snacks, and other items within easy reach. Coffee tables come in various shapes, sizes, and materials, allowing you to choose one that complements your existing furniture and adds functionality to your living space.',
    img: Img16,
    title: 'Coffee Table',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'table',
    price: 75,
    relatedImgs: [Img16, Chair1, Chair2, Chair3],
  },
  {
    id: 24,
    category: 'bed',
    description:
      "Comfy beds are a space-saving solution, featuring two or more beds stacked on top of each other. They are commonly used in children's bedrooms or shared rooms. Bunk beds come in various designs, including twin-over-twin, twin-over-full, or loft bed configurations. They are practical and fun, providing separate sleeping areas while maximizing floor space.",
    img: Img25,
    title: 'Comfy Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 300,
    relatedImgs: [Img25, Chair1, Chair2, Chair3],
  },
  {
    id: 25,
    category: 'table',
    description:
      'Meeting tables are low tables placed in front of sofas or chairs in the living room. They provide a convenient surface for placing drinks, snacks, and other items within easy reach. Coffee tables come in various shapes, sizes, and materials, allowing you to choose one that complements your existing furniture and adds functionality to your living space.',
    img: Img20,
    title: 'Meeting Tables',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'table',
    price: 180,
    relatedImgs: [Img20, Chair1, Chair2, Chair3],
  },
  {
    id: 26,
    category: 'bed',
    description:
      'Bean bag bed are casual and comfortable seating options filled with small polystyrene beads. They are versatile and can be easily moved around to different locations. Bean bag chairs are popular among children, teenagers, and young adults, providing a cozy and relaxed seating experience for lounging, playing games, or watching movies.',
    img: Img26,
    title: 'Bean Bag Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 55,
    relatedImgs: [Img26, Chair1, Chair2, Chair3],
  },

  {
    id: 27,
    category: 'bed',
    description:
      'Halle Bed are designed for sleeping. They provide a dedicated workspace that allows for better focus and organization. Study tables come in various sizes and designs, from compact desks for small rooms to larger desks with built-in storage options. Having a well-designed study table is essential for creating a productive and comfortable work environment.',
    img: Img27,
    title: 'Halle Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 95,
    relatedImgs: [Img27, Chair1, Chair2, Chair3],
  },
  {
    id: 28,
    category: 'bed',
    description:
      'Chaise Bed are long bed with extended seats to support the legs. They are designed for relaxation and can be a stylish addition to your living room, bedroom, or outdoor space. Chaise lounges come in various styles, from classic upholstered designs to modern and minimalist options. They provide a luxurious spot to unwind and enjoy some downtime.',
    img: Img28,
    title: 'Chaise Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 175,
    relatedImgs: [Img28, Chair1, Chair2, Chair3],
  },
  {
    id: 29,
    category: 'bed',
    description:
      'Papasan Bed are unique and cozy seating options with a round, bowl-shaped seat and a supportive base. They are often made of rattan or other natural materials and come with a soft cushion for added comfort. Papasan chairs offer a relaxing and bohemian vibe, making them a perfect addition to living rooms, reading corners, or outdoor spaces.',
    img: Img29,
    title: 'Papasan Bed',
    icon: <ShoppingCartRoundedIcon />,
    alt: 'bed',
    price: 120,
    relatedImgs: [Img29, Chair1, Chair2, Chair3],
  },
];
