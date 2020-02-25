import React, { lazy, Suspense } from "react"
import cheat from "../data/cheat"
import "./cheat-sheet.scss"
import { Advantage, Disadvantage } from "../components/utils"

let incremental = 0
const parseDescription = text => {
  return text.split(/{@(.+?)}/i).map(item => {
    switch (item) {
      case "Advantage":
        incremental++
        return <Advantage key={incremental} />
      case "Disadvantage":
        incremental++
        return <Disadvantage key={incremental} />
      default:
        return item
    }
  })
}

const renderItems = source =>
  source.map(item => {
    const Icon = lazy(() => import(`../images/icons/${item.icon}.svg`))
    return (
      <div className="cheat-item" key={item.title}>
        <Suspense fallback={<div className="icon">?</div>}>
          <Icon className="icon" width={40} height={40} />
        </Suspense>
        <h3>{item.title}</h3>
        {item.description && <p>{parseDescription(item.description)}</p>}
        {item.bullets && (
          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i}>{parseDescription(bullet)}</li>
            ))}
          </ul>
        )}
        {item.table && (
          <table>
            <tbody>
              {item.table.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={`${i}${j}`}>{parseDescription(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    )
  })

const Card = ({ source, title, subtitle, color }) => (
  <div className="cheat-card" style={{ "--color": color }}>
    <h2>
      {title} <span>{subtitle}</span>
    </h2>
    <div className="cheat-card-content">{renderItems(source)}</div>
  </div>
)

const SimplerCheatSheet = () => (
  <div className="simpler-cheat">
    <Card
      color="maroon"
      title="Movement"
      subtitle="Limité par la vitesse"
      source={cheat.movements}
    />
    <Card
      color="black"
      title="Actions"
      subtitle="1/tour"
      source={cheat.actions}
    />
    <Card
      color="indigo"
      title="Actions bonus"
      subtitle="max 1/tour"
      source={cheat.bonus_actions}
    />
    <Card
      color="firebrick"
      title="Réactions"
      subtitle="max 1/tour"
      source={cheat.reactions}
    />
    <Card color="darkolivegreen" title="Conditions" source={cheat.conditions} />
  </div>
)
export default SimplerCheatSheet
