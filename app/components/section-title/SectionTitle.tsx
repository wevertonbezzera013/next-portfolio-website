import { cn } from "@/app/lib/utils";

type SectionTitleProps = {
    title: string;
    className?: string;
};

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <h3 className="font-krona text-3xl">{title}</h3>
        </div>
    );
};
