import'./MainContent.scss';
import React, { useState, ReactNode, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Typewriter from 'typewriter-effect';




const TypeWriting: React.FC<CardProps> = () => (
  <div className="typingStyle">
  <Typewriter
  options={{
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => { 
    typewriter
    .typeString('Making your learning experience better')
    .pauseFor(2000)
    .deleteChars(6)
    .typeString('easier ...')
    .start();
    

  }}
/>
</div>
);

const CARDS = 10;
const MAX_VISIBILITY = 3;

// The CardProps interface is for type checking the Card component's props
interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

// The CarouselProps interface is for type checking the Carousel component's props
interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({children}) => {
  const [active, setActive] = useState<number>(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => {
        const style: any = {
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 3,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 3,
          'pointer-events': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        };
        return (
          <div className='card-container' style={style}>
            {child}
          </div>
        )
      })}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

// MainContent component that uses the Card and Carousel components
const MainContent: React.FC = () => (
  <div className='mainContent'>
    <br/>
    <TypeWriting  title={''} content={''}/>
    <br/>
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card 
          title={'hello'} 
          content='"In the end, the secret to learning is so simple: forget about it. Think only about whatever you love. Follow it, do it, dream about it... and you will hit upon the extraordinary." - Ray Bradbury'
        />
      ))}
    </Carousel>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


    <section id="About">
  <h1>About</h1>
  <hr/> 
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
</section>
<section id="Clients">
   <h1>Clients</h1>
   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  <hr/> 
</section>
<section id="Services">
    <h1>Services</h1>
   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <hr/> 
</section>
  </div>
);

// Render the MainContent component
ReactDOM.render(
  <MainContent />,
  document.getElementById('root')
);

export default MainContent;