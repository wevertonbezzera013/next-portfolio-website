import React from "react";
import { PortableTextBlock, PortableTextChild, PortableTextSpan } from "sanity";

type RichTextProps = {
    content: PortableTextBlock[];
};

const RichText: React.FC<RichTextProps> = ({ content }) => {
    return (
        <div>
            {content.map((block, index) => {
                if (block._type === "block" && block.children) {
                    const children = block.children as PortableTextChild[];

                    // Filter out non-'span' children and extract text
                    const text = children
                        .filter((child) => child._type === "span")
                        .map((span: PortableTextChild) => {
                            if ("text" in span) {
                                return span.text;
                            }
                            return "";
                        })
                        .join(" ");

                    return (
                        <b key={index} className="text-primary">
                            {text}
                        </b>
                    );
                }

                return null; // Handle other block types if needed
            })}
        </div>
    );
};

export default RichText;
