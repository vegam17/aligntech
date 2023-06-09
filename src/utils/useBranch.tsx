import { useState, useEffect } from 'react';

export default function useBranch() {
  const [branch, setBranch] = useState<String>('');
  useEffect(() => {
    (async () => {
      try {
        // @ts-ignore
        const data = await import('../data/branchName.json');
        const branchName = data?.name || '';
        setBranch(branchName);
      } catch (e) {
        setBranch('');
      }
    })();
  }, []);
  return branch;
}
