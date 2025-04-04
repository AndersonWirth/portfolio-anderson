export function Button({ children, variant = "default", asChild = false }) {
  const baseStyle = "px-4 py-2 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700";
  return asChild ? children : <button className={baseStyle}>{children}</button>;
}