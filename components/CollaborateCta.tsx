import Link from "next/link";

export function CollaborateCta({
  onClick,
  inverted = false,
}: {
  onClick?: () => void;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={`nav-bar nav-meta inline-flex items-center rounded-[4px] px-2.5 py-2 ${
        inverted ? "bg-paper text-ink" : "bg-ink text-paper"
      }`}
    >
      Zahájit spolupráci
    </Link>
  );
}
