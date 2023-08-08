import { Icon } from "../icons/icons";

type HeroSectionItemsItemProps = {
    label: string;
    icon: string;
};

export const HeroSectionItems = ({
    label,
    icon,
}: HeroSectionItemsItemProps) => {
    return (
        <div>
            <div className="flex items-center">
                <Icon
                    name={icon}
                    className="text-primary text-3xl md:text-4xl pr-2"
                />
                {label}
            </div>
        </div>
    );
};
