import datetime

import jwt


class JWTManager:
    def __init__(self, secret_key, algorithm='HS256'):
        self.secret_key = secret_key
        self.algorithm = algorithm

    def generate_jwt(self, user_id, expiration_hours=1):
        expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=expiration_hours)
        token = jwt.encode({
            'user_id': user_id,
            'exp': expiration
        }, self.secret_key, algorithm=self.algorithm)
        return token

    def verify_jwt(self, token):
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            return payload
        except jwt.ExpiredSignatureError:
            return None  # Token过期
        except jwt.InvalidTokenError:
            return None  # 无效Token
