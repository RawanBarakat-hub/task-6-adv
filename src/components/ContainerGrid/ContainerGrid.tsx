import type { ContainerGridProps } from "../../interfaces";

const ContainerGrid = ({ className, children }: ContainerGridProps) => {
    const gridClasses =
        className === "recent"
            ? "grid-cols-1 gap-8 lg:items-start lg:grid-cols-2"
            : className === "details"
            ? "grid-cols-1 gap-8"
            : "grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12";
    return (
        <div className={`grid ${gridClasses}`}>
            {children}
        </div>
    );
};

export default ContainerGrid;
