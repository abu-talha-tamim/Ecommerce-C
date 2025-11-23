import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { blogCategoryType } from "./blogCategoryType";
import { orderType } from "./orderType";
import { productType } from "./productType";
import { blogType } from "./blogType";
import { addressType } from "./addressType";
import { brandType } from "./brandTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blockContentType,
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
    postType,
  ],
};
