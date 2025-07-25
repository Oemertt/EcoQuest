import React from "react";

interface RewardProps {
    points: number | string;
}

const Reward: React.FC<RewardProps> = ({ points }) => (
    <div className="px-4">
        <h3 className="text-[#101914] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Belohnung
        </h3>
        <p className="text-[#101914] text-base font-normal leading-normal pb-3 pt-1 px-4">
            {points} Punkte
        </p>
    </div>
);

export default Reward;
