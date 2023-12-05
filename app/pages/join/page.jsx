'use client';
import { useEffect, useState } from 'react';
import Join from './components/join_now';
import Modal from '@/app/global-components/modal';

export default function LoginPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (container && registerBtn && loginBtn) {
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
    }
  }, []);

  return (
    <main>
      <Join></Join>
    </main>
  );
}
