import React from "react"
import "./dashboardCard.css"
import { BlockedSites } from "../../types"

interface cardProps {
  website: BlockedSites
}

function DashboardCard({ website }: cardProps) {
  return (
    <div
      className="button-hover-effect blocked-card-outline blocked-card-inside"
      key={website.id}
    >
      <img
        className="blocked-site-img"
        src={website.icon}
        alt={`Logo for ${website.url}`}
      />
      <div className="blocked-site-text-container">
        <span className="blocked-site-url">{website.url}</span>
        <span className="blocked-site-under-text">Blocked 12k times</span>
      </div>
    </div>
  )
}

export default DashboardCard
