import React from "react";

interface TaskTitleAndDescriptionProps {
    title: string;
    description: string;
}

const TaskTitleAndDescription: React.FC<TaskTitleAndDescriptionProps> = ({
                                                                             title,
                                                                             description,
                                                                         }) => (
    <div>
        <h1 className="text-[#101914] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
            {title}
        </h1>
        <p className="text-[#101914] text-base font-normal leading-normal pb-3 pt-1 px-4">
            {description}
        </p>
    </div>
);

export default TaskTitleAndDescription;
