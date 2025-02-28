import datetime
import jwt


class JWTManager:
    def __init__(self, secret_key, algorithm='HS256'):
        """
        初始化 JWTManager
        :param secret_key: 用于签名的密钥
        :param algorithm: 签名算法，默认 HS256
        """
        self.secret_key = secret_key
        self.algorithm = algorithm

    def generate_jwt(self, user_id, expiration_hours=1):
        """
        生成 JWT
        :param user_id: 用户唯一标识
        :param expiration_hours: 令牌的有效期（小时）
        :return: 生成的 JWT Token
        """
        expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=expiration_hours)
        token = jwt.encode({
            'user_id': user_id,
            'exp': expiration
        }, self.secret_key, algorithm=self.algorithm)
        return token

    def verify_jwt(self, token):
        """
        验证并解码 JWT
        :param token: 要验证的 JWT Token
        :return: 解码后的 Payload 或 None（验证失败）
        """
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            return payload
        except jwt.ExpiredSignatureError:
            print("Token 已过期")
            return None  # Token过期
        except jwt.InvalidTokenError:
            print("无效的 Token")
            return None  # 无效Token
