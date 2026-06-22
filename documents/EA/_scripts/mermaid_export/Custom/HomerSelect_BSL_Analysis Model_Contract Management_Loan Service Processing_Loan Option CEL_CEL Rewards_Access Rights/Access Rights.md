# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Access Rights
- **Diagram ID**: 135493
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    ADD_08_605_Update_CEL_reward_payment_channel_automatically["{ADD}08.605 Update CEL reward payment channel automatically"]
    ADD_08_605_Update_CEL_reward_payment_channel_automatically["{ADD}08.605 Update CEL reward payment channel automatically"]
    n_08_603_Update_CEL_reward_evaluated_period["08.603 Update CEL reward evaluated period"]
    n_08_603_Update_CEL_Reward_evaluated_period["08.603 Update CEL Reward evaluated period"]
    MOD_08_601_Process_CEL_Reward["{MOD}08.601 Process CEL Reward"]
    n_08_601_Process_CEL_Reward["08.601 Process CEL Reward"]
    n_08_602_Select_CEL_Rewards_contracts["08.602 Select CEL Rewards contracts"]
    n_08_602_Select_CEL_Rewards_contracts["08.602 Select CEL Rewards contracts"]
    n_08_600_Show_CEL_Rewards_preview["08.600 Show CEL Rewards preview"]
    n_08_600_Show_CEL_Rewards_preview["08.600 Show CEL Rewards preview"]
    n_08_602_Select_CEL_Rewards_contracts -->|unnamed| n_08_602_Select_CEL_Rewards_contracts
    MOD_08_601_Process_CEL_Reward -->|unnamed| n_08_601_Process_CEL_Reward
    n_08_600_Show_CEL_Rewards_preview -->|unnamed| n_08_600_Show_CEL_Rewards_preview
    ADD_08_605_Update_CEL_reward_payment_channel_automatically -->|unnamed| ADD_08_605_Update_CEL_reward_payment_channel_automatically
    n_08_603_Update_CEL_reward_evaluated_period -->|unnamed| n_08_603_Update_CEL_Reward_evaluated_period
```
