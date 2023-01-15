const emailMatch = emailStr => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/gi;
  const isMatch = emailStr.match(regex);
  if (isMatch === null) return false; // 이메일 형식이 아님
  else return true; // 이메일 형식임
};

export default emailMatch;
