import { Container } from './styles';

export default function AboutMe() {
  return (
    <Container>
      <h1>Who Am <span>I</span>?</h1>
      <div className='content'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nemo illo placeat, ut quos iusto velit corporis ullam aliquam repellat voluptas dolor magni vero. A repudiandae consectetur similique voluptatibus labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, voluptatum distinctio iusto minus deserunt dolorem?</p>

      <img src="src/assets/pfp.png" alt="" />
      </div>
    </Container>
  );
}
