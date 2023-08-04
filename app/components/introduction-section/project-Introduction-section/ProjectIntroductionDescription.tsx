import { cn } from "@/app/lib/utils";

type ProjectIntroductionDescriptionProps = {
    description: string;
    className?: string;
};

export const ProjectIntroductionDescription = ({
    description,
    className,
}: ProjectIntroductionDescriptionProps) => {
    return (
        <div className={cn("flex flex-col", className)}>
            <p className="font-inter text-introduction text-base">
                {description}
            </p>
        </div>
    );
};
