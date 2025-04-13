import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "./icons/dropdown";
import { ChevronUpIcon } from "./icons/dropup"
import { HomeIcon } from "./icons/Home";
// import { ChartColumnIncreasingIcon } from "./icons/Chart"
import { MailCheckIcon } from "./icons/Mail";
import { CogIcon } from "./icons/settings"
import { UserIcon } from "./icons/User"
import Compo from "./component/Compo"; 


function FluidMenuAnimation() {
  const [expand, setExpand] = useState(0);

  const menuItems = [
    { title: "Home", Icon: HomeIcon },
    { title: "Mail", Icon: MailCheckIcon },
    { title: "Profile", Icon: UserIcon },
    { title: "Settings", Icon: CogIcon },
    // { title: "Tasks", Icon: ChartColumnIncreasingIcon }
  ];

  return (
    <>
      <div className="bg-[#010100] border-[1px] rounded-2xl border-[#262626] h-[80vh] w-[80vw] p-5">
        <div className="w-[205px] h-16 bg-[#262626] flex justify-center items-center px-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <h1 className="text-white px-2 py-1 border-[#706f6f] border rounded-[4px]">1</h1>
            <div className="text-white leading-tight text-sm">
              <p className="font-semibold">Fluid Menu</p>
              <p className="text-left font-semibold">Animation</p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setExpand((prev) => (prev === 0 ? 1 : 0))}
            >
              {expand === 0 ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <motion.div
            initial={{ width: '205px', height: 0 }}
            animate={{ 
              width: '205px', 
              height: expand ? 300 : 0,
              overflow: expand ? "visible" : "hidden"
            }}
            transition={{ duration: 0.5 }}
            className=" bg-[#262626] rounded-lg"
          >
            <AnimatePresence>
              {expand === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 space-y-3"
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.3 }}
                    >
                      <Compo title={item.title} Icon={item.Icon} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default FluidMenuAnimation;