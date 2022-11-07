declare module "*.module.css";
declare module "*.png"
declare module "*.jpg"

declare module '*.ipynb' {
    const ipynb: { cells: any[]; nbformat: 3 | 4 | 5; worksheets?: {
        cells: any[];
    }[] };
}