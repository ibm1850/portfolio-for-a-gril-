"use client";

import type { CSSProperties } from "react";

const petals = [
  [6, 1.1, 14, 26],
  [12, 3.6, 18, 31],
  [18, 0.4, 12, 24],
  [24, 5.1, 16, 28],
  [31, 2.4, 10, 23],
  [38, 6.3, 19, 30],
  [45, 1.9, 13, 25],
  [52, 4.2, 17, 29],
  [59, 0.8, 11, 22],
  [66, 6.9, 15, 27],
  [72, 2.9, 20, 32],
  [79, 4.8, 12, 23],
  [86, 1.5, 18, 30],
  [92, 5.8, 14, 26],
];

export function FlowerField() {
  return (
    <div className="flower-field" aria-hidden="true">
      {petals.map(([left, delay, size, duration], index) => (
        <span
          key={index}
          className="falling-petal"
          style={
            {
              "--left": `${left}%`,
              "--delay": `${delay}s`,
              "--size": `${size}px`,
              "--duration": `${duration}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
