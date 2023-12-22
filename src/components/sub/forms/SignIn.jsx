import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../../../shadcn/components/ui/dialog';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <div>
      {/* <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button >Sign In</button> */}
      <Dialog>
        <DialogTrigger asChild>
          <p onClick={handleSignIn}>(Admin login)</p>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Career Snap's Reward System</DialogTitle>
          </DialogHeader>
          <p>I believe that connecting someone... </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SignIn;
