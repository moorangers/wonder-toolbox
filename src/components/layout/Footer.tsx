import dayjs from 'dayjs';

export function Footer() {
  const currentYear = dayjs().year();

  return (
    <footer className="px-6 py-4 text-center border-t text-sm text-gray-500 dark:text-gray-400">
      ©{currentYear} Wonder Toolbox. All rights reserved.
    </footer>
  );
}
