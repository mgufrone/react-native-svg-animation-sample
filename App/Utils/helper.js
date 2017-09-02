
export function convertWattHour(length) {
  return (length * 1000) / (Math.PI * 2);
}

export function toColor(dec) {
  return `#${(dec).toString(16)}`;
}

export function colorToDec(hex) {
  return parseInt(hex.replace('#', '0x'), 0);
}

export function interpolate(begin, end, step, max) {
  if (begin < end) {
    return ((end - begin) * (step / max)) + begin;
  }
  return ((begin - end) * (1 - (step / max))) + end;
}
export function toRgb(hex) {
  return {
    r: (hex & 0xff0000) >> 16,
    g: (hex & 0x00ff00) >> 8,
    b: (hex & 0x0000ff) >> 0,
  };
}
export function interpolateColors(begin, end, steps) {
  const { r: r1, g: g1, b: b1 } = toRgb(begin);
  const { r: r2, g: g2, b: b2 } = toRgb(end);
  return new Array(steps).fill().map((_, step) => {
    const newR = Math.ceil(interpolate(r1, r2, step, steps));
    const newG = Math.ceil(interpolate(g1, g2, step, steps));
    const newB = Math.ceil(interpolate(b1, b2, step, steps));
    return `rgb(${newR}, ${newG}, ${newB})`;
  });
}
