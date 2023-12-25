import { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuth } from '../../../contexts/auth';
import { auth } from '../../../firebase';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../../../shadcn/components/ui/dialog';
import { Input } from '../../../shadcn/components/ui/input';

function SignIn() {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });

  };

  return (
    <div className='flex items-center'>
      {!user ?
        <Dialog>
          <DialogTrigger asChild>
            <p className='pr-5 text-xs hover:cursor-pointer'>(Admin)</p>
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Sign In</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
              <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          </DialogContent>
        </Dialog>
        :
        <p className='pr-5 text-xs hover:cursor-pointer' onClick={() => signOut(auth)}>Logout</p>
      }
    </div>
  );
}

export default SignIn;
