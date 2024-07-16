import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";


export const poppins = Poppins({
    subsets: ["latin"],
    weight: "600"
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans"
});