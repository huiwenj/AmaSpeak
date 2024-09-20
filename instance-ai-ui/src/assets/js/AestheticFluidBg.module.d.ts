// src/assets/js/AestheticFluidBg.module.d.ts

interface AestheticFluidBgOptions {
  dom: string;
  colors: string[];
  loop: boolean;
}

declare class AestheticFluidBg {
  constructor(options: AestheticFluidBgOptions);
}

export { AestheticFluidBg, AestheticFluidBgOptions };
