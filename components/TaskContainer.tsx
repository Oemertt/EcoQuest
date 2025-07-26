import React, { useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskTitleAndDescription from "./TaskTitleAndDescription";
import TaskSteps from "./TaskSteps";
import Reward from "./Reward";
import TaskFooter from "./TaskFooter";

const stepsInitial = [
    { id: "1", text: "Informiere dich über die Recyclingrichtlinien in deiner Gemeinde.", checked: false },
    { id: "2", text: "Sortiere deinen Müll korrekt in die entsprechenden Behälter.", checked: false },
    { id: "3", text: "Bringe deinen Müll regelmäßig zum Recyclinghof.", checked: false },
];

const TaskContainer: React.FC = () => {
    const [steps, setSteps] = useState(stepsInitial);

    const toggleStep = (id: string) => {
        setSteps((prev) =>
            prev.map((step) => (step.id === id ? { ...step, checked: !step.checked } : step))
        );
    };

    const handleStart = () => {
        alert("Aufgabe gestartet!");
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f9fbfa] justify-between group/design-root overflow-x-hidden"
            style={{
                fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif",
                // checkbox-tick-svg as CSS variable: falls benötigt, im Tailwind.config eintragen oder inline
            }}
        >
            <TaskHeader title="Aufgabe" onBack={() => alert("Zurück")} />
            <TaskTitleAndDescription
                title="Recycling-Meister"
                description="Lerne, wie du verschiedene Materialien richtig recycelst und deinen Beitrag zum Umweltschutz leistest."
            />
            <TaskSteps steps={steps} onToggleStep={toggleStep} />
            <Reward points={100} />
            <TaskFooter onStart={handleStart} />
        </div>
    );
};

export default TaskContainer;
