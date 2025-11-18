import { ImageWithFallback } from './figma/ImageWithFallback';
import logo2N from 'figma:asset/5b9e3731e4d6c0cb5dbc65cc1f00e75d3b832f9f.png';
import logoAirzone from 'figma:asset/696b0a12cb9d7feb4deba736b66a94bdbccf7358.png';
import logoKNX from 'figma:asset/96961ec98371e505cef3f75afb45df38cf6b3aba.png';
import logoLektrico from 'figma:asset/590f33f36b8183ffeb7a39916814c46da71f6584.png';
import logoSonos from 'figma:asset/ddbb08cec53468ba29ea808f3298ee9bf6d7bb29.png';
import logoSchneider from 'figma:asset/df16b2873540f9d95333820ab084a75bad7aa0fe.png';
import logoKlereo from 'figma:asset/ca2927abacd648bc5215e5f1f6f842a680df65e3.png';
import logoNuki from 'figma:asset/75737c3a93b096a526e04e507957b23af00f629d.png';
import logoHikvision from 'figma:asset/f4dca2d91801d3018d51719ad8363793bbd9cf64.png';
import logoGude from 'figma:asset/8bda6e9f4dee22c7ec127df62e2ea138c2468d97.png';
import logoABB from 'figma:asset/68d23861d57afdaf710318e3b498f4c9307bda06.png';
import logoCrestron from 'figma:asset/d1a1838fb1c3f7280c4b235d994aa375ba5ce68d.png';
import logoShelly from 'figma:asset/34f18ded55bac219c2d2a2237ecfc41993880a90.png';
import logoModbus from 'figma:asset/04e5a501857c077589f715d0d9395e493757b8f7.png';
import logoPoolCop from 'figma:asset/713fbc11f8ba37514a92f8ab89e1b0bfc50e604b.png';
import logoPushover from 'figma:asset/36a8563c2fa267bf402fcc7fc1097940f7f192dc.png';
import logoDoorBird from 'figma:asset/a857cbd0f839bce9619ebd217cc557a9e6bbf17b.png';
import logoHomeKit from 'figma:asset/e3cb6c75bec49071597330d8f71f48ce45536041.png';

export interface BrandLogoData {
  name: string;
  logoUrl: string;
  backgroundColor?: string;
  textColor?: string;
}

// Brand logos database - centralized management
export const BRAND_LOGOS: Record<string, BrandLogoData> = {
  '2n': {
    name: '2N',
    logoUrl: logo2N,
    backgroundColor: '#FFFFFF',
    textColor: '#000000'
  },
  'doorbird': {
    name: 'DoorBird',
    logoUrl: logoDoorBird,
    backgroundColor: '#FFFFFF',
    textColor: '#4A5568'
  },
  'poolcop': {
    name: 'PoolCop',
    logoUrl: logoPoolCop,
    backgroundColor: '#FFFFFF',
    textColor: '#1A7FA3'
  },
  'klereo': {
    name: 'Klereo',
    logoUrl: logoKlereo,
    backgroundColor: '#FFFFFF',
    textColor: '#00A8E1'
  },
  'airzone': {
    name: 'Airzone',
    logoUrl: logoAirzone,
    backgroundColor: '#FFFFFF',
    textColor: '#1a4971'
  },
  'sonos': {
    name: 'Sonos',
    logoUrl: logoSonos,
    backgroundColor: '#FFFFFF',
    textColor: '#000000'
  },
  'crestron': {
    name: 'Crestron',
    logoUrl: logoCrestron,
    backgroundColor: '#FFFFFF',
    textColor: '#003D6A'
  },
  'hikvision': {
    name: 'Hikvision',
    logoUrl: logoHikvision,
    backgroundColor: '#FFFFFF',
    textColor: '#E6001F'
  },
  'nuki': {
    name: 'Nuki',
    logoUrl: logoNuki,
    backgroundColor: '#FFFFFF',
    textColor: '#000000'
  },
  'shelly': {
    name: 'Shelly',
    logoUrl: logoShelly,
    backgroundColor: '#FFFFFF',
    textColor: '#4A9FD8'
  },
  'gude': {
    name: 'Gude',
    logoUrl: logoGude,
    backgroundColor: '#FFFFFF',
    textColor: '#005B8E'
  },
  'lektrico': {
    name: 'Lektrico',
    logoUrl: logoLektrico,
    backgroundColor: '#FFFFFF',
    textColor: '#1e293b'
  },
  'modbus': {
    name: 'Modbus',
    logoUrl: logoModbus,
    backgroundColor: '#FFFFFF',
    textColor: '#0099CC'
  },
  'abb-terraac': {
    name: 'ABB Terra AC',
    logoUrl: logoABB,
    backgroundColor: '#FFFFFF',
    textColor: '#FF0000'
  },
  'evlink-pro': {
    name: 'Schneider Electric',
    logoUrl: logoSchneider,
    backgroundColor: '#FFFFFF',
    textColor: '#3DCD58'
  },
  'pushover': {
    name: 'Pushover',
    logoUrl: logoPushover,
    backgroundColor: '#FFFFFF',
    textColor: '#249DF1'
  },
  'homekit': {
    name: 'Apple HomeKit',
    logoUrl: logoHomeKit,
    backgroundColor: '#FFFFFF',
    textColor: '#FF9500'
  },
  'knx': {
    name: 'KNX',
    logoUrl: logoKNX,
    backgroundColor: '#FFFFFF',
    textColor: '#0CB14B'
  }
};

interface BrandLogoProps {
  brandId: string;
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
  className?: string;
}

export function BrandLogo({
  brandId,
  variant = 'full',
  size = 'md',
  showBackground = true,
  className = ''
}: BrandLogoProps) {
  const brand = BRAND_LOGOS[brandId];

  if (!brand) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 rounded ${className}`}>
        <span className="text-gray-500 text-sm">Logo</span>
      </div>
    );
  }

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20'
  };

  const paddingClasses = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3',
    xl: 'p-4'
  };

  // Icon variant - just the logo in a circle
  if (variant === 'icon') {
    return (
      <div
        className={`rounded-full ${paddingClasses[size]} ${showBackground ? 'shadow-md' : ''} ${className}`}
        style={{
          backgroundColor: showBackground ? brand.backgroundColor : 'transparent'
        }}
      >
        <div className={`${sizeClasses[size]} w-auto relative`}>
          <ImageWithFallback
            src={brand.logoUrl}
            alt={brand.name}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    );
  }

  // Text variant - just the brand name
  if (variant === 'text') {
    return (
      <span
        className={`font-semibold ${className}`}
        style={{ color: showBackground ? brand.textColor : 'inherit' }}
      >
        {brand.name}
      </span>
    );
  }

  // Full variant - logo with background
  return (
    <div
      className={`flex items-center justify-center rounded-lg ${paddingClasses[size]} ${showBackground ? 'shadow-sm' : ''} ${className}`}
      style={{
        backgroundColor: showBackground ? brand.backgroundColor : 'transparent'
      }}
    >
      <div className={`${sizeClasses[size]} w-auto relative`}>
        <ImageWithFallback
          src={brand.logoUrl}
          alt={brand.name}
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}
