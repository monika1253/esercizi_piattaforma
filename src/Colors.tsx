import Color from "./Color";

interface ColorItem {
  id: number;
  name: string;
}
interface ColorsProps {
  items: ColorItem[];
}

function Colors({ items }: ColorsProps) {
  return (
    <ul>
      {items.map((color) => (
        <li key={color.id}>{color.name}</li>
      ))}
    </ul>
  );
}
export default Colors;
