import { cn } from "@/app/lib/utils";

type IntroductionDescriptionProps = {
    description: string;
    className?: string;
};

export const IntroductionDescription = ({
    description,
    className,
}: IntroductionDescriptionProps) => {
    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <p className="font-inter text-introduction text-base">
                {description}
            </p>
        </div>
    );
};
