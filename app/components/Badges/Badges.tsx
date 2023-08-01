import { cn } from "@/app/lib/utils";

type BadgesItemProps = {
    label: string;
    className: string;
};

export const Badges = ({ label, className }: BadgesItemProps) => {
    return (
        <span
            className={cn(
                "text-center text-white bg-badges hover:bg-secondary ease-in-out duration-300 px-3 py-2 font-inter text-base md:text-sm font-bold",
                className
            )}
        >
            {label}
        </span>
    );
};
