import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../layouts/DefaultLayout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <DefaultLayout />
    </div>
  );
};

export default Home;
