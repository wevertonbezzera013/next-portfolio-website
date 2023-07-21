type BadgesItemProps = {
    label: string;
};

export const Badges = ({ label }: BadgesItemProps) => {
    return (
        <span className="text-center text-white bg-badges hover:bg-secondary ease-in-out duration-300 px-3 py-2 font-inter text-base md:text-sm font-bold">
            {label}
        </span>
    );
};
