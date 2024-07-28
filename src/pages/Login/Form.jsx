import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../firebase';

import { toast } from 'react-toastify';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, pass).then(() => {
        toast.success("Hesabınız Oluşturuldu");
        navigate("/feed");
      })
        .catch((err) => toast.error("Hata!:" + err.code));
    } else {
      alert("Giriş Yapma Gerçekleşti");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}
        className=' flex flex-col'>
        <label>Email</label>
        <input
          type="text"
          required
          className=' text-black rounded mt-1 p-2 outline-none 
        shadow-lg focus: shadow-[gray]'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className='mt-5'>Şifre</label>
        <input
          type="text"
          required
          className=' text-black rounded mt-1 p-2 outline-none 
        shadow-lg focus: shadow-[gray]'
          onChange={(e) => setPass(e.target.value)} />

        <button className='mt-10 bg-white text-black rounded-full 
        p-1 font-bold transition hover:bg-gray-300'>
          {isSignUp ? "Kaydol" : "Giriş Yap"}
        </button>
      </form>

      <p className=' mt-5'>
        <span className=' text-gray-500'>
          {isSignUp ? "Hesabınız varsa" : "Hesabınız yoksa"}
        </span>

        <span
          onClick={() => setIsSignUp(!isSignUp)}
          className=' cursor-pointer ms-2 text-blue-500'
        >
          {isSignUp ? "Giriş Yapın" : "Kaydolun"}
        </span>
      </p>
    </div>

  );
};

export default Form;