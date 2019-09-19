import React from "react";

import "./cheat-sheet.scss";
import { Advantage, Disadvantage, MarkLink, Test } from "../components/utils";


const PlayerCheatSheet = () => {
  const money_table = [
    {
      coin_name: 'Cuivre (pc)',
      coin_value: '0.01 po',
      lifestyle: 'Mendiant',
      cost: '—',
    },
    {
      coin_name: 'Argent (pa)',
      coin_value: '0.1 po',
      lifestyle: 'Misérable',
      cost: '1 pa',
    },
    {
      coin_name: 'Électrum (pe)',
      coin_value: '',
      lifestyle: 'Pauvre',
      cost: '2 pa',
    },
    {
      coin_name: 'Or (po)',
      coin_value: '1 po',
      lifestyle: 'Modeste',
      cost: '1 po',
    },
    {
      coin_name: 'Platine (pp)',
      coin_value: '10 po',
      lifestyle: 'Confortable',
      cost: '2 po',
    },
    {
      coin_name: '',
      coin_value: '',
      lifestyle: 'Riche',
      cost: '4 po',
    },
    {
      coin_name: '',
      coin_value: '',
      lifestyle: 'Aristocratique',
      cost: '10+ po',
    },
  ];

  return (
    <div>
      <div className="grid">
        <div>
          <div id="d20">
            <div className="text-center">
              <img style={{maxWidth: 100}} src={require("./svg/dices.svg")} alt="" />
            </div>
            <h2 className="title">d20</h2>
            <p className="border-bottom-lg">On détermine toujours un succès ou un échec par un jet de dé à 20 faces. Des <em>modificateurs</em> (positifs ou négatifs) peuvent s'appliquer.</p>
            <p className="border-bottom"><strong>Jet d'initiative</strong> Au début d'un combat, les personnages détermine leur ordre de combat avec un d20. <Test ability="DEX" />. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 189" /></p>
            <p className="border-bottom"><strong>Attaque</strong> Les attaques de corps à corps, à distance et de sort se basent sur des jets de d20. <em>Voir section "Attaque"</em>.</p>
            <p className="border-bottom"><strong>Tests de caractéristique</strong> Le MD peut demander à un joueur de faire un jet de d20 pour déterminer si son personnage peut faire une action. Ajouter les <em>mod. de caractéristique</em> et <em>mod. de maîtrise</em> de circonstance. <MarkLink link="https://www.aidedd.org/regles/caracteristiques/" text="PHB 174"/></p>
            <p><strong>Jets de sauvegarde</strong> Dans une situation dangereuse, le MD peut demander au joueur d'essayer d'éviter les effets avec un jet de d20. Ajouter les <em>modificateurs</em> de circonstance. <MarkLink link="https://www.aidedd.org/regles/caracteristiques/" text="PHB 179"/></p>

            <h3 className="subtitle"><Advantage/> Avantage & Désavantage <span title="Désavantage" className="badge-disadvantage"/></h3>
            <p>Les circonstances, les capacités ou les décisions du MD peuvent donner un <span className="text-nowrap"><em>Avantage</em> <Advantage/></span> ou un <span className="text-nowrap"><em>Désavantage</em> <Disadvantage/></span>. Dans ce cas, lancer <em>deux</em> d20 et utiliser le meilleur ou moins bon résultat. <MarkLink text="PHB 173" link="https://www.aidedd.org/regles/caracteristiques/"/></p>

            <h3 className="subtitle">Inspiration</h3>
            <p>Décernée par le MD, l'<em>Inspiration</em> permet au joueur d'ajouter un avantage sur un d20 de son choix, y compris sur celui d'un autre joueur.</p>

            <h3 className="subtitle">Lancer les dés & Modifier</h3>
            <p>Le résultat sur le dé est le résultat "naturel" sur lequel les <em>modificateurs</em> sont appliqués. Toujours indiquer le résultat modifié au MD ("16 plus 3, 19"). Sur un 20 ou un 1 naturel, annoncer une "réussite critique" ou "échec critique". <MarkLink text="PHB 7"/> </p>
          </div>
          <div id="combat-rounds">
            <h2 className="title"><small>Rounds de combat</small></h2>
            <p className="border-bottom-lg">Les batailles et autres activités qui dépendent du temps se déroulent en <em>Rounds</em>. Un <em>Round</em> représente 6 secondes de jeu. Durant un <em>Round</em>, chaque combattant a un <em>Tour</em> pour se déplacer et agir. Tous les <em>Tours</em> d'un <em>Round</em> se passent simultanément dans le jeu, mais sont résolus par <em>Ordre d'Initiative</em> des joueurs. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 189" /></p>
            <p className="border-bottom"><strong>Surprise</strong> Les combattants surpris ne peuvent pas agir durant le premier tour du combat. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 189" /></p>
            <p><strong>Initiative</strong> Les combattants font un <Test ability="DEX" /> pour déterminer l'ordre des tours d'un round. Ajouter les éventuels <em>modificateurs</em>. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 189" /></p>

            <div className="card">
              <h3 className="subtitle">Un tour commence</h3>
              <div style={{paddingRight: 20}}>
                <p className="border-bottom"><strong>Tours</strong> Tous les combattants jouent leur tour dans l'ordre de l'initiative. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 189"/> </p>
                <p><strong>Répéter</strong> Répéter les rounds jusqu'à la victiore, la défaite, des pourparlers ou une retraite.</p>
              </div>

              <svg style={{position: 'absolute', top: '55%', left: 'calc(100% - 35px)', transform: 'translateY(-50%)', height: '70%'}} width="40" viewBox="-4 -4 26 36" xmlns="http://www.w3.org/2000/svg"><path d="M19.436 18.187c-1.416 7.432-8.615 12.326-16.048 10.91l1.015-5.328c4.495.857 8.85-2.102 9.706-6.597.828-4.346-1.911-8.56-6.156-9.608a7.6 7.6 0 0 0-.443-.098l-.281 1.473-6.38-5.503L8.807.665l-.281 1.473c.149.029.299.06.444.094 7.185 1.613 11.855 8.67 10.467 15.955" fill="var(--color-gray)" strokeWidth="1" stroke="var(--color-dark-gray)"/></svg>
            </div>
          </div>
          <div id="concentration">
            <h2 className="title">Concentration</h2>
            <p>Certains sorts demandent de la <em>Concentration</em> pour maintenir leurs effets. Si l'incantateur prend des <em>Dégâts</em> pendant sa concentration, il doit faire un <em>Jet de sauvegarde</em> (<em>DD 10</em> ou la moitié des dégâts, prendre le plus haut) pour maintenir le sort. <MarkLink text="PHB 203"/></p>
          </div>
        </div>
        <div>
          <div className="attack">
            <h2 className="title">Attaque</h2>
            <p className="border-bottom"><strong>Cible</strong> Identifier la cible.</p>
            <p className="border-bottom"><strong>Attaque</strong> Jeter un d20. Dans un jet d'<em>Attaque</em>, 1 est toujours un échec, 20 est toujours une réussite.</p>
            <p className="border-bottom"><strong>Modifier</strong> Ajouter les <em>modificateurs</em>. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 194"/></p>
            <p className="border-bottom"><strong>Classe d'armure (CA)</strong> Si le résultat modifié ≥ <em>CA</em> de la cible, l'attaque touche la cible. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 194"/></p>
            <p className="border-bottom"><strong>Dégâts</strong> Lancer le(s) <em>Dé(s)</em> de dégâts et ajouter les mod. Les points de vie de la cible sont réduits en prenant en compte les résistances et vulnérabilités. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 196"/></p>
            <p className="border-bottom"><strong>Attaque de sort</strong> Beaucoup de sorts comptent comme des attaques. Lancer un d20 + <em>Mod. de caractéristique d'incantation</em> + <em>Bonus de maîtrise</em> contre <em>CA</em> de la cible. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 205"/></p>
            <p>
              <strong>Attaque à distance</strong> Ex: <em>Arc Long (45/180)</em> <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 149/194"/><br/>
              ➛ 0-1.5m <em>Faire un jet d'attaque <Disadvantage/></em>.<br/>
              ➛ 1.6-45m <em>Faire un jet d'attaque normal</em>.<br/>
              ➛ 46-180m <em>Faire un jet d'attaque <Disadvantage/></em>.<br/>
              ➛ 181m+ <em>Cible hors de portée</em>.
            </p>

            <h3 className="subtitle">Abri</h3>
            <p className="border-bottom"><strong>Abri partiel</strong> Donne <em>+2 CA</em> et <em>+2 aux JS de DEX</em>.</p>
            <p className="border-bottom"><strong>Abri important</strong> Donne <em>+5 CA</em> et <em>+5 aux JS de DEX</em>.</p>
            <p className="border-bottom"><strong>Abri total</strong> Ne peut pas être ciblé, mais peut être touché par un <em>Effet de zone</em>. <MarkLink link="https://www.aidedd.org/regles/combat/" text="PHB 196"/></p>

            <h3 className="subtitle">Armes improvisées</h3>
            <p>1d4 dégâts, portée 6/18. Si une arme improvisée ressemble à une arme existante, le MD peut la considérer comme telle, y compris pour les bonus.</p>
          </div>
          <div id="damage-healing">
            <h2 className="title"><small>Dégâts & Guérison</small></h2>
            <p className="border-bottom"><strong>Points de vie</strong> représentent la menace relative de la mort imminente ou de la neutralisation d'une créature. <MarkLink text="PHB 196"/> À zéro <em>PV</em>, un personnage perd conscience. <MarkLink text="PHB 197"/> </p>
            <p className="border-bottom"><strong>Dé de vie</strong> représente la robustesse et la capacité quotidienne de récupération de vie. En prenant un <em>Court repos</em>, des <em>Dés de vie</em> peuvent être dépensés pour regagner des <em>PV</em> <MarkLink text="PHB 12"/> </p>
            <p className="border-bottom"><strong>Classe d'armure</strong> indique la difficulté à toucher une créature selon son armure et ses capacités à esquiver, parer et d'autres facteurs. <MarkLink text="PHB 145"/> </p>
            <p className="border-bottom"><strong>Jets de dégâts</strong> déterminent combien de dégâts inflige une attaque. Les attaques plus puissantes utilisent des dés plus gros. Une <em>Réussite critique (20 naturel)</em> double les dés à lancer.<MarkLink text="PHB 196"/> </p>
            <p className="border-bottom"><strong>Soins</strong> Le nombre de <em>Points de vie</em> récupérés lors de repos, sorts, potions. <MarkLink text="PHB 197"/></p>
            <p className="border-bottom"><strong>Court repos</strong> Une heure (minimum) durant laquelle les personnages peuvent se soigner en jetant les <em>Dés de vie</em> qu'ils ont à disposition. <MarkLink text="PHB 186"/></p>
            <p className="border-bottom"><strong>Long repos</strong> Une fois par jour, un repos de 8h. Tous les <em>Points de vie</em> sont récupérés et ½ du nombre de <em>Dés de vie</em> max. est restaurée (min. 1). <MarkLink text="PHB 186"/></p>
            <p className="border-bottom"><strong>Mort instantanée</strong> Si un coup réduit les points de vie à -1 &times; <em>Points de vie</em> maximum, le personnage meurt instantanément. <MarkLink text="PHB 197"/></p>
            <p className="border-bottom"><strong>Jets de sauvegarde contre la mort</strong> Quand un personnage commence son tour avec 0 PV, il fait un jet de sauvegarde non modifié <em>DD 10</em>. 3 échecs font mourir le personnage. 3 succès stabilisent le personnage à 0 PV. <MarkLink text="PHB 197"/></p>
            <p className="border-bottom"><strong>Points de vie temporaires</strong> sont accordés par certaines capacités et certains sorts. Ils sont toujours perdus en premier. <MarkLink text="PHB 198"/></p>
            <p><strong>Assommer</strong> Lorsqu'un attaquant au corps à corps réduit sa cible à 0 PV, il peut décider de la rendre <em>Inconsciente</em> (stabilisée) au lieu de la tuer. <MarkLink text="PHB 198"/></p>
          </div>
        </div>
        <div>
          <div id="combat">
            <div className="text-center">
              <img style={{maxWidth: 100}} src={require("./svg/helmet.svg")} alt=""/>
            </div>
            <h2 className="title"><small>Actions en combat</small></h2>
            <ul className="border-bottom-lg">
              <li><strong>Se déplacer</strong> de sa <em>Vitesse</em> en 1 ou plusieurs fois.</li>
              <li>1 <strong>Action</strong> de combat à choix.</li>
              <li>1 <strong>Action gratuite</strong> mineure. <small>Ex: parler, ouvrir une porte, dégainer.</small> <MarkLink text="PHB 190"/></li>
              <li>1 <strong>Action bonus</strong>, si disponible.</li>
              <li>1 <strong>Réaction</strong> déclenchée à un autre tour.</li>
            </ul>
            <p><strong>Se déplacer</strong> d'une distance de sa <em>Vitesse</em> au maximum. <MarkLink text="PHB 181"/></p>
            <p className="bg-gray d-flex" style={{alignItems: 'center'}}>
              <span style={{padding: '0 1rem', fontWeight: 900, fontSize: '1.5rem', lineHeight: 1}}>+</span>
              <span><em>Une des actions de combat suivantes:</em></span>
            </p>
            <p className="border-bottom"><strong>Attaque</strong> une ou plusieurs fois, selon les capacités. (Corps à corps, à distance ou sort d'attaque). <MarkLink text="PHP 192"/></p>
            <p className="border-bottom"><strong>Lancer un sort</strong> Temps d'incantation d'1 round max. <MarkLink text="PHP 201"/></p>
            <p className="border-bottom"><strong>Se précipiter</strong> Doubler sa vitesse pour le tour. <MarkLink text="PHP 192"/></p>
            <p className="border-bottom"><strong>Désarmer</strong> Jet d'attaque vs. FOR ou DEX. <Disadvantage/> si la cible tient l'objet à 2 mains. <Advantage/> pour la cible si elle est plus grande. <Disadvantage/> si elle est plus petite. <MarkLink text="DMG 271"/></p>
            <p className="border-bottom"><strong>Se désengager</strong> Se déplacer sans provoquer d'<em>Attaque d'opportunité</em>. <MarkLink text="PHP 192"/></p>
            <p className="border-bottom"><strong>Esquiver</strong> les attaques pour le round. <Disadvantage/> pour les attaquants. <Advantage/> pour les jets de de DEX. <MarkLink text="PHP 192"/></p>
            <p className="border-bottom"><strong>Premiers soins</strong> Stabiliser une créature qui a 0 PV. <MarkLink text="PHP 197"/></p>
            <p className="border-bottom"><strong>Empoigner</strong> Faire une action <em>Attaque</em> pour empoigner une créature. <em>Test FOR (Athléthisme)</em> contre <em>FOR (Athléthisme)</em> ou <em>DEX (Acrobaties)</em>. <strong>Se libérer:</strong> 1 action, Test <em>FOR (Athléthisme)</em> ou <em>DEX (Acrobaties)</em> contre <em>FOR (Athléthisme)</em> <strong>Déplacer:</strong> <em>Vitesse</em>/2. <MarkLink text="PHP 197"/></p>
            <p className="border-bottom"><strong>Aider</strong> Un allié adjacent obtient <Advantage/> pour une action/attaque. <MarkLink text="PHP 192"/></p>
            <p className="border-bottom"><strong>Se cacher</strong> Test <em>DEX (Discrétion)</em>. <MarkLink text="PHP 177"/></p>
            <p className="border-bottom"><strong>Se tenir prêt</strong> à faire une action spécifique en <em>Réaction</em> à un événement déclencheur. <MarkLink text="PHP 193"/></p>
            <p className="border-bottom"><strong>Chercher</strong> un objet. Peut demander un Test <em>SAG (Perception)</em> ou d'<em>Investigation</em>. <MarkLink text="PHP 192"/></p>
            <p className="border-bottom"><strong>Bousculer</strong> Utiliser une <em>Attaque</em> pour repousser une créature de 1.5m ou la faire tomber <em>à terre</em>. <MarkLink text="PHP 195"/></p>
            <p className="border-bottom"><strong>Utiliser un objet</strong> Interagir avec un objet. Peut demander un jet de dé. <MarkLink text="PHP 193"/></p>
            <p><strong>Options d'action</strong> <em>Monter sur une créature plus grande que soi</em>, <em>Marquer une cible</em>, <em>Passer en force</em>, <em>Repousser de côté</em>, <em>Roulé-boulé</em>. <MarkLink text="DMG 271"/></p>
            <p className="bg-gray d-flex" style={{alignItems: 'center'}}>
              <span style={{padding: '0 1rem', fontWeight: 900, fontSize: '1.5rem', lineHeight: 1}}>+</span>
              <span><em>Autres actions possibles dans certains cas:</em></span>
            </p>
            <p className="border-bottom"><strong>Se déplacer</strong> d'une distance additionnelle (s'il reste de la <em>Vitesse</em>). <MarkLink text="PHB 181"/> </p>
            <p className="border-bottom"><strong>Action Bonus</strong> si disponible. <MarkLink text="PHB 181"/> </p>
            <p className="border-bottom-lg"><strong>Réaction</strong>, si disponible, faite instantanément, même en dehors du tour. Déclenchée par un événement. <MarkLink text="PHB 190"/> </p>
            <p><strong>Se battre avec 2 armes</strong> Avec des armes <em>légères</em> dans chaque main, utiliser l'<em>Action Bonus</em> pour attaquer avec la 2e arme. Aucun mod. n'est appliqué sur la 2e arme. <MarkLink text="PHB 195"/> </p>
          </div>
        </div>
        <div id="damage-types" className="cols border-top-lg grid-span">
          <h2 className="title"><small>Types de dégâts</small></h2>
          <p><strong>Acide</strong> Corrosif ou dissolvant.</p>
          <p><strong>Contondant</strong> Force brute.</p>
          <p><strong>Feu</strong> Ça brûle.</p>
          <p><strong>Force</strong> Énergie magique pure.</p>
          <p><strong>Foudre</strong> Choc électrique.</p>
          <p><strong>Froid</strong> Ça chill.</p>
          <p><strong>Nécrotique</strong> Flétrissant la matière et l'âme.</p>
          <p><strong>Perforant</strong> Ça pique.</p>
          <p><strong>Poison</strong> Toxines et venins.</p>
          <p><strong>Psychique</strong> Mental.</p>
          <p><strong>Radiant</strong> Lumière divine.</p>
          <p><strong>Tonnerre</strong> Impact commotionnant.</p>
          <p><strong>Tranchant</strong> Ça coupe.</p>
          <p><MarkLink text="PHB 196"/></p>
          <div className="card card-top">
            <p><strong>Immunité</strong> 0 dégâts.</p>
            <p><strong>Résistance</strong> ½ dégâts.</p>
            <p><strong>Vulnérabilité</strong> 2 &times; dégâts.</p>
            <p><MarkLink text="PHB 196"/></p>
          </div>
        </div>
      </div>
      <div className="grid">
        <div>
          <div id="glossary">
            <h2 className="title">Glossaire</h2>
            <p className="border-bottom"><strong>Attaque à distance</strong> Frapper un ennemi à distance avec une arme ou un sort.</p>
            <p className="border-bottom"><strong>Attaque au corps à corps</strong> Frapper un ennemi à portée, générallement dans les 1.5m.</p>
            <p className="border-bottom"><strong>Attaque de sort</strong> Utiliser la magie pour occasionner des dégâts à un ennemi adjacent ou à portée.</p>
            <p className="border-bottom"><strong>Avantage</strong> <Advantage/> Prendre le meilleur résultat de 2d20. </p>
            <p className="border-bottom"><strong>CA</strong> <em>Classe d'armure</em>. </p>
            <p className="border-bottom"><strong>Critique</strong> Échec (1) ou Réussite (20) sur un jet d'attaque.</p>
            <p className="border-bottom"><strong>DD</strong> <em>Degré de difficulté</em>. Le nombre qu'il faut obtenir sur un jet de d20 pour réussir un test.</p>
            <p className="border-bottom"><strong>Dégât</strong> Réduction des <em>Points de vie</em>.</p>
            <p className="border-bottom"><strong>Désavantage</strong> <Disadvantage/> Prendre le moins bon résultat de 2d20.</p>
            <p className="border-bottom"><strong>DMG</strong> <em>Dungeon Master's Guide</em>.</p>
            <p className="border-bottom"><strong>Effet de zone</strong> Le volume ciblé par un sort.</p>
            <p className="border-bottom"><strong>FOR DEX CON INT SAG CHA</strong> <em>Modificateurs de caractéristique</em>. Peut être ajouté aux jets de d20 pour effectuer des <em>Tests de caractéristique</em>.</p>
            <p className="border-bottom"><strong>Initiative order</strong> L'ordre dans lequel les tours personnages sont pris durant un <em>round</em>.</p>
            <p className="border-bottom"><strong>Jet d'initiative</strong> Un jet de d20+DEX qui détermine l'ordre de combat.</p>
            <p className="border-bottom"><strong>Jet de sauvegarde (JS)</strong> Jet de d20 pour éviter un dommage non prévu ou certaines attaques magiques.</p>
            <p className="border-bottom"><strong>MD/MJ</strong> <em>Maître de Donjon</em>/<em>Maître de jeu</em>.</p>
            <p className="border-bottom"><strong>MM</strong> <em>Monster Manual</em>.</p>
            <p className="border-bottom"><strong>Maîtrise</strong> Bonus additionnel sur une arme ou une compétence grâce à de l'entraînement ou à l'experience.</p>
            <p className="border-bottom"><strong>Modificateur</strong> Nombre ajouté aux jets de d20 pour les compétences, les maîtrises ou les pénalités.</p>
            <p className="border-bottom"><strong>PHB</strong> <em>Player's Handbook</em>.</p>
            <p className="border-bottom"><strong>PNJ</strong> <em>Personnage non-joueur</em>.</p>
            <p className="border-bottom"><strong>PV</strong> <em>Points de vie</em>.</p>
            <p className="border-bottom"><strong>Round</strong> 6 secondes de temps de jeu. Se découpe en <em>Tours</em> pour tous les combattants.</p>
            <p className="border-bottom"><strong>Soins</strong> Restaurer des <em>Points de vie</em>.</p>
            <p className="border-bottom"><strong>Test de caractéristique</strong> (aussi <em>Test de compétence</em>) jet de d20 pour tenter de réaliser une action qui présente un risque d'échec. </p>
            <p className="border-bottom"><strong>Tour</strong> L'opportunité pour une créatuer de se déplacer et d'agir durant un <em>Round</em>.</p>
            <p className="border-bottom"><strong>Vitesse</strong> Vitesse de marche. La distance en mètres qu'une créature peut parcourir en un <em>Tour</em>.</p>
          </div>
          <div id="money">
            <div className="text-center">
              <img style={{maxWidth: 100}} src={require("./svg/coins.svg")} alt="" />
            </div>
            <h2 className="title"><small>Argent & dépenses</small></h2>
            <table className="border-bottom-lg">
              <thead className="border-bottom">
              <tr>
                <th colSpan="2" className="text-center border-right-lg">Pièces</th>
                <th>Train de vie</th>
                <th className="text-center">Coût/jour</th>
              </tr>
              </thead>
              <tbody>
              {money_table.map((item, key) => (
                <tr key={key}>
                  <td><strong><small>{item.coin_name}</small></strong></td>
                  <td className="text-right border-right-lg">{item.coin_value}</td>
                  <td>{item.lifestyle}</td>
                  <td className="text-right">{item.cost}</td>
                </tr>
              ))}
              </tbody>
            </table>
            <p>Un personnage a besoin de 500g de nourriture par jour et de 3.5l d'eau par jour sans quoi il subit les effets de l'<em>Épuisement</em>. <MarkLink text="PHB 185"/></p>
          </div>
        </div>
        <div>
          <div id="conditions">
            <div className="text-center">
              <img style={{maxWidth: 180}} src={require("./svg/potion.svg")} alt="" />
            </div>
            <h2 className="title">États</h2>
            <p className="border-bottom-lg">Les attaques de sorts, de pièges ou de monstres peuvent avoir un effet en plus des simples dégâts. Ces effets durables sont appelés les <em>États</em>. <MarkLink text="PHB 290"/></p>

            <p className="border-bottom"><strong>À terre</strong> Ne peut que ramper à <em>Vitesse</em>/2. Dépense ½&nbsp;<em>Vitesse</em> pour se relever. <Disadvantage/> pour jets d'attaque. Attaquants à 1.5m <Advantage/>, les autres <Disadvantage/>.</p>
            <p className="border-bottom"><strong>Assourdi</strong> N'entend plus rien. Échoue tous les tests SAG (Perception) auditive.</p>
            <p className="border-bottom"><strong>Aveuglé</strong> Ne voit plus rien. <Disadvantage/> pour jets d'attaque. Attaquants <Advantage/>.</p>
            <p className="border-bottom"><strong>Charmé</strong> Ne peut pas attaquer/viser le charmeur. Le charmeur gagne <Advantage/> pour toute interaction avec.</p>
            <p className="border-bottom"><strong>Empoigné</strong> Vitesse réduite à 0. <MarkLink text="PHB 195"/> </p>
            <p className="border-bottom"><strong>Empoisonné</strong> <Disadvantage/> pour jets d'attaque et de capacités.</p>
            <p className="border-bottom"><strong>Entravé</strong> Vitesse réduite à 0. <Disadvantage/> pour jets d'attaque. Attaquants <Advantage/>.</p>
            <p className="border-bottom"><strong>Étourdi</strong> Est <em>Neutralisé</em>, ne peut pas bouger, pas balbutie. Échoue JS de FOR et DEX. Attaquants <Advantage/>.</p>
            <p><strong>Inconscient</strong> Est <em>Neutralisé</em>, lâche tout et tombe <em>À terre</em>. Échoue JS de FOR et DEX. Attaquants <Advantage/>. Attaquants à 1.5m font des attaques critiques auto.</p>
            <h3 className="subtitle">Autres conditions</h3>
            <p className="border-bottom"><strong>Suffocation</strong> Une créature peut retenir son souffle pendant 1+CON minutes (30 sec min). Une fois à bout de souffle, elle survit pendant 1+CON rounds avant de tomber à 0&nbsp;PV. <MarkLink text="PHB 183"/></p>
            <p>
              <strong>Épuisement</strong> 6 niveaux cumulatifs:<br/>
              <strong>1</strong> <Disadvantage/> sur tous les tests de caractéristique.<br/>
              <strong>2</strong> Vitesse réduite de moitié.<br/>
              <strong>3</strong> <Disadvantage/> pour jets d'attaque et JS.<br/>
              <strong>4</strong> Maximum de points de vie réduit de moitié.<br/>
              <strong>5</strong> Vitesse réduite à 0.<br/>
              <strong>6</strong> Mort.
              <MarkLink style={{float: 'right'}} text="PHB 291"/></p>
          </div>
          <div id="spell-components">
            <h2 className="title"><small>Composantes de sorts</small></h2>
            <p className="border-bottom"><strong>(V) Verbales</strong> L'incantateur doit pouvoir parler.</p>
            <p className="border-bottom"><strong>(S) Somatiques</strong> L'incantateur doit pouvoir bouger une main.</p>
            <p className="border-bottom"><strong>(M) Matérielles</strong> L'incantateur doit posséder les matériaux, ou utiliser un <em>Focaliseur</em> si les matériaux n'ont pas de montant indiqué et ne sont pas consommées lors de l'incantation. <MarkLink text="PHB 203"/> </p>
          </div>
        </div>
        <div>
          <div id="ability-scores">
            <h2 className="title"><small>Caractéristiques</small></h2>
            <p className="border-bottom-lg">Ces points représentent vos caractéristiques de base – 10 est un score "moyen". Ils sont rarement utilisés directement mais déterminent des <em>Modificateurs</em> (+ ou -) que vous appliquez à vos jets. Les abbréviations se réfèrent à ces <em>Modificateurs</em>. <MarkLink text="PHB 173"/> </p>
            <p className="border-bottom d-flex justify-content-center">
              <span className="big">FOR</span>
              <span><strong>Force</strong> Puissance physique, muscle, force brute. </span>
            </p>
            <p className="border-bottom d-flex justify-content-center">
              <span className="big">DEX</span>
              <span><strong>Dextérité</strong> Agilité, réflexes, équilibre. </span>
            </p>
            <p className="border-bottom d-flex" style={{alignItems: 'center'}}>
              <span className="big">CON</span>
              <span><strong>Constitution</strong> Santé physiquem ebdurance et force vitale. </span>
            </p>
            <p className="border-bottom d-flex" style={{alignItems: 'center'}}>
              <span className="big">INT</span>
              <span><strong>Intelligence</strong> Sagacité, mémoire et capacité de raisonnement. </span>
            </p>
            <p className="border-bottom d-flex" style={{alignItems: 'center'}}>
              <span className="big">SAG</span>
              <span><strong>Sagesse</strong> Sensibilité au monde qui vous entoure, perspicacité, intuition. </span>
            </p>
            <p className="d-flex" style={{alignItems: 'center'}}>
              <span className="big">CHA</span>
              <span><strong>Charisme</strong> Capacité à interagir avec autrui, assurance, éloquence, charme et autorité. </span>
            </p>
          </div>
          <div id="movement">
            <h2 className="title"><small>Mouvement & Force</small></h2>
            <p className="border-bottom"><strong>Vitesse</strong> Distance parcourable en marchant en mètre par tour. <em>Se précipiter</em> pour se déplacer de 2&times;<em>Vitesse</em> (utilise une action). <MarkLink text="PHB 181"/> </p>
            <p className="border-bottom"><strong>Saut en longueur</strong> Élan: Valeur <em>Force</em>/3.  Sur place: la moitié de cette valeur. <MarkLink text="PHB 182"/></p>
            <p className="border-bottom"><strong>Saut en hauteur</strong> Élan (3m): Valeur 1+(FOR/3).  Sur place: la moitié de cette valeur. <MarkLink text="PHB 182"/></p>
            <p className="border-bottom"><strong>Allonge (saut)</strong> 1.5&times;Taille <MarkLink text="PHB 182"/></p>
            <p className="border-bottom"><strong>Porter</strong> <em>Force</em>&times;7.5 kg <MarkLink text="PHB 176"/></p>
            <p className="border-bottom"><strong>Pousser/tirer/soulever</strong> <em>Force</em>&times;15 kg <MarkLink text="PHB 176"/></p>
            <h3 className="subtitle">Dangers lors de mouvement</h3>
            <p className="border-bottom"><strong>Attaques d'opportunité</strong> Les créatures peuvent bouger librement mais lorsqu'elle sort de la zone d'allonge d'une autre créature, une attaque d'opportunité peut arriver. <MarkLink text="PHB 194"/></p>
            <p className="border-bottom"><strong>Chute</strong> 1d6 dégâts contondants pour chaque tranche de 3 mètres de chute. <MarkLink text="PHB 183"/></p>
            <p className="border-bottom"><strong>Terrain difficile</strong> <em>Vitesse</em>/2. <MarkLink text="PHB 182"/></p>
            <p><strong>Se faufiler</strong> Se déplacer dans un espace réduit (1 catégorie de taille en dessous). <em>Vitesse</em>/2. <MarkLink text="PHB 192"/></p>
          </div>
          <div id="vision">
            <div className="text-center">
              <img style={{maxWidth: 180}} src={require("./svg/mask.svg")} alt="" />
            </div>
            <h2 className="title"><small>Vision & lumière</small></h2>
            <p className="border-bottom"><strong>Lumière vive</strong> Visibilité normale.</p>
            <p className="border-bottom"><strong>Lumière faible</strong> Visibilité réduite. (Pénombre, brouillard léger, aube, crépuscule). Test de SAG (Perception) <Disadvantage/>.</p>
            <p className="border-bottom-lg"><strong>Ténèbres</strong> Visibilité nulle. (Obscurité totale, brouillard épais, végétation dense). Les créatures sont considérées comme <em>Aveuglées</em>.</p>
            <p className="border-bottom"><strong>Vision dans le noir</strong> Lumière faible = lumière vive, Ténèbres = lumière faible et ne distingue pas les couleurs.</p>
            <p className="border-bottom"><strong>Vision parfaite</strong> Voit tout, dans toute luminosité. Voit aussi les créatures/objets invisibles, les illusions, le plan éthéré, etc.</p>
            <p className="border-bottom"><strong>Vision aveugle</strong> Percevoir l'environnement sans la vue.</p>
            <p className="border-bottom clearfix">
              <span style={{float: 'right'}}><MarkLink text="PHB 183"/></span>
            </p>
            <p><Disadvantage/> pour une attaque contre un ennemi non visible. <Advantage/> pour attaquer une créature qui ne vous voit pas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCheatSheet
