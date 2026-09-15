import { useState } from 'react';

const STORAGE_KEY = 'jobfind.profile';

function readProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      keywords: Array.isArray(parsed.keywords) ? parsed.keywords : [],
      preferredLocation: typeof parsed.preferredLocation === 'string' ? parsed.preferredLocation : '',
    };
  } catch {
    return null;
  }
}

// Persists the user's job preferences in localStorage so they survive reloads.
export default function useProfile() {
  const [profile, setProfileState] = useState(readProfile);

  const saveProfile = (next) => {
    const cleaned = {
      keywords: (next.keywords || []).map(k => k.trim()).filter(Boolean),
      preferredLocation: next.preferredLocation || '',
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    } catch {
      // Storage unavailable (private mode, quota) - keep in memory only.
    }
    setProfileState(cleaned);
  };

  const clearProfile = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setProfileState(null);
  };

  const hasProfile = !!profile && (profile.keywords.length > 0 || profile.preferredLocation !== '');

  return { profile, hasProfile, saveProfile, clearProfile };
}
