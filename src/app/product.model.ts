export interface Product {
    category: string;
    description: string;
    id: number
    image: string;
    price: number;
    title: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;

}

export interface Review {
    formValues: {
        uniqueId: string;
        productId: number;
        review: ReviewBase
    }
    id: number;
}

export interface ReviewList {
    uniqueId: string;
    productId: number;
    review: ReviewBase
}

export interface ReviewBase {
    name: string;
    reviews: string;
}