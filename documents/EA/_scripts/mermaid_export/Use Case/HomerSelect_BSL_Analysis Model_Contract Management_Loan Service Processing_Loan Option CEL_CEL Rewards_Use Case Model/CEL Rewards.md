# CEL Rewards 

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model
- **Diagram ID**: 161522
- **Elements**: 23
- **Connectors**: 31

```mermaid
graph LR
    Update_evaluated_CELREW_periods_affected_by_PER["Update evaluated CELREW periods affected by PER"]
    Update_CELREW_periods_after_other_service_evaluation["Update CELREW periods after other service evaluation"]
    Renew_CELREW_periods["Renew CELREW periods"]
    n_08_607_Cancel_CELREW_periods(("08.607 Cancel CELREW periods"))
    Check_eligibility_of_reward_period["Check eligibility of reward period"]
    Calculate_Reward_base_amount["Calculate Reward base amount"]
    n_08_606_Process_automatic_CEL_Reward(("08.606 Process automatic CEL Reward"))
    Calculate_all_CELREW_periods_for_contract["Calculate all CELREW periods for contract"]
    n_08_604_Set_CEL_Reward_periods_for_contract(("08.604 Set CEL Reward periods for contract"))
    ADD_08_605_Update_CEL_reward_payment_channel_automatically(("{ADD}08.605 Update CEL reward payment channel automatically"))
    System_event[/"System event"/]
    n_08_603_Update_CEL_reward_evaluated_period(("08.603 Update CEL reward evaluated period"))
    Checking_of_correct_installment_payments["Checking of correct installment payments "]
    Process_upcoming_CEL_reward_evaluated_period["Process upcoming CEL reward evaluated period"]
    n_08_602_Select_CEL_Rewards_contracts(("08.602 Select CEL Rewards contracts"))
    Process_CEL_Reward_job["Process CEL Reward job"]
    Get_CEL_reward_period_for_evaluation["Get CEL reward period for evaluation"]
    Create_CEL_reward_evaluated_period["Create CEL reward evaluated period"]
    Calculate_CEL_reward_amount["Calculate CEL reward amount"]
    User[/"User"/]
    Time[/"Time"/]
    n_08_600_Show_CEL_Rewards_preview(("08.600 Show CEL Rewards preview"))
    MOD_08_601_Process_CEL_Reward(("{MOD}08.601 Process CEL Reward"))
    n_08_606_Process_automatic_CEL_Reward -->|unnamed| Check_eligibility_of_reward_period
    MOD_08_601_Process_CEL_Reward -->|unnamed| Calculate_Reward_base_amount
    n_08_603_Update_CEL_reward_evaluated_period -->|unnamed| Calculate_all_CELREW_periods_for_contract
    n_08_604_Set_CEL_Reward_periods_for_contract -->|unnamed| Calculate_all_CELREW_periods_for_contract
    ADD_08_605_Update_CEL_reward_payment_channel_automatically --> System_event
    MOD_08_601_Process_CEL_Reward -->|unnamed| Checking_of_correct_installment_payments
    MOD_08_601_Process_CEL_Reward -->|unnamed| Process_upcoming_CEL_reward_evaluated_period
    n_08_607_Cancel_CELREW_periods -->|unnamed| Update_CELREW_periods_after_other_service_evaluation
    MOD_08_601_Process_CEL_Reward -->|unnamed| Create_CEL_reward_evaluated_period
    n_08_602_Select_CEL_Rewards_contracts -.->|include| MOD_08_601_Process_CEL_Reward
    n_08_603_Update_CEL_reward_evaluated_period -->|unnamed| Calculate_CEL_reward_amount
    n_08_602_Select_CEL_Rewards_contracts -->|unnamed| Process_CEL_Reward_job
    n_08_603_Update_CEL_reward_evaluated_period -->|unnamed| Create_CEL_reward_evaluated_period
    n_08_603_Update_CEL_reward_evaluated_period -->|unnamed| Get_CEL_reward_period_for_evaluation
    MOD_08_601_Process_CEL_Reward -->|unnamed| Get_CEL_reward_period_for_evaluation
    n_08_603_Update_CEL_reward_evaluated_period -->|unnamed| Update_evaluated_CELREW_periods_affected_by_PER
    MOD_08_601_Process_CEL_Reward -->|unnamed| Calculate_CEL_reward_amount
    Time --> n_08_602_Select_CEL_Rewards_contracts
    System_event --> n_08_603_Update_CEL_reward_evaluated_period
    System_event --- n_08_607_Cancel_CELREW_periods
    System_event --- n_08_604_Set_CEL_Reward_periods_for_contract
    System_event --- n_08_606_Process_automatic_CEL_Reward
    User --> n_08_600_Show_CEL_Rewards_preview
    Process_upcoming_CEL_reward_evaluated_period -->|unnamed| Create_CEL_reward_evaluated_period
    Process_upcoming_CEL_reward_evaluated_period -->|unnamed| Calculate_CEL_reward_amount
    Process_upcoming_CEL_reward_evaluated_period -->|unnamed| Get_CEL_reward_period_for_evaluation
    Renew_CELREW_periods -->|unnamed| Calculate_all_CELREW_periods_for_contract
    Calculate_all_CELREW_periods_for_contract -->|unnamed| Get_CEL_reward_period_for_evaluation
    Calculate_all_CELREW_periods_for_contract -->|unnamed| Create_CEL_reward_evaluated_period
    Calculate_all_CELREW_periods_for_contract -->|unnamed| Calculate_CEL_reward_amount
    Calculate_CEL_reward_amount -->|unnamed| Calculate_Reward_base_amount
```
