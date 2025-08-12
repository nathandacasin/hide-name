export function hideName(name) {
  if (typeof name !== 'string') {
    return 'Input provided is not a valid name';
  }

  const letterName = /^[A-Za-z\s]+$/;
  if (!letterName.test(name)) {
    return 'Input provided is not a valid name';
  }

  const namePart = name.trim().split(/\s+/);
  if (namePart.length < 2) {
    return "Input provided is not a valid name";
  }

  const lastName = namePart[namePart.length - 1];
  const firstNameParts = namePart.slice(0, -1);

  const maskedNames = firstNameParts.map(fullNames => {
    const names = fullNames.toUpperCase();
    if (names.length <= 2) return names;
    if (names.length === 3) return names[0] + '*' + names[2];
    if (names.length === 4) return names[0] + '**' + names[3];
    return names.slice(0, 2) + '*'.repeat(names.length - 3) + names[names.length - 1];
  });
  return maskedNames.join(' ') + ' ' + lastName[0].toUpperCase() + '.';
}
