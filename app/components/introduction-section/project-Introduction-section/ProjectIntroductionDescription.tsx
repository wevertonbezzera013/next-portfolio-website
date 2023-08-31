import { PortableText } from "@portabletext/react";
import { cn } from "../../../lib/utils";
import { PortableTextBlock } from "sanity";

type ProjectIntroductionDescriptionProps = {
    description: PortableTextBlock;
    className?: string;
};

export const ProjectIntroductionDescription = ({
    description,
    className,
}: ProjectIntroductionDescriptionProps) => {
    return (
        <div className={cn("flex flex-col", className)}>
            <p className="font-krona text-introduction text-base">
                <PortableText value={description} />
            </p>
        </div>
    );
};
