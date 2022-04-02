import React from "react";
import { ListOfCategories } from "./listOfCategories";

export const App = () => (
    <ListOfCategories
        categories={[
            {
                path: 'https://www.google.com',
                emoji: '💕',
                bgcolor: '#b6b12b',
                bgColor2: '#0df2c8',
                text: 'Yeah',
            },
        ]}
    />
);