import HankoProfile from '@/components/HankoProfile';
import UrlContainer from '../../components/url-container'
import LogoutButton from '../../components/LogoutButton'

export default function Home() {
  return (
    <main className='flex flex-row'>
      <HankoProfile />
    <div className="mx-auto max-w-xl py-12 md:py-24 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Urly - Short your Links not Life</h1>
        <p>Shorten Your Urls and share them easily !</p>
      </div>
     <UrlContainer />
    </div>
    <div className='p-3'>
    <LogoutButton />
    </div>
    </main>
  );
}
