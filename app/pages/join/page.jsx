'use client'
import { useEffect,useState } from 'react';
import Join from './components/join'
import Modal from '../../global-components/modal';
export default function LoginPage() {
   const [isModalOpen, setModalOpen] = useState(false);

   const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

   useEffect(() => 
      {
         // Add your script logic here, such as adding event listeners
         const container = document.getElementById('container');
         const registerBtn = document.getElementById('register');
         const loginBtn = document.getElementById('login');
   
         registerBtn.addEventListener('click', () => {
         container.classList.add('active');
         });
   
         loginBtn.addEventListener('click', () => {
         container.classList.remove('active');
         });
      }, []);
   
    return (
      <main>
         <Modal open={isModalOpen} onClose={closeModal} ></Modal>
      </main>
    )
}