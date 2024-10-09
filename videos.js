const videos = [
    {
        id: "9kKS16MGdt8", 
        title: "Visitando la impactante frontera de HAITÍ",
        Channel: "luisito comunica",
        views: "1.2M",
        avatar: "https://img.youtube.com/vi/9kKS16MGdt8/hqdefault.jpg"
    },
    {
        id: "DxW094lMeJA", 
        title: "Peleas sin sentido: CSS-in-JS vs Tailwind",
        Channel: "midulive",
        views: "900K",
        avatar: "https://img.youtube.com/vi/DxW094lMeJA/hqdefault.jpg"
    },
    {
        id: "GEaVO8tpmmw", 
        title: "Don Omar - Adiós (Official Music Video)",
        Channel: "Don Omar",
        views: "1M",
        avatar: "https://img.youtube.com/vi/GEaVO8tpmmw/hqdefault.jpg"
    },
    {
        id: "by4I_10HbX4",
        title: "Luis Miguel - La Incondicional (Video Oficial)",
        Channel: "Oficial Luis Miguel",
        views: "700K",
        avatar:"https://img.youtube.com/vi/by4I_10HbX4/hqdefault.jpg"
    },
    {
        id: "aaSRuUSuAto",
        title: "Me Tienes, Me Puedes, Me Dueles",
        Channel: "verde 70",
        views: "900K",
        avatar:"https://img.youtube.com/vi/aaSRuUSuAto/hqdefault.jpg"
    },
    {
        id: "72u6K5MhddI",
        title: "Volvió EL TREN en ECUADOR ¿Cuánto Cuesta? | El Champ",
        Channel: "El Champ",
        views: "800K",
        avatar:"https://img.youtube.com/vi/72u6K5MhddI/hqdefault.jpg"
    },
];

const videosContainer = document.getElementById("videos-container");


videos.forEach(video => {
    const videoCard = `
       <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:rounded-none transition-all duration-300">
            <!-- Video (Cambio a cuadrado con hover) -->
            <iframe class="w-full h-48 rounded-lg hover:rounded-none transition-all duration-300" src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" allowfullscreen></iframe>
            
            <!-- Contenido del video -->
            <div class="p-4">
                <div class="flex items-center space-x-4">
                    <!-- Avatar del canal (Cambio a cuadrado con hover) -->
                    <img src="${video.avatar}" class="w-10 h-10 rounded-full hover:rounded-none transition-all duration-300" alt="Avatar del canal">
                    <div>
                        <!-- H3: Título del video -->
                        <h3 class="text-lg font-bold">${video.title}</h3>
                        <!-- Small: Canal -->
                        <small class="text-gray-600">${video.Channel}</small>
                    </div>
                </div>
                <!-- Small: Vistas -->
                <small class="text-gray-600 mt-2 block">${video.views} vistas</small>
            </div>
        </div>
    `;
    videosContainer.innerHTML += videoCard;
});