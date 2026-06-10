La cosa es que en el src/routes/index.tsx sí que está bien, pero relamente en la landing no se ve el simulador



Te paso el código los 3 documentos (Hero.tsx, Mortgagesimulator.tsx e index.tsx, tal y como vienen en github.com)

Error 2 :
La ubicación que sí funcionaba, la original ()aunque de otra dorección es esta:

            <iframe
                title="Ubicación MAROTO en Málaga"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.4500%2C36.7050%2C-4.3950%2C36.7350&amp;layer=mapnik&amp;marker=36.7213%2C-4.4214"
                className="absolute inset-0 h-full w-full grayscale contrast-110"
                loading="lazy"
            /> 

