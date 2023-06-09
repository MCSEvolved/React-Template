import { useNavigate } from "react-router-dom";

interface Props {
  isAuthenticated: Boolean
  userName: string | undefined | null
}

export default function LoginButton({ isAuthenticated, userName }: Props) {
  if (isAuthenticated) {
    return (
      <p>{userName}</p>
    )
  }

  const navigate = useNavigate();


  return <button onClick={() => { navigate('/login') }}
    className=' bg-MCS-BlueBlack text-white rounded-md h-8 w-24'
  >Log In</button>;
};