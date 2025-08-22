import { Link } from '@tanstack/react-router'

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  return (
    <div className="flex justify-center items-center mt-6 gap-4">
       <Link
        to="/characters"
        search={{ page: Number(currentPage - 1) }}
        className={`px-3 py-1 border rounded ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        Prev
      </Link>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Link
        to="/characters"
        search={{ page: Number(currentPage + 1) }}
        className={`px-3 py-1 border rounded ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        Next
      </Link>
    </div>
  );
}
