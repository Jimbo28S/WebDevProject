import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import lionMap from "../public/lionMap.jpg";

export default function LionMap() {
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
                  src={lionMap}
                  alt="African Lion Map"
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
