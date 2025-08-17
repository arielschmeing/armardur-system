import { Skill } from "../../../interfaces/domains/skill.interface"
import { SkillWrapper } from "./wrapper"
import { AttributeCard } from "../attribute-card"
import { BadgesWrapper } from "../badges-wrapper"
import { BoltIcon } from "../icons/bolt"
import { ElementIcon } from "../icons/element"
import { ScheduleIcon } from "../icons/schedule"
import { ShieldIcon } from "../icons/shield"
import { TargetIcon } from "../icons/target"
import { Tag } from "../tag"

interface SkillCardProps {
    skill: Skill
}

export const SkillCard = ({ skill }: SkillCardProps) => {
    return (
        <SkillWrapper title={skill.name} level={skill.level ?? 0} >
            <Tag text={skill.description} />

            <AttributeCard Icon={TargetIcon} title="DISTÂNCIA" value={skill.range} />
            <AttributeCard Icon={BoltIcon} title="CONJURAÇÃO" value={skill.castTime} />
            <AttributeCard Icon={ScheduleIcon} title="DURAÇÃO" value={skill.duration} />
            
            <BadgesWrapper Icon={ElementIcon} badges={skill.elements} title="ELEMENTAIS" />
            <BadgesWrapper Icon={ShieldIcon} badges={skill.branches} title="RAMIFICAÇÕES" />
        </SkillWrapper>
    )
}