import { motion, AnimatePresence } from "motion/react";
const Alert = ({ type, text }) => {
  const alertVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    export: { opacity: 0, y: -50, scale: 0.8 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className="fixed right-5 bottom-5 z-50 flex items-center justify-center"
        initialValue="hidded"
        animate="visible"
        exit="exit"
        variants={alertVariant}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`p-2 ${type === "danger" ? "bg-red-800" : "bg-royal"} flex items-center rounded-md p-5 leading-none text-indigo-100 lg:inline-flex lg:rounded-full`}
        >
          <p
            className={`flex rounded-full ${type === "danger" ? "bg-red-500" : "bg-lavender"} mr-3 px-2 py-1 text-xs font-semibold uppercase`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
