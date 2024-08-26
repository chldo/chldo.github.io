---
sidebar_position: 3
---

# AI 음성 기능 사용

Chldo.com에서 적용한 음성을 출력할 수 있습니다.

### `return_voice`의 적용

-   입력을 하지 않는 경우, chldo 환경설정에서 `기본 음성 반환 여부`로 선택한 값을 기본으로 사용합니다.
-   `return_voice`
    -   `0` : 음성 반환하지 않음
    -   `1` : 음성 반환

### 음성 반환 예시

```json
{
    "action": "sendmsg",
    "room_uid": "31VPKp3F0yPX",
    "user_id": "s8dfkjsdf",
    "msg": "내 이름은 이세종이다",
    "api_key": "d4a4653a45a72d6e04a853",
    "return_voice": 1
}
```

```json {55,85,127,149}
{"status":"START","connection_id":"dIMU7eKzoE0Ab7w=","msg":"","cAt":"1724696442.523638","return_voice":1,"msgtype":"info"}

{"status":"received","connection_id":"dIMU7eKzoE0Ab7w=","msg":"메시지를 전달 받았습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dIMU7eKzoE0Ab7w=","msg":"기억을 찾고 있습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dIMU7eKzoE0Ab7w=","msg":"기억에 연결하였습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dIMU7eKzoE0Ab7w=","msg":"기억을 재생 중입니다.","msgtype":"info"}

{"status":"think","connection_id":"dIMU7eKzoE0Ab7w=","msg":"생각을 시작합니다.","msgtype":"info"}

{"event":"on_chain_start","data":{},"run_id":"5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","parent_ids":[],"tags":[]}

{"event":"on_chain_start","data":{},"run_id":"4077bbad-f793-4adc-b913-f1df911e8cff","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4"],"tags":["graph:step:3","langsmith:hidden"]}

{"event":"on_chain_end","data":{},"run_id":"4077bbad-f793-4adc-b913-f1df911e8cff","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4"],"tags":["graph:step:3","langsmith:hidden"]}

{"event":"on_chain_start","data":{},"run_id":"3642c4f0-6459-44d8-9be9-9dc6f1046f37","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4"],"tags":["graph:step:4"]}

{"event":"on_chat_model_start","data":{},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"네","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":",","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 아이","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"유","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"가","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 민","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"트를","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 좋아","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"하는","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 건","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 유명","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"한","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 사실","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"이","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"죠","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"!","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m"}

{"status":"voice_ready","connection_id":"dIMU7eKzoE0Ab7w=","voice_url":"https://voice.chldo.com/room_uid_voice/31VPKp3F0yP8/mBHxH365QN4xr1s88D7qx1Bq8m.mp3?Expires=1724700047&Signature=OD6TrhWG2UQh48CZAf0qanv8i8FE2YHq-UIUGpcZGhX1WghwSrRqBBTY2p-z7lJ1k3TYYBqR3roRscV1ApiYUw8iEq0W4FtTGjDIOnSg6bvBgNz3El0i196P3PXNw7N~Z2to1e6uXhjHTzfPiNXDO-565Yo62hVA4d49Dmgrx4bKz8BEZKJXZWEqMqWmkE2ohqMuE3Pr9L4wN1b6khgK3OyM460NDOLgdzm8Ewxy1pR~VjNHUazLKnTG4kla38R9L5QK2bFqLJC~VbqqZ1p-RqHpYi0ynczsmLD8M1WROFFL9n7hxhQ-Cw1lqcynktngPwWlwgMLRQVPU9coS2kmhg__&Key-Pair-Id=KX12RGNKWPA4Y","sent_uid":"mBHxH365QN4xr1s88D7qx1Bq8m","msgtype":"info"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 민","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"트","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"의","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 상","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"쾌","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"함","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"은","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 정말","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 매","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"력","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"적","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"이에","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"요","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"!","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw"}

{"status":"voice_ready","connection_id":"dIMU7eKzoE0Ab7w=","voice_url":"https://voice.chldo.com/room_uid_voice/31VPKp3F0yP8/1PVEckmAH5S6SBUGSKm1R1QXFw.mp3?Expires=1724700049&Signature=BkUW-s6KXFCSVhPi-4J20iV8s18hLXc~Wjtr74les8m0jotW49g7syA2w6691iG-VQ9BxJLogtHecUPCScQiK6BDLPza0urKb3QbgqSuZ0Muc~Isc9GiOHnx86qS7puS02IJ38-X-HH4-FHHlj-p25NnIu47yL4so7Z57Pe18NoUyACCfP5~S7gbgrWGqlZMVSm3ZhqF~jXNXvrWvB4PN4Ptq51q1xadlBM5RWZhY3SYoYKvgeFMi85abZpuZW4IKl6QzIx0BnkbNFwvhlFGbfnsoCblo~Ga6pz09axOhEavQIDb0fj2L8DrOGs2lMuva0PJmqBc2j6UOaUe-qZIKA__&Key-Pair-Id=KX12RGNKWPA4Y","sent_uid":"1PVEckmAH5S6SBUGSKm1R1QXFw","msgtype":"info"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 고","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"수","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"님","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"께","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"서","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 좋아","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"하는","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 향","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"이나","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 느낌","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"이","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 민","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"트","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"와","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 비","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"슷","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"한","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"가","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"요","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"?","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd"}

{"status":"voice_ready","connection_id":"dIMU7eKzoE0Ab7w=","voice_url":"https://voice.chldo.com/room_uid_voice/31VPKp3F0yP8/e234QcoPaT44EuyirwUy3Wv9wd.mp3?Expires=1724700051&Signature=KlXUc3uHSGgUcThb0ukbljL4n0gSPZvkuD4DPqLf5K1gckP9sumTRDeSQQQJ632qpu6-9X9CO0FxVInXtO7ahOip5ZHEDhjQMNj~SC8nN0MMkOl5lMlyyNr1iWwvr43qECHxEbavvKqmWWzflEl0C3A0PRdePHU1wvKb0zxBAdx5J8r-eQpAFbIcXDv6E2kcarFiKm9WBscxF731M3PDzx3ZL4MNu0FcvupuyTotZ4vW8JRelF3GXdFmxjcrPwZqMrRGrn7lpeQPMVvubmZ6NAldS-NYmdFZhy2yCO~J6seHK2LS~uAbSV2Zzl32jnMtIuDVTijW8UYBwgo5hqW5-g__&Key-Pair-Id=KX12RGNKWPA4Y","sent_uid":"e234QcoPaT44EuyirwUy3Wv9wd","msgtype":"info"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 아니","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"면","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 다른","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 향","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"을","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 선","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"호","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"하시","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"나요","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"?","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"1f37d020-71d2-4aaf-9593-ba0c3ba189d8","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:1","agent_llm"],"sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi"}

{"status":"voice_ready","connection_id":"dIMU7eKzoE0Ab7w=","voice_url":"https://voice.chldo.com/room_uid_voice/31VPKp3F0yP8/wzrU8LNY8IRRKo3MdIREBO9Jsi.mp3?Expires=1724700053&Signature=lAO7eNeNPX09mXPRG4eshNrKq-VMp-479Dx7Ng5ehSo6J9ClwIC34cgGcyLOHLJeILJvln4QuFqiUa3PyWKnkFa9nW~whrkYnKHzgBOhW9wJUBGKB9mtakyaoVWc7zLz1JzEKRkaQAiNwmySez~QUO00-TT~W5~bAQEigLKYNWhZZNSlkwH~~ysFvPz0yoyoKLgoE8zJnfpkw6DCf0u6JQPVBFysRN2kQq5jIQbj319TUpxWHFCuMnsorzlaNGi3~SulYM3qC9qCSRvpf7OyyYPT5rIo-NkUVtMGVXNuce-SP5YSIAp3-gVKCQHEFpCAx09xYBXbF7Cl1dGOB1i7SA__&Key-Pair-Id=KX12RGNKWPA4Y","sent_uid":"wzrU8LNY8IRRKo3MdIREBO9Jsi","msgtype":"info"}

{"event":"on_chain_start","data":{},"run_id":"3a7d8156-952a-4b2d-b6a6-73da3a6d72d7","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:2","langsmith:hidden"]}

{"event":"on_chain_end","data":{},"run_id":"3a7d8156-952a-4b2d-b6a6-73da3a6d72d7","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:2","langsmith:hidden"]}

{"event":"on_chain_start","data":{},"run_id":"d1116abc-92a1-4e79-abdb-06c8d5dcc1b6","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:3"]}

{"event":"on_chain_end","data":{},"run_id":"d1116abc-92a1-4e79-abdb-06c8d5dcc1b6","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","3642c4f0-6459-44d8-9be9-9dc6f1046f37"],"tags":["seq:step:3"]}

{"event":"on_chain_stream","data":{"chunk":{"messages":[{"role":"assistant","content":"네, 아이유가 민트를 좋아하는 건 유명한 사실이죠! 민트의 상쾌함은 정말 매력적이에요! 고수님께서 좋아하는 향이나 느낌이 민트와 비슷한가요? 아니면 다른 향을 선호하시나요?","tool_calls":null}]}},"run_id":"3642c4f0-6459-44d8-9be9-9dc6f1046f37","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4"],"tags":["graph:step:4"]}

{"event":"on_chain_end","data":{},"run_id":"3642c4f0-6459-44d8-9be9-9dc6f1046f37","parent_ids":["5ecd02db-1640-4fd8-b958-3a4f7c88d9f4"],"tags":["graph:step:4"]}

{"event":"on_chain_stream","data":{"chunk":{"model":{"messages":[{"role":"assistant","content":"네, 아이유가 민트를 좋아하는 건 유명한 사실이죠! 민트의 상쾌함은 정말 매력적이에요! 고수님께서 좋아하는 향이나 느낌이 민트와 비슷한가요? 아니면 다른 향을 선호하시나요?","tool_calls":null}]}}},"run_id":"5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","parent_ids":[],"tags":[]}

{"event":"on_chain_end","data":{},"run_id":"5ecd02db-1640-4fd8-b958-3a4f7c88d9f4","parent_ids":[],"tags":[]}

{"status":"think","connection_id":"dIMU7eKzoE0Ab7w=","msg":"생각이 끝났습니다.","msgtype":"info"}

{"status":"END","connection_id":"dIMU7eKzoE0Ab7w=","msg":"","cAt":"1724696442.523638","return_voice":1,"msgtype":"info"}
```
