import { Button, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { Form, Formik, FormikHelpers } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  DeleteGymClassMutationFn,
  GymClass,
  useUpdateGymClassMutation,
} from '../../../generated/graphql';
import {
  BtnContainerFlex,
  InputContainer,
  InputContainerFlex,
} from '../../../styles/styledComponents/schedule';

interface ScheduleCardProps {
  gymClass: Pick<GymClass, 'id' | 'type' | 'startTime' | 'endTime'>;
  deleteGymClass: DeleteGymClassMutationFn;
}

interface Values {
  type: string;
  startTime: string;
  endTime: string;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  gymClass,
  deleteGymClass,
}) => {
  const [gymClassState, setGymClassState] = useState(gymClass);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const [updateGymClass, { error }] = useUpdateGymClassMutation({
    onCompleted: (data) => data && setGymClassState(data.updateGymClass),
  });

  const handleUpdateGymClass = (values: Values) => {
    updateGymClass({ variables: { id: +gymClassState.id, ...values } });
  };

  const handleDeleteGymClass = () => {
    toggleOpen();
    deleteGymClass({
      variables: {
        id: +gymClassState.id,
      },
    });
  };
  return (
    <motion.li
      layout
      initial={{ borderRadius: 10 }}
      style={{
        width: '100%',
        backgroundColor: '#FBFAF5',
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
              // validationSchema={scheduleValidation}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                handleUpdateGymClass(values);
                setSubmitting(false);
              }}
            >
              {({ values, handleChange, handleSubmit, isSubmitting }) => (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
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
                      <TextField
                        id="type"
                        name="type"
                        label="Type"
                        variant="filled"
                        fullWidth
                        value={values.type}
                        onChange={handleChange}
                      />
                    </InputContainer>
                    <InputContainerFlex>
                      <TextField
                        id="startTime"
                        name="startTime"
                        label="Start time"
                        variant="filled"
                        type="time"
                        value={values.startTime}
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300,
                        }}
                      />
                      <TextField
                        id="endTime"
                        name="endTime"
                        label="End time"
                        variant="filled"
                        type="time"
                        value={values.endTime}
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300,
                        }}
                      />
                    </InputContainerFlex>
                    <BtnContainerFlex>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        disabled={isSubmitting}
                        startIcon={<SaveIcon />}
                      >
                        Save
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        disabled={isSubmitting}
                        startIcon={<DeleteIcon />}
                        onClick={handleDeleteGymClass}
                      >
                        Delete
                      </Button>
                    </BtnContainerFlex>
                  </motion.div>
                </Form>
              )}
            </Formik>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
