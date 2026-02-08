import { Button } from '../components/atoms/Button';
import { HeadingSerif } from '../components/atoms/Typography';
import DiveButton from '../assets/images/mergulhar-button.png';
import WhoareyouButton from '../assets/images/qm-e-vc-button.png';

const EntryPage: React.FC = () => {

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#0a0a0a] text-[#e0e0e0] selection:bg-white/10">
      <div className="flex flex-col items-center gap-12">
        
        <HeadingSerif className="text-6xl md:text-8xl lg:text-9xl text-white">
          Aura
        </HeadingSerif>

        {/* Container de Ações com Gap */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          
          {/* Botão "Dive" com imagem */}
          <Button 
            variant="portal" 
            onClick={() => console.log('Dive')}
            className="w-64 h-20"
          >
            <img 
              src={DiveButton} 
              alt="Dive into Archive" 
              className="absolute inset-0 w-full h-full object-contain p-3 transition-all duration-500 group-hover:invert"
            />
          </Button>

          {/* Botão "Who are you?" com imagem */}
          <Button 
            variant="portal" 
            onClick={() => console.log('Who are you')}
            className="w-64 h-20"
          >
            <img 
              src={WhoareyouButton} 
              alt="Who are you?" 
              className="absolute inset-0 w-full h-full object-contain p-3 transition-all duration-500 group-hover:invert"
            />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default EntryPage;