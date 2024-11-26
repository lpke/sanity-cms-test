import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({ href, onClick, children }: ButtonProps) {
  const button = (
    <button
      aria-label="Button"
      className="rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white transition hover:bg-emerald-800 hover:shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (href) return <Link href={href}>{button}</Link>;
  return button;
}
