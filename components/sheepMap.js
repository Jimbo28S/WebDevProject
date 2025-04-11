import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import sheepMap from "../public/sheepMap.jpg";

export default function SheepMap() {
  return (
    <div className="max-w-full max-h-full">
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={0}
        defaultPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Zoomable and Panable Image */}
            <div className="relative overflow-auto cursor-grab">
              <TransformComponent>
                <Image
                  src={sheepMap}
                  alt="Bighorn Sheep Map"
                  layout="intrinsic"
                  width={1000}
                  height={600}
                  className="transition-transform duration-300 ease-in-out cursor-zoom-in"
                />
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
