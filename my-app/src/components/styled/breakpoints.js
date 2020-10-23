const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
  xl: '1500px',
}
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
}
export default { size, device }
