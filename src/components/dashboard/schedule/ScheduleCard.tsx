import { QueryLazyOptions } from '@apollo/client';
import { Button, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { Form, Formik, FormikHelpers } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  Exact,
  GymClass,
  useDeleteGymClassMutation,
  useUpdateGymClassMutation,
} from '../../../generated/graphql';
import {
  BtnContainerFlex,
  InputContainer,
  InputContainerFlex,
} from '../../../styles/styledComponents/schedule';
import { scheduleValidation } from '../../../validation/scheduleValidation';
import { ScheduleCardLoader } from './ScheduleCardLoader';

interface ScheduleCardProps {
  gymClass?: Pick<GymClass, 'id' | 'type' | 'startTime' | 'endTime'>;
  getGymClasses: (
    options?:
      | QueryLazyOptions<
          Exact<{
            day: number;
          }>
        >
      | undefined
  ) => void;
  toggleAddNewClass?: () => void;
}

interface Values {
  type: string;
  startTime: string;
  endTime: string;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  gymClass,
  getGymClasses,
  toggleAddNewClass,
}) => {
  const [gymClassState, setGymClassState] = useState(gymClass);
  const [isOpen, setIsOpen] = useState(!gymClass);

  const [deleteGymClass] = useDeleteGymClassMutation({
    onCompleted: (data) => data?.deleteGymClass && getGymClasses(),
  });

  const toggleOpen = () => setIsOpen(!isOpen);
  const [updateGymClass, { error }] = useUpdateGymClassMutation({
    onCompleted: (data) => data && setGymClassState(data.updateGymClass),
  });

  const handleUpdateGymClass = async (values: Values) =>
    updateGymClass({ variables: { id: +gymClassState?.id, ...values } });

  const handleDeleteGymClass = () => {
    toggleOpen();
    deleteGymClass({
      variables: {
        id: +gymClassState?.id,
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
        position: 'relative',
      }}
    >
      <motion.div
        layout
        onClick={() => {
          if (!gymClass) {
            toggleAddNewClass && toggleAddNewClass();
          }
          toggleOpen();
        }}
        style={{
          padding: '10px',
        }}
      >
        <motion.p style={{ margin: '0px 0px 10px 0px' }}>
          {gymClassState?.type}
        </motion.p>
        <motion.p style={{ fontWeight: 'bold', margin: '0px' }}>
          {gymClass
            ? `${gymClassState?.startTime} - ${gymClassState?.endTime}`
            : 'Add new class'}
        </motion.p>
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
                type: gymClassState?.type ?? '',
                startTime: gymClassState?.startTime ?? '',
                endTime: gymClassState?.endTime ?? '',
              }}
              validationSchema={scheduleValidation}
              onSubmit={async (
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                const res = await handleUpdateGymClass(values);
                if (res.data?.updateGymClass) {
                  setSubmitting(false);
                }
              }}
            >
              {({ values, handleChange, handleSubmit, isSubmitting }) => (
                <>
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
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeOut', duration: 0.5 }}
                      >
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
                            onClick={
                              gymClass
                                ? handleDeleteGymClass
                                : toggleAddNewClass
                            }
                          >
                            Delete
                          </Button>
                        </BtnContainerFlex>
                      </motion.div>
                    </motion.div>
                  </Form>
                  {isSubmitting && <ScheduleCardLoader />}
                </>
              )}
            </Formik>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
