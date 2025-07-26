import React from "react";

interface Step {
    id: string;
    text: string;
    checked?: boolean;
}

interface TaskStepsProps {
    steps: Step[];
    onToggleStep?: (id: string) => void; // Optional, falls interaktiv
}

const TaskSteps: React.FC<TaskStepsProps> = ({ steps, onToggleStep }) => {
    return (
        <div className="px-4">
            <h3 className="text-[#101914] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Schritte
            </h3>
            {steps.map(({ id, text, checked }) => (
                <label key={id} className="flex gap-x-3 py-3 flex-row cursor-pointer">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleStep && onToggleStep(id)}
                        className="h-5 w-5 rounded border-[#d3e3da] border-2 bg-transparent text-[#94e0b2] checked:bg-[#94e0b2] checked:border-[#94e0b2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d3e3da] focus:outline-none"
                    />
                    <p className="text-[#101914] text-base font-normal leading-normal">{text}</p>
                </label>
            ))}
        </div>
    );
};

export default TaskSteps;
