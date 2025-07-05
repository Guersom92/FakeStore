export type ProductoType= {
    id:                   number;
    title:                string;
    description:          string;
    category:             string;
    price:                number;
    discountPercentage:   number;
    rating:               number;
    stock:                number;
    tags:                 {}[];
    sku:                  string;
    weight:               number;
    dimensions:           Dimensions;
    warrantyInformation:  string;
    shippingInformation:  string;
    availabilityStatus:   string;
    reviews:              {}[];
    returnPolicy:         string;
    minimumOrderQuantity: number;
    meta:                 Meta;
    images:               {}[];
    thumbnail:            string;
}

export type FilterType={
    maxPrice: number
    category: Categories
}

export type Categories = |"all"|"beauty"|"fragrances"|"furniture"|"groceries"