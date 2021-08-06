import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { GymClass } from '../../../generated/graphql';

interface ScheduleCardProps {
  gymClass: Pick<GymClass, 'type' | 'startTime' | 'endTime'>;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ gymClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      style={{
        width: '100%',
        backgroundColor: '#888888',
        margin: '20px 0px',
        listStyleType: 'none',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      <motion.div layout>
        <p>{gymClass.type}</p>
        <p>{gymClass.startTime}</p>
        <p>{gymClass.endTime}</p>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          >
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
