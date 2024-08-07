---
sidebar_position: 3
---

# Core.Agent Proxy 사용하기

Python에서 OpenAI SDK를 이용하여 GPT를 사용해 보겠습니다.

## 설치하기

```bash
pip install openai
```

## Python에서 사용하기

### Streal False

`gpt-4o-mini`를 이용하여 일괄 출력을 해보겠습니다.

```python
from openai import OpenAI

API_KEY = "45e27b46de532a7a6f0189"
BASE_URL ="https://api.proxy.chldo.com/v1/"

# Initialize the GPT model and OpenAI client
GPT_MODEL = "gpt-4o"
client = OpenAI(
    base_url=BASE_URL,
    api_key=API_KEY
)

chat_complete = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "프랙탈이 뭐죠? 쉽게 설명해 주세요"}],
    max_tokens=10,
    stream=False,
)

chat_complete.choices[0].message.content
```

```
프랙탈(fractal)은 복잡한 구조
```

### Stream True

`gpt-4o-mini`를 이용하여 스트림 출력을 해보겠습니다.

```python
from openai import OpenAI

API_KEY = "45e27b46de532a7a6f0189"
BASE_URL ="https://api.proxy.chldo.com/v1/"

# Initialize the GPT model and OpenAI client
GPT_MODEL = "gpt-4o"
client = OpenAI(
    base_url=BASE_URL,
    api_key=API_KEY
)

chat_complete = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "프랙탈이 뭐죠? 쉽게 설명해 주세요"}
    ],
    max_tokens=10,
    stream=True,
)

for chunk in chat_complete:
    if chunk.choices:
        print(chunk.choices[0].delta.content)
```

```

프
랙
탈
(fr
actal
)은
 일정
한
 규
칙
None
```

### ETC

```python
client = OpenAI(
    api_key=API_KEY,
    base_url="https://api.proxy.chldo.com/v1",
    default_headers={
        'x-coredot-provider': 'anthropic'
    }
)

chat_complete = client.chat.completions.create(
    # model="gpt-4-turbo",
    # model="gpt-4",
    # model="gpt-4o-mini",
    model="claude-3-5-sonnet-20240620",
    # model = "claude-3-sonnet-20240229",
    messages=[{"role": "user", "content": "너는 무슨 AI 모델이야? 명칭만 간단히 알려줘"}],
    max_tokens=30,
    stream=True
)

for chunk in chat_complete:
    if chunk.choices:
        print(chunk.choices[0].delta.content)

```

```

저는
Anthropic에
서 개
발한 Claude
라는 AI
 어
시
스턴트
입니다.
None
```

## 오류

### API_KEY 존재하지 않을 때

`API_KEY`가 없는 경우, 에러가 발생합니다.

-   존재하지 않는 API 키
-   만료된 API 키
-   삭제된 API 키
-   비정상적인 행동으로 중지된 API 키

```bash
/usr/local/lib/python3.10/dist-packages/openai/_base_client.py in _request(self, cast_to, options, remaining_retries, stream, stream_cls)
   1044
   1045             log.debug("Re-raising status error")
-> 1046             raise self._make_status_error_from_response(err.response) from None
   1047
   1048         return self._process_response(

NotFoundError: Error code: 404 - {'status': 'failure', 'message': 'API_KEY does not exist.'}
```
