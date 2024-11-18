'use client'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import MermaidDiagram from '@/components/MermaidDiagram'

export default function Home() {
	return (
		<div className="fixed inset-0 overflow-hidden bg-gray-900">
			<TransformWrapper
				initialScale={1}
				minScale={0.5}
				maxScale={4}
				smooth={true}
				limitToBounds={false}
				centerOnInit={true}
			>
				<TransformComponent
					wrapperClass="!w-full !h-full"
					contentClass="!w-full !h-full"
				>
					<h1 className="text-4xl font-bold text-center mb-8 text-white">
						Coda Family Tree
					</h1>
					<MermaidDiagram diagram={diagram} className="w-full" />
				</TransformComponent>
			</TransformWrapper>
		</div>
	)
}
