import { SectionTitle } from "../section-title/SectionTitle";
import { IntroductionDescription } from "./IntroductionDescription";

const INTRODUCTION_DESCRIPTION_PROP = [
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    },
];

export const IntroductionSection = () => {
    return (
        <section className="items-center text-white py-52 flex flex-col bg-gradient-to-t from-text to-primary">
            <div className="relative flex flex-col items-center text-center">
                {/* Centered blue square */}
                <div className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 w-[203px] h-[340px] lg:w-[430px] lg:h-[406px] border-[1px] lg:border-[3px] border-newBlue opacity-50"></div>
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[203px] h-[340px] lg:w-[430px] lg:h-[406px] border-[1px] lg:border-[3px] border-newBlue opacity-50"></div>
                <div className="relative">
                    <div className="items-center text-center flex flex-col container gap-8">
                        {/* Text over the square */}
                        <SectionTitle title="Projects" />
                        {INTRODUCTION_DESCRIPTION_PROP.map((item) => (
                            <IntroductionDescription
                                description={item.description}
                                key={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
