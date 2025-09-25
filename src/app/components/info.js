"use client";

import { Monitor, Palette, BarChart3 } from "lucide-react";

export default function InfoSection() {
  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-red-500" />,
      title: "Responsive Design",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
      icon: <Palette className="w-8 h-8 text-red-500" />,
      title: "Visual Page Builder",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: "Strong Admin Panel",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
  ];
  
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}