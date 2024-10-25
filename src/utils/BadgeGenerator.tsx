import React from 'react';

interface BadgeProps {
  seed: string;
  size?: number;
}

const BadgeGenerator: React.FC<BadgeProps> = ({ seed = '', size = 200 }) => {
  const generatePixelMatrix = () => {
    const matrix = [];
    const gridSize = 8; // Reduced from 12 to 8 for smaller grid
    const colors = [
      '#B8860B', // Dark Golden
      '#CD853F', // Peru Bronze
      '#C0C0C0', // Silver
      '#DAA520', // Golden
      '#8B4513', // Saddle Brown
    ];

    // Create deterministic random number generator
    const seededRandom = (i: number) => {
      const hash = seed.split('').reduce((acc, char) => {
        return char.charCodeAt(0) + ((acc << 5) - acc);
      }, i);
      return Math.abs(Math.sin(hash)) % 1;
    };

    // Generate only half the matrix (for symmetry)
    for (let y = 0; y < gridSize; y++) {
      const row = [];
      for (let x = 0; x < gridSize / 2; x++) {
        const rand = seededRandom(y * gridSize + x);
        const colorIndex = Math.floor(rand * colors.length);
        row[x] = colors[colorIndex];
        // Mirror the pixel for symmetry
        row[gridSize - 1 - x] = colors[colorIndex];
      }
      matrix.push(row);
    }

    return matrix;
  };

  const pixelSize = size / 8; // Adjusted for new grid size
  const matrix = generatePixelMatrix();

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Black Border */}
      <rect
        x="0"
        y="0"
        width={size}
        height={size}
        fill="none"
        stroke="#000000"
        strokeWidth={pixelSize / 2}
      />
      
      {/* Pixel Matrix */}
      {matrix.map((row, y) =>
        row.map((color, x) => (
          <rect
            key={`${x}-${y}`}
            x={x * pixelSize}
            y={y * pixelSize}
            width={pixelSize}
            height={pixelSize}
            fill={color}
          />
        ))
      )}
    </svg>
  );
};

export default BadgeGenerator;