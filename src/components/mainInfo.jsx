import React from 'react';

const MainInfoComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-52">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-2 lg:px-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-5xl dark:text-white">
          Créez des Quiz Accessibles <br /> en Toute Simplicité
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 mt-14">Découvrez notre plateforme intuitive pour créer et partager des quiz accessibles à tous, quel que soit leur niveau de compétence.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-14">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            C'est parti !
            <svg className="ml-2 -mr-1 w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainInfoComponent;