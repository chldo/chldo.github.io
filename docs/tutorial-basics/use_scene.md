---
sidebar_position: 6
---

# 장면 기능 사용

지정한 장면을 사용하여 진행합니다.

다음의 순서로 이용합니다.

1. chldo.com의 `환경 설정`에서 `장면 사용`을 활성화 한다.
2. 각 장면에 프롬프트를 입력한다.
3. wss에서 `scene_number`를 전송한다.

-   자동 장면 설정(장면 판단자) 준비 중.
-   장면 1부터 7까지 7개 설정 가능.

### `scene_number`의 적용

```json {7}
{
    "action": "sendmsg",
    "room_uid": "nSNJ31yA956THdQ3xN4s",
    "user_id": "s8dfkjsdf",
    "api_key": "43b52d9729a6b3d194f5b2",
    "return_voice": 1,
    "scene_number": 1,
    "filename": "400x400.jpg"
}
```
