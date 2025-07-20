import React from 'react';
import { Card as UICard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../atoms/ui/card';
import { Button } from '../atoms/ui/button';

interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onAction?: () => void;
  actionText?: string;
}

export function MoleculeCard({
  title,
  description,
  children,
  footer,
  className,
  onAction,
  actionText
}: CardProps) {
  return (
    <UICard className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
      {(footer || onAction) && (
        <CardFooter className="flex justify-between">
          {footer}
          {onAction && actionText && (
            <Button onClick={onAction} variant="outline">
              {actionText}
            </Button>
          )}
        </CardFooter>
      )}
    </UICard>
  );
} 