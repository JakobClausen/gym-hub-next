import * as yup from 'yup';

export const scheduleValidation = yup.object().shape({
  type: yup.string().required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
});
