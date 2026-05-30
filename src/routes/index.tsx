import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salário Maternidade INSS — Análise Gratuita" },
      { name: "description", content: "Descubra em menos de 1 minuto se você tem direito a receber até R$ 6.484 do INSS." },
      { property: "og:title", content: "Salário Maternidade INSS — Análise Gratuita" },
      { property: "og:description", content: "Análise 100% gratuita, sem burocracia." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/quiz.html");
  }, []);
  return null;
}
