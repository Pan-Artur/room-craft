import { useNavigate } from 'react-router-dom';
import { Container } from "../../../components/Container/Container";
import HeroImage from "../../../assets/images/Hero/hero.webp";
import {
  StyledHero,
  HeroGrid,
  ContentColumn,
  ImageColumn,
  Title,
  Subtitle,
  CTAButton,
  FeaturesList,
  FeatureItem,
  StatsWrapper,
  StatItem
} from './styles/Hero.styled';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <StyledHero>
      <Container>
        <HeroGrid>
          <ContentColumn>
            <Title>Створи кімнату своєї мрії</Title>
            <Subtitle>
              Інтуїтивний конструктор для планування ідеального простору. 
              Без обмежень, без стресу - тільки творчість та втілення ідей.
            </Subtitle>
            
            <FeaturesList>
              <FeatureItem>🏆 Понад 10,000 унікальних дизайнів створено</FeatureItem>
              <FeatureItem>🎨 500+ елементів інтер'єру</FeatureItem>
              <FeatureItem>💡 Підказки від професійних дизайнерів</FeatureItem>
            </FeaturesList>

            <StatsWrapper>
              <StatItem>
                <span>4.9/5</span>
                <p>Рейтинг користувачів</p>
              </StatItem>
              <StatItem>
                <span>50+</span>
                <p>Стилів інтер'єру</p>
              </StatItem>
            </StatsWrapper>

            <CTAButton onClick={() => navigate('/build')}>
              Почати дизайн — це безкоштовно
            </CTAButton>
          </ContentColumn>

          <ImageColumn>
            <img src={HeroImage} alt="Приклад дизайну кімнати" />
          </ImageColumn>
        </HeroGrid>
      </Container>
    </StyledHero>
  );
};