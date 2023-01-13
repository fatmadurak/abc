import { object, string } from 'yup';

export const validation = object({
  text: string().required(),
 
});