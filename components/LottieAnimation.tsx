import React from "react";

const lottieMap: Record<string, string> = {
  cafe1:
    "https://lottie.host/d43c238a-73af-410b-b63b-5fa17aa11354/TMr5GdCnQL.lottie",
  catcoffee:
    "https://lottie.host/2279a79d-4d4c-48cf-8a8e-d5e9f510e1fa/ks0Ja3vnL7.lottie",
  pccafe: "https://lottie.host/3655fe11-899f-410d-8523-d6af0f16f7d1/VZlAexUbZB.lottie",
  coffee404: "https://lottie.host/45ca3b23-66eb-441f-a58a-d3cafca64fd7/0FohOpXbfh.lottie"
};

type Props = {
  animation: string;
  width?: number | string; // Pode ser número ou string com unidade ex: "100%"
  height?: number | string;
};

const LottieAnimation: React.FC<Props> = ({
  animation,
  width = 400,
  height = 400,
}) => {
  const src = lottieMap[animation];

  if (!src) {
    return <div>🚫 Animação "{animation}" não encontrada.</div>;
  }

  return (
    <div className="flex justify-center items-center w-full h-auto">
      <div
        className="rounded-2xl"
        dangerouslySetInnerHTML={{
          __html: `
            <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
            <dotlottie-player
              src="${src}"
              background="transparent"
              speed="1"
              style="width: ${
                typeof width === "number" ? `${width}px` : width
              }; height: ${typeof height === "number" ? `${height}px` : height}"
              loop
              autoplay
            ></dotlottie-player>
          `,
        }}
      />
    </div>
  );
};

export default LottieAnimation;
