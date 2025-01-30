import {
    Card,
    CardContent, CardMedia, IconButton,
    Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import { useFavorites } from "@/features/suggestions-list/model/favorites.model";

type Category = {
    id: number;
    label: string;
};

export function SuggestionCard({
   id,
   title,
   category,
   image,
   price
}: {
    id: number;
    title: string;
    category: Category;
    image: string;
    price: string;
}) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.some((fav) => fav.id === id);

    return (
        <Card variant="outlined" sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                sx={{ objectFit: "cover" }}
            />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography>Категория: {category.label}</Typography>
                <Typography variant="h6" color="primary">{price} KGS</Typography>
                <IconButton onClick={() => toggleFavorite({ id, title, category, image, price })}>
                    {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>
            </CardContent>
        </Card>
    );
}