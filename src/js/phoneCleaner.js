export const clearPhoneNumbers = (phoneNumber) => {
  const phoneSeparated =
    /^(?<start>8|\+7|\+8\d)?([ -(])*(?<code>\d{3})?([ -)])*(?<signs1>\d{3})([- ])?(?<signs2>\d{2})([- ])?(?<signs3>\d{2})/.exec(
      phoneNumber
    );
  const phoneGroups = phoneSeparated.groups;
  const clearedPhoneNumber = `${
    phoneGroups.start === "8" ? "+7" : phoneGroups.start
  }${phoneGroups.code}${phoneGroups.signs1}${phoneGroups.signs2}${
    phoneGroups.signs3
  }`;
  return clearedPhoneNumber;
};
