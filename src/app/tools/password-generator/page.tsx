'use client';

import { useState } from 'react';

import Divider from '@/components/Divider';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import CopyableTextField from '@/components/CopyableTextField';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';

import CharacterOptions from './CharacterOptions';
import PasswordLengthSelect from './PasswordLengthSelect';

export default function GeneratePasswordPage() {
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [excludeDuplicate, setExcludeDuplicate] = useState(false);
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);

  const generate = () => {
    let charset = '';
    const similarChars = /[iIl1oO0]/g;

    if (includeNumber) {
      charset += '0123456789';
    }
    if (includeUpper) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLower) {
      charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeSymbol) {
      charset += '!@#$%^&*()+';
    }
    if (excludeSimilar) {
      charset = charset.replace(similarChars, '');
    }

    if (!charset) {
      setPassword('');
      setScore(0);
      return;
    }

    let result = '';
    const used = new Set<string>();

    for (let i = 0; i < length; i++) {
      let ch = '';
      let attempts = 0;
      do {
        ch = charset.charAt(Math.floor(Math.random() * charset.length));
        attempts++;
      } while (excludeDuplicate && used.has(ch) && attempts < 10);

      result += ch;
      used.add(ch);
    }
    setPassword(result);
    updateStrength(result);
  };

  const updateStrength = (pwd: string) => {
    let score = 0;
    if (/[a-z]/.test(pwd)) {
      score += 1;
    }
    if (/[A-Z]/.test(pwd)) {
      score += 1;
    }
    if (/[0-9]/.test(pwd)) {
      score += 1;
    }
    if (/[^a-zA-Z0-9]/.test(pwd)) {
      score += 1;
    }
    setScore(score * 25);
  };

  const strengthColor = () => {
    if (score === 0) {
      return 'bg-muted';
    }
    if (score < 50) {
      return 'bg-destructive';
    }
    if (score < 75) {
      return 'bg-warning';
    }
    return 'bg-success';
  };

  const strengthText = () => {
    if (score === 0) {
      return '-';
    }
    if (score < 50) {
      return 'Weak';
    }
    if (score < 75) {
      return 'Medium';
    }
    return 'Strong';
  };

  return (
    <Card className="max-w-lg mx-auto my-16 p-6">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          🔐 Strong Password Generator
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <CopyableTextField label="Generated Password" value={password} />

        <Progress
          value={score}
          className="h-2 rounded-full"
          style={{ backgroundColor: 'var(--muted)' }}
        >
          <div
            className={`${strengthColor()} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${score}%` }}
          />
        </Progress>

        <p
          className={`text-right font-semibold ${
            score === 0
              ? 'text-muted-foreground'
              : score < 50
              ? 'text-destructive'
              : score < 75
              ? 'text-warning'
              : 'text-success'
          }`}
        >
          Strength: {strengthText()}
        </p>

        <Divider />

        <Button variant="default" onClick={generate} className="w-full">
          Generate Password
        </Button>

        <Divider />

        <PasswordLengthSelect length={length} setLength={setLength} />

        <CharacterOptions
          includeUpper={includeUpper}
          setIncludeUpper={setIncludeUpper}
          includeLower={includeLower}
          setIncludeLower={setIncludeLower}
          includeNumber={includeNumber}
          setIncludeNumber={setIncludeNumber}
          includeSymbol={includeSymbol}
          setIncludeSymbol={setIncludeSymbol}
          excludeSimilar={excludeSimilar}
          setExcludeSimilar={setExcludeSimilar}
          excludeDuplicate={excludeDuplicate}
          setExcludeDuplicate={setExcludeDuplicate}
        />
      </CardContent>
    </Card>
  );
}
