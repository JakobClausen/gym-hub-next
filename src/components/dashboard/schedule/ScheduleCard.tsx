import { Form, Formik, FormikHelpers } from 'formik';
import { SubmitButton } from 'formik-semantic-ui-react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { GymClass } from '../../../generated/graphql';
import {
  InputContainer,
  InputContainerFlex,
} from '../../../styles/styledComponents/schedule';
import { InputField } from './InputField';

interface ScheduleCardProps {
  gymClass: Pick<GymClass, 'type' | 'startTime' | 'endTime'>;
}

interface Values {
  type: string;
  start: string;
  end: string;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ gymClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      layout
      initial={{ borderRadius: 10 }}
      style={{
        width: '100%',
        backgroundColor: '#888888',
        margin: '20px 0px',
        listStyleType: 'none',
        cursor: 'pointer',
      }}
    >
      <motion.div
        layout
        onClick={toggleOpen}
        style={{
          padding: '10px',
        }}
      >
        <p>{gymClass.type}</p>
        <p>{gymClass.startTime}</p>
        <p>{gymClass.endTime}</p>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            style={{
              padding: '10px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          >
            <Formik
              initialValues={{
                type: gymClass.type,
                start: gymClass.startTime,
                end: gymClass.endTime,
              }}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
            >
              <Form>
                <motion.div
                  layout
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <InputContainer>
                    <InputField name="type" placeholder="Type" />
                  </InputContainer>
                  <InputContainerFlex>
                    <InputField name="start" placeholder="17:00" />
                    <InputField name="end" placeholder="18:00" />
                  </InputContainerFlex>
                  <SubmitButton fluid primary>
                    Submit
                  </SubmitButton>
                </motion.div>
              </Form>
            </Formik>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
