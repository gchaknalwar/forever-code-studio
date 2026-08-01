import { useEffect } from "react";
import Contact from "../components/sections/Contact";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Forever Code Studio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0B0D12] pt-20">
      {/* Reuses the same fully-working Contact form/section used on the
          home page — one source of truth, no duplicated form logic. */}
      <Contact />
    </main>
  );
}