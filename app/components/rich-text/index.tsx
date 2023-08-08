import { RichText as CMSRitchText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof CMSRitchText>;

export const RichText = ({ ...props }: RichTextProps) => {
    return (
        <CMSRitchText
            {...props}
            renderers={{
                bold: ({ children }) => (
                    <b className="text-primary">{children}</b>
                ),
            }}
        />
    );
};
