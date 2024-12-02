/**
 * Save data to localStorage.
 * @param {string} key - The key to save the data under.
 * @param {any} value - The value to save (will be stringified).
 */
export const saveToLocalStorage = (key, value) => {
  
  try {
    if (key === 'admin') {
      // Save only one admin object
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      // Save regular data
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error(`Error saving to localStorage with key "${key}":`, error);
  }
};

/**
 * Get data from localStorage.
 * @param {string} key - The key to retrieve the data from.
 * @returns {any} - The parsed value from localStorage, or null if not found.
 */
export const getFromLocalStorage = (key) => {
  if (!key) {
    console.error('No key provided to getFromLocalStorage.');
    return null;
  }
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error retrieving from localStorage with key "${key}":`, error);
    return null;
  }
};

/**
 * Remove data from localStorage.
 * @param {string|null} key - The key to remove from localStorage.
 */
export const clearLocalStorage = (key = null) => {
  try {
    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.clear();
    }
  } catch (error) {
    console.error(`Error clearing localStorage${key ? ` for key "${key}"` : ''}:`, error);
  }
}; 