import React from 'react';
import BentoContentComponent from './../components/bentoContent.jsx';

const BentoInfoComponent = () => {
    const data = [
        {
            title: "Interface Intuitive",
            description: "Créez des quiz en quelques clics grâce à notre interface utilisateur conviviale.",
            image: "/Frame 1.png"
        },
        {
            title: "Accessibilité Totale",
            description: "Accessibles aux personnes avec des handicaps visuels, auditifs et moteurs.",
            image: "/Capture d'écran 2024-05-31 154128.png"
        },
        {
            title: "Personnalisation",
            description: "Personnalisez vos quiz avec des images, des vidéos et des options de formatage.",
            image: "/Frame (2).png"
        },
        {
            title: "Analyse des Résultats",
            description: "Suivez les performances des participants avec des rapports détaillés.",
            image: "/app_screen.png"
        },
        {
            title: "Partage Facile",
            description: "Partagez vos quiz via un lien direct ou un Qr code.",
            image: "/Layer_1.png"
        }
    ];

    return (
        <>
            <h2 id="bento-info-heading" className='w-full flex items-center justify-center mt-20 mb-10 font-bold text-2xl'>Des Fonctionnalités Adaptées à Vos Besoins</h2>
            <div className="grid auto-rows-[auto] grid-cols-3 gap-4 mt-10" aria-labelledby="bento-info-heading" role="region">
                {data.map((item, i) => (
                    <BentoContentComponent
                        key={i}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 ? "col-span-2" : ""}`}
                    />
                ))}
            </div>
        </>
    );
};

export default BentoInfoComponent;
