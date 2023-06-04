'use client'
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import Header from './components/Header';
import Board from './components/Board';
import { updateExpectedWords } from '@/app/store/reducers';
import Keyboard from './components/Keyboard';
import mockPalabras from './mockPalabras.json';
import FinalModal from './components/FinalModal';

// localStorage.setItem('itsNotTheFirstTime', '');
export default function Home() {
  const [open, setOpen] = useState(!localStorage.getItem('itsNotTheFirstTime'));
  const dispatch = useDispatch();


  useEffect(() => {
    if (open) return;
    
    const word = mockPalabras.words[Math.floor(Math.random() * 125)];
    dispatch(updateExpectedWords({
      word,
    }));;
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <Board />
      <Keyboard />
      <Modal open={open} close={() => setOpen(false)} />
      <FinalModal />
    </div>
  )
}
