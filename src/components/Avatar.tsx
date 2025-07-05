type Props = { src: string; alt?: string };

export default function Avatar({ src, alt }: Props) {
  return (
    <img
      className="w-8 h-8 rounded-full border-2 border-white shadow"
      src={src}
      alt={alt || "user"}
    />
  );
}
