import { BlockContent } from "@sanity/block-content-to-react";
import { ComponentProps } from "react";
import { PortableTextBlock } from "sanity";

type RichTextProps = {
    content: PortableTextBlock[];
};

const RichText: React.FC<RichTextProps> = ({ content }) => {
    return (
        <BlockContent
            blocks={content}
            serializers={{
                types: {
                    // Add your custom serializers here if needed
                },
                marks: {
                    strong: ({ children }: { children: React.ReactNode }) => (
                        <b className="text-primary">{children}</b>
                    ),
                    // Add more mark serializers if needed
                },
            }}
        />
    );
};

export default RichText;
