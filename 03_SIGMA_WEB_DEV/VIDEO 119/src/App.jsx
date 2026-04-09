import react from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  }
  
  
    const  onSubmit = async (data) => {
      await delay(2);

      let info = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data );
      if (data.username === 'admin') {
        setError('blocked', { message: 'This username is blocked' });
      }
    };
  

  return (
    <>
    {isSubmitting && <div className='loading'>Submitting...</div>}
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='username' {
          ...register('username', {
          required: {value: true, message: 'Username is required'} ,
          minLength: {value: 3, message: 'Username must be at least 3 characters long'} ,
          maxLength: {value: 12, message: 'Username must be less than 12 characters long'} 
          })
          }/>
        {errors.username && <div className='error'>{errors.username.message}</div>}
        <input type="password" placeholder='password' {
          ...register('password', { 
            required: {value: true, message: 'Password is required'}, 
            minLength: {value: 6, message: 'Password must be at least 6 characters long'} 
            })} />
        {errors.password && <div className='error'>{errors.password.message}</div>}
        <input type="submit" value="Submit" disabled={isSubmitting} />
        {errors.blocked && <div className='error'>{errors.blocked.message}</div>}
      </form>
    </div>
    </>
  );
}

export default App; 

