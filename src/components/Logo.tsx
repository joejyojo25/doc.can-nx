import logo from 'figma:asset/919ef30138c882ec49118640f7395b4d213df19e.png';

interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Logo({ className = 'h-12 w-auto', width, height }: LogoProps) {
  return (
    <img 
      src={logo} 
      alt="Can-nX" 
      className={className}
      width={width}
      height={height}
    />
  );
}
