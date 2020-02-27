import React from "react"

const abilities = ["FOR", "DEX", "CON", "INT", "SAG", "CHA"]

export const MarkLink = ({ text, link, style }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="link-mark"
    style={style}
  >
    <mark>{text}</mark>
  </a>
)

export const Test = ({ ability, mods }) => {
  if (abilities.indexOf(ability) === -1) {
    return (
      <span className="text-danger">"{ability}" is not a valid ability</span>
    )
  }

  return (
    <em className="text-check">
      Test de {ability}
      {mods}
    </em>
  )
}

export const Advantage = () => (
  <span title="Avantage" className="badge-advantage" />
)

export const Disadvantage = () => (
  <span title="Désavantage" className="badge-disadvantage" />
)
