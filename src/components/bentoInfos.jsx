import React from 'react';
import BentoContentComponent from './../components/bentoContent.jsx'

const BentoInfoComponent = () => {
    const data = [
        {
            title: "Interface Intuitive",
            description: "Créez des quiz en quelques clics grâce à notre interface utilisateur conviviale.",
            image: "src/assets/Frame 1.png"
        },
        {
            title: "Accessibilité Totale",
            description: "Accessibles aux personnes avec des handicaps visuels, auditifs et moteurs.",
            image: "src/assets/Capture d'écran 2024-05-31 154128.png"
        },
        {
            title: "Personnalisation",
            description: "Personnalisez vos quiz avec des images, des vidéos et des options de formatage.",
            image: "src/assets/Frame (2).png"
        },
        {
            title: "Analyse des Résultats ",
            description: "Suivez les performances des participants avec des rapports détaillés.",
            image: "src/assets/app_screen.png"
        },
        {
            title: "Partage Facile",
            description: "Partagez vos quiz via un lien direct ou un Qr code.",
            image: "src/assets/Layer_1.png"
        }
    ]
    return (
        <>
            <h2 className='w-full flex items-center justify-center mt-20 mb-10 font-bold text-2xl'>Des Fonctionnalités Adaptées à Vos Besoins</h2>
            <div className="grid auto-rows-[auto] grid-cols-3 gap-4 mt-10">
                {[...Array(5)].map((_, i) => (
                    // <div
                    //     key={i}
                    //     className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""
                    //         }`}
                    // ></div>
                    <BentoContentComponent
                        title={data[i].title}
                        description={data[i].description}
                        image={data[i].image}
                        className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""}`}
                    ></BentoContentComponent>
                ))}
            </div>
        </>
    );
};

export default BentoInfoComponent;