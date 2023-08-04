import { cn } from "@/app/lib/utils";

type ProjectTitleProps = {
    title: string;
    className?: string;
};

export const ProjectTitle = ({ title, className }: ProjectTitleProps) => {
    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <h3 className="font-inter text-project text-lg uppercase py-4">
                {title}
            </h3>
        </div>
    );
};
