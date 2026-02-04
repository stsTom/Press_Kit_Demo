import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <Card key={label} style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }} className="w-24 text-center border-muted/70 background-white/50 bg-gradient-to-br from-white/25 to-black/50">
          <CardHeader className="p-2">
            <CardTitle className="text-2xl font-bold font-mono text-white">
              {String(value).padStart(2, '0')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 text-xs uppercase text-muted-foreground text-white">
            {label}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CountdownTimer;