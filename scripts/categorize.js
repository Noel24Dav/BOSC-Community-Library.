function categorize(resources) {
  return resources.filter(res => {
    // Fix: Added null check to prevent script crash
    if (!res || !res.tag) return false;
    return res.tag === 'educational';
  });
}
