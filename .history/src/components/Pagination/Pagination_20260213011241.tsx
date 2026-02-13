import { useDispatch, useSelector } from "react-redux";
import type { BlogsState } from "../../interfaces";
import PaginationLink from "../PaginationLink/PaginationLink";
import { setPage } from "../../redux/slice";

const Pagination = () => {
    const dispatch = useDispatch();
    const { blogs, currentPage } = useSelector(
  (state: { blogs: BlogsState }) => state.blogs
);

    const cardsPerPage = 6;
    const totalPages = Math.ceil(blogs.length / cardsPerPage)
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(setPage(page))
        }
    }
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            pages.push(2);
            pages.push(3);
            pages.push("...");
            pages.push(totalPages - 1);
            pages.push(totalPages);
        }
        return pages;
    }
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-5
        mt-10 pt-5 pb-6">
            <PaginationLink
                image={{
                    source: "/assets/previous.svg",
                    source_mode: "/assets/previosdark.svg",
                    alternative: "previous"
                }}
                text="Previous"
                onClick={() => goToPage(currentPage - 1)}
            />
            <ul className="flex gap-1">
                {getPageNumbers().map((num, index) => (
                    <li key={index}>
                        {num === "..." ? (
                            <span className="w-10 flex justify-center items-center text-[#667085]">
                                ...
                            </span>
                        ) : (
                            <button
                                onClick={() => goToPage(num as number)}
                                className={`flex justify-center items-center w-10 h-10 rounded-lg font-medium text-[14px] cursor-pointer
                                ${currentPage === num
                                        ? "bg-[#F9F5FF] text-[#7F56D9]"
                                        : "text-[#667085] dark:text-[#EFEFEF]"
                                    }`}
                            >
                                {num}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <PaginationLink
                className="next"
                image={{
                    source: "/assets/next.svg",
                    source_mode: "/assets/nextdark.svg",
                    alternative: "next"
                }}
                text="Next"
                onClick={() => goToPage(currentPage + 1)}
            />
        </div>
    );
};

export default Pagination;
