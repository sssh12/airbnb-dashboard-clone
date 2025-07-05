type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...rest }: Props) {
  return (
    <button
      className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full font-semibold shadow transition"
      {...rest}
    >
      {children}
    </button>
  );
}
