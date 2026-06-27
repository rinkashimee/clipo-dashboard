import { ArrowRightIcon } from '@phosphor-icons/react';

export function App() {
  return (
    <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white">
      Get Started
      <ArrowRightIcon size={18} weight="bold" />
    </button>
  );
}
