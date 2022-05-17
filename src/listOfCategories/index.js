import React from 'react';
import { Category } from "../category";

export const ListOfCategories = (
    {
        categories = []
    }
) => (
    categories.map((x) => <Category {...x}></Category>)
);