import * as FaIcons from "react-icons/fa";
import type { IconBaseProps } from "react-icons/lib";
import * as MdIcons from "react-icons/md";
import * as IconName from "react-icons/hi";
import * as TbIcons from "react-icons/tb";
import * as BoxIcons from "react-icons/bi";

export interface IconProps extends IconBaseProps {
    name: string;
}

// Todo: Add more icon types as needed
export const Icon = ({ name, ...rest }: IconProps) => {
    if (!name) {
        return null;
    }
    const lib = name
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .split(" ")[0]
        .toLocaleLowerCase();

    if (lib === "fa") {
        // @ts-ignore
        const ElementIcon = FaIcons[name];

        return <ElementIcon {...rest} />;
    }

    if (lib === "md") {
        // @ts-ignore
        const ElementIcon = MdIcons[name];

        return <ElementIcon {...rest} />;
    }

    if (lib === "hi") {
        // @ts-ignore
        const ElementIcon = IconName[name];

        return <ElementIcon {...rest} />;
    }
    if (lib === "tb") {
        // @ts-ignore
        const ElementIcon = TbIcons[name];

        return <ElementIcon {...rest} />;
    }
    if (lib === "bi") {
        // @ts-ignore
        const ElementIcon = BoxIcons[name];

        return <ElementIcon {...rest} />;
    }

    return null;
};
