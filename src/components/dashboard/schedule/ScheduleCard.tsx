import { Form, Formik, FormikHelpers } from 'formik';
import { SubmitButton } from 'formik-semantic-ui-react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  GymClass,
  useUpdateGymClassMutation,
} from '../../../generated/graphql';
import {
  InputContainer,
  InputContainerFlex,
} from '../../../styles/styledComponents/schedule';
import { InputField } from './InputField';

interface ScheduleCardProps {
  gymClass: Pick<GymClass, 'id' | 'type' | 'startTime' | 'endTime'>;
}

interface Values {
  type: string;
  startTime: string;
  endTime: string;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ gymClass }) => {
  const [gymClassState, setGymClassState] = useState(gymClass);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const [updateGymClass, { error }] = useUpdateGymClassMutation({
    onCompleted: (data) => data && setGymClassState(data.updateGymClass),
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleUpdateGymClass = (values: Values) => {
    updateGymClass({ variables: { id: +gymClassState.id, ...values } });
  };

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
        <p>{gymClassState.type}</p>
        <p>{gymClassState.startTime}</p>
        <p>{gymClassState.endTime}</p>
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
                type: gymClassState.type,
                startTime: gymClassState.startTime,
                endTime: gymClassState.endTime,
              }}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                handleUpdateGymClass(values);
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
                    <InputField name="startTime" placeholder="17:00" />
                    <InputField name="endTime" placeholder="18:00" />
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
