import sharp from "sharp";

sharp("src/assets/hero.jpg")
    .resize(1920) // reduz largura para 1920px
    .webp({ quality: 75 })
    .toFile("src/assets/images/hero-compressed.webp")
    .then(() => console.log("✅ Imagem comprimida com sucesso!"))
    .catch(err => console.error(err));
