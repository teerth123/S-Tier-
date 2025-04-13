import { motion } from 'framer-motion';

interface CompoProps {
    title: string;
    Icon: React.ComponentType; // Icon as a React component
}

const Compo: React.FC<CompoProps> = ({ title, Icon }) => {
    // Container variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Controls the delay between each letter
                delayChildren: 0.45    // Delay before starting the animation
            }
        }
    };

    // Letter variants
    const letter = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            <motion.div className="flex flex-col items-start space-y-3 justify-start text-left relative">
                <motion.div className="flex items-center space-x-4 text-left mt-1">
                    {/* Render the passed Icon dynamically */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -5
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        <Icon /> {/* Use the dynamic Icon */}
                    </motion.div>

                    {/* Title Text with staggered animation */}
                    <motion.h1
                        className="text-white  font-semibold"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letter}
                                style={{ display: 'inline-block' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    
                </motion.div>

                {/* Bottom line animation */}
                <div className="w-full overflow-hidden">
                    <motion.hr
                        className="dashed border-t border-dashed border-[#666666] w-full"
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.3, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>
        </>
    );
};

export default Compo;
