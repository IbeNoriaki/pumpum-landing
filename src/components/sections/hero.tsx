"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollY, [0, 300], [100, 0]);
  const y2 = useTransform(scrollY, [0, 300], [50, 0]);
  const y3 = useTransform(scrollY, [0, 300], [0, 0]);

  const deviceImages = [
    {
      src: "/Device-1.png",
      alt: "クリエイター応援画面",
      x: -100,
      y: y1,
    },
    {
      src: "/Device-1.png",
      alt: "トークン受け取り画面",
      x: 0,
      y: y2,
    },
    {
      src: "/Device-1.png",
      alt: "安全な取引画面",
      x: 100,
      y: y3,
    },
  ];

  return (
    <Section id="hero" className="min-h-[90vh] w-full overflow-hidden">
      <main className="mx-auto pt-16 sm:pt-24 md:pt-32 text-center relative px-4">
        <div className="relative">
          <motion.div
            initial={{ scale: 4.5, height: "80vh" }}
            animate={{ scale: 1, height: "10vh" }}
            transition={{
              scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
              height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
            }}
            className="mb-16 relative z-20"
            style={{ transformOrigin: "top" }}
          >
            <div className="bg-primary text-white text-xl font-bold p-4 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md">
              <Icons.logo className="w-auto h-[40px]" />
            </div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
            className="text-5xl font-bold mb-4 tracking-tighter"
          >
            {siteConfig.description}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
            className="max-w-2xl mx-auto text-xl mb-8 font-medium text-balance"
          >
            好きなクリエイターを、もっと身近に。
            <br />
            応援の気持ちを、カタチにしよう。
          </motion.p>
          <div className="flex justify-center mb-16">
            <motion.a
              href={siteConfig.links.appStore}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-[135px] h-[40px] flex-shrink-0"
            >
              <img
                src="/Download_on_the_App_Store_Badge_JP_RGB_wht_100317.svg"
                alt="App Storeでダウンロード"
                className="w-full h-full"
              />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none">
          {deviceImages.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              initial={{ opacity: 0, x: image.x }}
              animate={{ opacity: 1, x: 0 }}
              style={{ y: image.y }}
              transition={{ duration: 1, delay: 1 }}
              className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
            />
          ))}
        </div>
      </main>
    </Section>
  );
}
