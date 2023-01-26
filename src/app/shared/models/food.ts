export interface Food{
    id:number;
    imagePath:string;
    title: string;
    description: string;
    price: number;
    category?: string[];
}