import ApplicationForm from './ApplicationForm'; 
import CreditCardShowcase from '../cards/CreditCardShowcase';


export default function Hero() {
  return (
    <section className="relative w-full pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
       
        <div className="flex justify-center lg:justify-end">
          <ApplicationForm />
        </div>
        
        
        <div className="flex justify-center lg:justify-start">
          <CreditCardShowcase />
        </div>
      </div>
    </section>
  );
}