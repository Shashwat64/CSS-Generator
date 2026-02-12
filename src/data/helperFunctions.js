export const hexToRgba = (hex, opacity = 1) => {
  let color = hex.replace('#', '')

  if (color.length === 3) {
    color = color.split('').map(char => char + char).join('')
  }

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}