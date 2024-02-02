import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

// 加密函数
function encryptPassword(password: string, secretKey: string): string {
  const ciphertext = AES.encrypt(password, secretKey).toString();
  return ciphertext;
}

export const getEncryptedPassword = (
  password: string,
  secretKey: string
): string => {
  // 加密密码
  const encryptedPassword = encryptPassword(password, secretKey);
  console.log(encryptedPassword); // 打印或发送这个加密后的密码
  return encryptedPassword;
};
