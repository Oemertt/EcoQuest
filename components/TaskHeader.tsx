import React from "react";
import Header from "@/components/Header";

// der Bereich mit dem Zurück-Pfeil und Titel
interface TaskHeaderProps {
    title: string;
    onBack?: () => void;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ title, onBack }) => {
    return (
        <div className="flex items-center bg-[#f9fbfa] p-4 pb-2 justify-between">
            <div
                className="text-[#101914] flex size-12 shrink-0 items-center cursor-pointer"
                onClick={onBack}
                aria-label="Zurück"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                >
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
                </svg>
            </div>
            <h2 className="text-[#101914] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
                {title}
            </h2>
        </div>
    );
};

export default TaskHeader;
