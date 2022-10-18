import React from 'react';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
  return (
    <div id="categories" className="px-2 md:px-8">
      <h2 className="px-2 text-xl font-bold text-gray-200">
        <span className="text-[#9147ff]">Categories</span> we think you&apos;ll
        like
      </h2>

      <div className="grid grid-cols-2 gap-2 py-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 2xl:grid-cols-10">
        <CategoriesItem
          image="https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"
          title="Just Chatting"
          viewers="233k Viewers"
          tag1="IRL"
        />
        <CategoriesItem
          image="https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg"
          title="Call Duty: War"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />

        <CategoriesItem
          image="https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg"
          title="Fortnite"
          viewers="53k Viewers"
          tag1="Shooter"
          tag2="Action"
        />
        <CategoriesItem
          image="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg"
          title="Minecraft"
          viewers="22k Viewers"
          tag1="Strategy"
        />
        <CategoriesItem
          image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg"
          title="Grand Theft Auto V"
          viewers="95k Viewers"
          tag1="Adventure"
        />

        <CategoriesItem
          image="https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg"
          title="Apex Legends"
          viewers="112k Viewers"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          image="https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg"
          title="Dead by Daylight"
          viewers="33k Viewers"
          tag1="Action"
          tag2="Horror"
          search="dead-by-daylight"
        />
        <CategoriesItem
          image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"
          title="League of Legends"
          viewers="31k Viewers"
          tag1="Action"
        />
      </div>
    </div>
  );
};

export default Categories;
