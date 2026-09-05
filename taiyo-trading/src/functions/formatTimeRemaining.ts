const formatTimeRemaining = (dateString: string): string => {
  const targetDate = new Date(dateString).getTime();
  const now = new Date().getTime();
  let diff = Math.max(0, targetDate - now); // Avoid negative values

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0 || days > 0) parts.push(`${hours}h`);
  parts.push(`${minutes}m`);

  return parts.join(' ');
};

export default formatTimeRemaining;