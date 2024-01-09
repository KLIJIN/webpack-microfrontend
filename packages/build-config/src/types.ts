export interface BuildPaths {
  entry: string;
  htmlTemplate: string;
  output: string;
  src: string;
}

type Mode = 'development' | 'production';

export interface EnvVariable {
  mode: Mode;
  port?: number;
  SHOP_URL?: string;
  ADMIN_URL?: string;
}

// мегаобъект с опциями
export interface BuildOptions {
  port: number;
  path: BuildPaths;
  mode: Mode;
}