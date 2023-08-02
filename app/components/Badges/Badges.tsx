import { cn } from "@/app/lib/utils";

type BadgesItemProps = {
    label: string;
    className: string;
};

export const Badges = ({ label, className }: BadgesItemProps) => {
    return (
        <div className="flex place-self-center text-center bg-badges px-2 py-1 md:px-5 md:py-3">
            <span
                className={cn(
                    "text-white font-inter text-sm md:text-base font-bold",
                    className
                )}
            >
                {label}
            </span>
        </div>
    );
};
