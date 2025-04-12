import '../styles/Secundario.css'
import Bento from './Bento';
import Contact from './Contact';
import Estudios from './Estudios';

export default function Secundario(){
    return(
        <>
            <div className='content'>
                <div className='section_1'>
                    <Bento />
                    <Contact />
                </div>
                <div className='section_2'>
                    <Estudios />
                </div>
            </div>
        </>
    );
}


