import { useSelector } from 'react-redux';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';

import s from './App.module.scss';

function App() {
  const step = useSelector((state) => state.step.value);

  return (
    <div className={s["App"]}>
      {step === 1 ? <Step1></Step1> : ''}
      {step === 2 ? <Step2></Step2> : ''}
      {step === 3 ? <Step3></Step3> : ''}
      {step === 4 ? <Step4></Step4> : ''}
    </div>
  );
}

export default App;
