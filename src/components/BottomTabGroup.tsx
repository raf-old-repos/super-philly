import React from 'react'
import type { BottomTab } from '../types/TabRouter.type'



type BottomTabGroupProps = {
    tabs: BottomTab[],
    activeTab: number,
    onChange: (tab: number) => void,
}

export const BottomTabGroup: React.FC<BottomTabGroupProps> = ({ tabs, activeTab, onChange }) => {
    return (
        <div className="bottom-tab-group">
            {tabs.map((tab, index) => (
                <BottomTabButton
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    isActive={index === activeTab}
                    onClick={() => onChange(index)}
                />
            ))}
        </div>
    )
}

// Button
type BottomTabButtonProps = {
    label: string,
    icon: React.ReactNode,
    isActive: boolean,
    onClick: () => void,
}

const BottomTabButton: React.FC<BottomTabButtonProps> = ({ label, icon, isActive, onClick }) => {
    return (
        <button className={`bottom-tab-button${isActive ? '-active' : ''}`} onClick={onClick}>
            <div className="bottom-tab-button-icon">{icon}</div>
            <div className="bottom-tab-button-label">{label}</div>
        </button>
    )
}

