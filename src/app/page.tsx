"use client";
import Banner from "@/components/banner";
import LeftSidebar from "@/components/leftSidebar";
import Navbar from "@/components/navbar";
import RightSidebar from "@/components/rightSidebar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <main className="w-full h-[88vh] xl:flex items-center justify-between gap-20">
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSidebar />
        </motion.aside>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-[88vh] w-full mx-auto p-4"
        >
          <Banner />
        </motion.div>
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightSidebar />
        </motion.aside>
      </main>
    </div>
  );
}
