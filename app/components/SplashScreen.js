'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

export default function SplashScreen() {
    
    return (
        <motion.div
        initial={{ opacity: 1 }}
        animate={{
            opacity: 0,
            scale: 1.2,
            pointerEvents: "none",
            transition: { duration: 2 },
        }}
        whileFocus={{ display: "none" }}
        className="splash-screen"
        >
            <div className="splash-screen-wrapper">
                <Image className="splash-screen-logo" src='https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/mstile-150x150-1.png' width={150} height={150} />
            </div>
        </motion.div>
    );
}