import { SectionTitle } from "../section-title/SectionTitle";
import SkillsCard from "./SkillsCard";

export const Skills = () => {
    return (
        <section className="container my-44 md:my-10">
            <SectionTitle title="Technologies" />
            <SkillsCard />
        </section>
    );
};
