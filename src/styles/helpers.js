import { create } from 'jss';
import jssIncreaseSpecificity from 'jss-increase-specificity';
import { createGenerateClassName, jssPreset } from '@mui/styles';

export const jss = create({
  plugins: [...jssPreset().plugins, jssIncreaseSpecificity()],
});

export const generateClassName = createGenerateClassName({
  productionPrefix: 'ntshkn-',
  disableGlobal: false,
  seed: 'ntshkn',
});
