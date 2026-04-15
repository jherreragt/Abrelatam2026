import icon17 from '../assets/iconos/AL-17.png';
import icon18 from '../assets/iconos/AL-18.png';
import icon19 from '../assets/iconos/AL-19.png';
import icon20 from '../assets/iconos/AL-20.png';
import icon21 from '../assets/iconos/AL-21.png';
import icon23 from '../assets/iconos/AL-23.png';
import icon24 from '../assets/iconos/AL-24.png';
import icon25 from '../assets/iconos/AL-25.png';
import icon27 from '../assets/iconos/AL-27.png';
import icon28 from '../assets/iconos/AL-28.png';
import icon29 from '../assets/iconos/AL-29.png';
import icon31 from '../assets/iconos/AL-31.png';
import icon32 from '../assets/iconos/AL-32.png';
import icon33 from '../assets/iconos/AL-33.png';
import icon35 from '../assets/iconos/AL-35.png';
import icon36 from '../assets/iconos/AL-36.png';
import icon37 from '../assets/iconos/AL-37.png';
import icon38 from '../assets/iconos/AL-38.png';
import icon39 from '../assets/iconos/AL-39.png';
import logo09 from '../assets/logos/AL-09.png';
import slider08 from '../assets/slider/AL-08.png';
import slider45 from '../assets/slider/AL-45.png';
import slider46 from '../assets/slider/AL-46.png';
import slider47 from '../assets/slider/AL-47.png';
import slider48 from '../assets/slider/AL-48.png';
import slider49 from '../assets/slider/AL-49.png';
import slider58 from '../assets/slider/AL-58.png';

const assets: Record<string, string> = {
  'iconos/AL-17.png': icon17,
  'iconos/AL-18.png': icon18,
  'iconos/AL-19.png': icon19,
  'iconos/AL-20.png': icon20,
  'iconos/AL-21.png': icon21,
  'iconos/AL-23.png': icon23,
  'iconos/AL-24.png': icon24,
  'iconos/AL-25.png': icon25,
  'iconos/AL-27.png': icon27,
  'iconos/AL-28.png': icon28,
  'iconos/AL-29.png': icon29,
  'iconos/AL-31.png': icon31,
  'iconos/AL-32.png': icon32,
  'iconos/AL-33.png': icon33,
  'iconos/AL-35.png': icon35,
  'iconos/AL-36.png': icon36,
  'iconos/AL-37.png': icon37,
  'iconos/AL-38.png': icon38,
  'iconos/AL-39.png': icon39,
  'logos/AL-09.png': logo09,
  'slider/AL-08.png': slider08,
  'slider/AL-45.png': slider45,
  'slider/AL-46.png': slider46,
  'slider/AL-47.png': slider47,
  'slider/AL-48.png': slider48,
  'slider/AL-49.png': slider49,
  'slider/AL-58.png': slider58,
};

export function assetPath(path: keyof typeof assets) {
  return assets[path];
}
