import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import "./globals.css";

export const metadata = {
    title: "Loja de Eletrônicos",
    description: "Curso Front-End 2 SENAI",
    icons: {
        icon: "/ico/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header 
                    titulo="Loja de Eletrônicos" 
                    subtitulo="Os melhores produtos com os melhores preços!" 
                    quantidade="Total de produtos: 10" 
                />
                <main className="main">{children}</main>
            </body>
        </html>
        
    );
}