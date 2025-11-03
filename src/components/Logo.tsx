import logo from 'figma:asset/348a1b6c3d5d7ac002eb03f6562c9a4b5d60b371.png';

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
