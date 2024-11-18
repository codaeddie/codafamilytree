'use client'

import { useEffect, useRef, useState } from 'react'
import MermaidDiagram from '@/app/components/MermaidDiagram'

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [startPos, setStartPos] = useState({ x: 0, y: 0 })

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true)
		setStartPos({
			x: e.clientX - position.x,
			y: e.clientY - position.y
		})
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return
		
		setPosition({
			x: e.clientX - startPos.x,
			y: e.clientY - startPos.y
		})
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	const handleWheel = (e: React.WheelEvent) => {
		if (!containerRef.current) return
		
		e.preventDefault()
		
		const container = containerRef.current
		const scale = parseFloat(container.style.getPropertyValue('--scale') || '1')
		const newScale = e.deltaY < 0 ? scale * 1.1 : scale / 1.1
		
		const mouseX = e.clientX
		const mouseY = e.clientY
		
		const deltaX = (mouseX - position.x) * (1 - newScale / scale)
		const deltaY = (mouseY - position.y) * (1 - newScale / scale)
		
		setPosition({
			x: position.x + deltaX,
			y: position.y + deltaY
		})
		
		container.style.setProperty('--scale', newScale.toString())
	}

	const diagram = `
%%{
  init: {
    'theme': 'dark',
    'themeVariables': {
      'fontFamily': 'Inter, ui-sans-serif, system-ui'
    }
  }
}%%

flowchart TD
  subgraph MakdesiChildren["Makdesi Family"]
    Besma["Besma"]
    Sarmad["Sarmad"]
    Mazen["Mazen"]
    Nithal["Nithal"]
    Moiad["Moiad"]
    Khalid-AKA-Jerry["Khalid-AKA-Jerry"]
    Nisreen["Nisreen"]
    Nawal["Nawal"]
  end
  subgraph CodaChildren["Coda Family"]
    Rawayda["Rawayda"]
    Rita["Rita"]
    Ronda["Ronda"]
    Rafa["Rafa"]
    Rami["Rami"]
    Raymond["Raymond"]
    Rafael["Rafael"]
    Riath["Riath"]
  end
  subgraph MainFamily["THE *Coda* Family"]
    direction LR
    EdmundSargonPeter["EdmundSargonPeter"]
    Ares["Ares"]
    Nora["Nora"]
  end
  subgraph Sarmad'sFamily["Sarmad's Kids"]
    direction LR
    Brandon["Brandon"]
    Ryan["Ryan"]
    Emma["Emma"]
  end
  subgraph Mazin's_Family["Mazin's Kids"]
    direction LR
    Gina["Gina"]
    Maryan["Marianne"]
    Angela["Angela"]
    Luke["Luke"]
  end
  subgraph Makdesi_Family["Moiad's Kids"]
    Lena["Lena"]
    Chris["Chris"]
    Patrick["Patrick"]
  end
  subgraph Shaia_Family["lena's Kids"]
    Alyssa["Alyssa"]
    Gianna["Gianna"]
    Liam["Liam"]
  end
  subgraph NawalFamily["The Alkatib's"]
    Rene["Renee"]
    Monique["Monique"]
    Diana["Diana"]
    Rhonda["Rhonda"]
  end
  subgraph MOMO["Yacoub's"]
    direction LR
    Nathan["Nathan"]
    Alexander["Alexander"]
  end
  subgraph Romaya_Fam["Romaya's"]
    direction LR
    Sofia["Sofia"]
    Dalia["Dalia"]
    Mia["Mia"]
    Rita.["Rita"]
  end
  subgraph Younan_Fam["Younan's"]
    direction LR
    cici["Celine"]
    Julian["Julian"]
    Preston["Preston"]
  end
  subgraph triplets["Triplets"]
    Allison["Allison"]
    Lauren["Lauren"]
    Dylan["Dylan"]
  end
  subgraph Jouni["Jouni Family"]
    Danny["Danny"]
    David["David"]
    triplets
  end
  subgraph Hanna["The One and Only"]
    Natalie((("Natalie")))
  end
  subgraph RamiFamily["Coda's"]
    direction LR
    Anna["Anna"]
    Angelina["Angelina"]
  end
  subgraph RaymondFamily["RefEt Coda's"]
    Andrew["Andrew"]
    Sarah["Sarah"]
  end
  subgraph RafaelFamily["RefAtt Coda's"]
    direction LR
    Alvin["Alvin"]
    Rosie["Rosie"]
    Ila["Ila"]
  end
  subgraph RawaydaFamily["Coda's"]
    Rafel["Rafel"]
    Sadda["Sadda"]
  end
  subgraph Rafel_Fam["Coda's"]
    Reagen["Reagen"]
    Royal["Royal"]
    Roman["Roman"]
    Sophia["Sophia"]
  end
  subgraph RitaFamily["Glina's"]
    Alen["Alen"]
    Tara["Tara"]
  end
  subgraph Glina["Glina's"]
    Clara["Clara"]
    Thomas["Thomas"]
    Ben["Ben"]
  end
  subgraph RondaFamily["Ronda's kids"]
    Nibras["Nibras"]
    Febras["Firas"]
  end
  MakdesiGP(("Gido Poulus + Nana Mary")) ===> MakdesiChildren
  CodaGP(("Gido Edmoond + Nana Salha")) ===> CodaChildren
  Besma == 🔥 ==> MainFamily
  Riath == 🦚 ==> MainFamily
  Sarmad -- 💍💍💍💍💍💍💍💍<br>Sarmad &amp; Saba Makdesi<br>💍💍💍💍💍💍💍💍 ---> Sarmad'sFamily
  Mazen -- 💍💍💍💍💍💍💍💍<br>Mazen &amp; Linda Makdesi<br>💍💍💍💍💍💍💍💍 ---> Mazin's_Family
  Moiad -- 💍💍💍💍💍💍💍💍<br>Moiad &amp; Neda Makdesi<br>💍💍💍💍💍💍💍💍 ---> Makdesi_Family
  Lena -- 💍💍💍💍💍💍💍<br>Randy &amp; Lena Shaia<br>💍💍💍💍💍💍💍 ----> Shaia_Family
  Nawal -- 💍💍💍💍💍💍💍<br> Adil &amp; Nawal Alkatib<br>💍💍💍💍💍💍💍 ---> NawalFamily
  Monique -- 💍💍💍💍💍💍💍💍<br> Lenny &amp; Monique Yacoub<br>💍💍💍💍💍💍💍💍 ----> MOMO
  Diana -- 💍💍💍💍💍💍💍💍<br> Sinan &amp; Diana Romaya<br>💍💍💍💍💍💍💍💍 ----> Romaya_Fam
  Rhonda -- 💍💍💍💍💍💍💍💍<br> Sal &amp; Rhonda Younan<br>💍💍💍💍💍💍💍💍 ----> Younan_Fam
  Nisreen -- 💍💍💍💍💍💍💍💍<br> Majid &amp; Nisreen Jouni<br>💍💍💍💍💍💍💍💍 ---> Jouni
  Nithal -- 💍💍💍💍💍💍💍<br> Imad &amp; Nithal Hanna<br>💍💍💍💍💍💍💍 ---> Hanna
  Rami -- 💍💍💍💍💍💍💍💍<br> Rami &amp; uhhhmn3 Coda<br>💍💍💍💍💍💍💍💍 ---> RamiFamily
  Raymond -- 💍💍💍💍💍💍💍<br> Refet &amp; Nehla Coda<br>💍💍💍💍💍💍💍 ---> RaymondFamily
  Rafael -- 💍💍💍💍💍💍💍<br> Rafael &amp;Rena Coda<br>💍💍💍💍💍💍💍 ---> RafaelFamily
  Rawayda -- 💍💍💍💍💍💍💍💍<br> Salah &amp; Rawayda Coda<br>💍💍💍💍💍💍💍💍 ---> RawaydaFamily
  Rafel -- 💍💍💍💍💍💍<br> Rafel &amp; D Coda<br>💍💍💍💍💍💍 ----> Rafel_Fam
  Rita -- 💍💍💍💍💍💍💍<br> uhhhm4 &amp; Rita Glina<br>💍💍💍💍💍💍💍 ---> RitaFamily
  Alen -- 💍💍💍💍💍💍<br> Alen &amp; Katie Glina<br>💍💍💍💍💍💍 ----> Glina
  Ronda -- 💍💍💍💍💍💍<br> Thomas &amp; Ronda <br>💍💍💍💍💍💍 ---> RondaFamily
  Rafa -- 💍💍💍💍💍💍💍💍<br> Hathem &amp; Rafa Yacoub<br>💍💍💍💍💍💍💍💍 ---> RafaFamily((("RafaFamily")))
  style triplets fill:#FFD600,color:#000000
  style Natalie stroke:#ff99ff
  style MakdesiChildren fill:#ff1919,stroke:#000,stroke-width:3px
  style CodaChildren fill:#2196F3,stroke:#000,stroke-width:3px
  style MainFamily fill:#9C27B0,stroke:#000,stroke-width:3px
  style Sarmad'sFamily fill:#D50000
  style Mazin's_Family fill:#000000
  style Makdesi_Family fill:#2962FF
  style NawalFamily fill:#FF6D00,stroke:#000,stroke-width:3px
  style Jouni fill:#00C853
  style Hanna fill:#AA00FF
  style RamiFamily fill:#00C853
  style RaymondFamily fill:#2196F3
  style RafaelFamily fill:#2962FF
  style RawaydaFamily fill:#2196F3
  style Rafel_Fam fill:#AA00FF
  style RitaFamily fill:#FF6D00,color:#000000
  style Glina fill:#AA00FF
  style RondaFamily fill:#E1BEE7,color:#000000
  style RafaFamily stroke:#FFFFFF,fill:#AA00FF
`

	return (
		<div className="fixed inset-0 overflow-hidden bg-gray-900">
			<div
				ref={containerRef}
				className="w-full h-full cursor-move"
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onWheel={handleWheel}
			>
				<div
					className="transform-gpu"
					style={{
						transform: `scale(var(--scale, 1)) translate(${position.x / parseFloat(containerRef.current?.style.getPropertyValue('--scale') || '1')}px, ${position.y / parseFloat(containerRef.current?.style.getPropertyValue('--scale') || '1')}px)`,
						transformOrigin: 'center center'
					}}
				>
					<h1 className="text-4xl font-bold text-center mb-8 text-white">
						Coda Family Tree
					</h1>
					<MermaidDiagram diagram={diagram} className="w-full" />
				</div>
			</div>
		</div>
	)
}
