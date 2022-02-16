import React from "react";

const Index = () => {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2 justify-items-center">
        <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
          <h2 class="text-7xl font-bold tracking-tight text-blue-700 dark:text-white text-center">
            15
          </h2>
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            RT
          </h5>
        </div>
        <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
          <h2 class="mb-2 text-7xl font-bold tracking-tight text-blue-700 dark:text-white text-center">
            15
          </h2>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            RT
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Index;
