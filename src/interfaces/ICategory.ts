export interface ICategory {
    _id?: string;
    category_name: string;
    slug: string;
    parent?: string;
    children?: string[];
}