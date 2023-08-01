import { SectionTitle } from "../section-title/SectionTitle";
import SkillsCard from "./SkillsCard";

export const Skills = () => {
    return (
        <section className="container mt-52 md:my-10">
            <SectionTitle title="Technologies" className="text-text" />
            <SkillsCard />
        </section>
    );
};
