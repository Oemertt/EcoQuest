import React from "react";

interface LogoutButtonProps {
    onClick?: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onClick }) => (
    <div className="flex px-4 py-3">
        <button
            onClick={onClick}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#e9f1ec] text-[#101914] text-sm font-bold leading-normal tracking-[0.015em]"
            type="button"
        >
            <span className="truncate">Abmelden</span>
        </button>
    </div>
);
