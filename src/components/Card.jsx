import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      src={image}
      alt=""
      className="absolute w-15 cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      className="bg-storm absolute w-[12rem] cursor-grab rounded-full px-1 py-4 text-center text-xl font-extralight ring ring-gray-700"
    >
      {text}
    </motion.div>
  );
};

export default Card;
