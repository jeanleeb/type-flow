import { type ClassValue, clsx } from 'clsx';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TypeFlowProps {
  text: string;
  className?: string;
  cursor?: boolean;
  speed?: number;
}

const characterVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

export const TypeFlow = ({ text, className, cursor = true, speed }: TypeFlowProps) => {
  const characters = useMemo(() => text.split(''), [text]);

  return (
    <div className={cn('font-mono text-base flex flex-wrap items-end', className)}>
      {characters.map((char, index) => (
        <motion.span
          key={`${index}-${char}`}
          variants={characterVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: speed ?? 0.1 }}
          className="whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          className="inline-block w-[0.6em] h-[1.2em] bg-current ml-[1px] mb-[-2px] align-baseline"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
      )}
    </div>
  );
};
