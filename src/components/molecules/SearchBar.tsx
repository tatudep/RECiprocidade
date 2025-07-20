import React from 'react';
import { Input } from '../atoms/ui/input';
import { Button } from '../atoms/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export function SearchBar({ placeholder = "Pesquisar...", onSearch, className }: SearchBarProps) {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = () => {
    onSearch?.(searchValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Input
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1"
      />
      <Button onClick={handleSearch} size="icon">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
} 