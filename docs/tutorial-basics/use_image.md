---
sidebar_position: 4
---

# AI 비전 기능 사용

이미지 파일을 전송하여 대화할 수 있습니다.

다음의 순서로 이용합니다.

1. presigned_url로 이미지를 업로드 한다
2. 업로드한 이미지 파일의 업로드를 wss에 송신한다.

### 이미지 파일 업로드

presigned url을 할당받기 위해 api_key, filename(이미지 파일 이름), room_uid를 넣어 요청합니다.

```python
import requests

filename = "test.jpg"
r = requests.post("https://info.api.chldo.com/v3/files/presignedurl",
                  json={
                    "api_key": "$API_KEY", "filename": filename, "room_uid": "nSNJ31yA956THdQ3xN4o"})
response = r.json()
data = response["presigned_url"]
```

```json
{ "presigned_url": { "url": "https://coredotagent-bucket....." } }
```

수신된 정보를 이용하여 파일을 업로드 합니다.

```python
files = {'file': open("IU.jpg", "rb")}

# S3에 파일 업로드를 위한 POST 요청 실행
response = requests.post(data["url"], data=data["fields"], files=files)
# 응답 확인
if response.status_code == 204:
    print ("파일 업로드 성공!")
else:
    print(f"파일 업로드 실패: {response.status_code} - {response.text}")
```

파일 업로드 성공!

### `filename`의 적용

-   업로드한 파일의 파일명을 이용하여 대화합니다.

```json {7}
{
    "action": "sendmsg",
    "room_uid": "nSNJ31yA956THdQ3xN4s",
    "user_id": "s8dfkjsdf",
    "api_key": "43b52d9729a6b3d194f5b2",
    "return_voice": 1,
    "filename": "test.jpg"
}
```
