import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required("el nombre es obligatorio")
}).required();

export default yupResolver(schema);
