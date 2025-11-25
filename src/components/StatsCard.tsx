import { type ReactNode } from 'react';
import AnimatedCounter from './AnimatedCounter';
import ScrollAnimation from './ScrollAnimation';

interface StatsCardProps {
  value: number;
  label: string;
  icon?: ReactNode;
  suffix?: string;
  prefix?: string;
  color?: 'primary' | 'secondary';
  delay?: number;
}

const StatsCard = ({ 
  value, 
  label, 
  icon, 
  suffix = '', 
  prefix = '',
  color = 'primary',
  delay = 0
}: StatsCardProps) => {
  const borderColor = color === 'primary' ? 'border-primary' : 'border-secondary';
  
  return (
    <ScrollAnimation animation="scale" delay={delay}>
      <div className={`bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center border-t-4 ${borderColor}`}>
        {icon && (
          <div className="flex justify-center mb-4">
            {icon}
          </div>
        )}
        <div className="text-4xl font-bold text-secondary mb-2">
          <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
        </div>
        <p className="text-gray-700 font-medium">{label}</p>
      </div>
    </ScrollAnimation>
  );
};

export default StatsCard;
