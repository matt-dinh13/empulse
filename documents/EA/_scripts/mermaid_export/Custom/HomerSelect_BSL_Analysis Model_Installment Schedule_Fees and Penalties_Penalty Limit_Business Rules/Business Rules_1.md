# Business Rules

```mermaid
graph TD
    Calculate_Available_amount_in_Penalty_limit["Calculate Available amount in Penalty limit"]
    Evaluate_Period_for_Penalty_limit["Evaluate Period for Penalty limit"]
    Adjust_penalty_amount_by_limit["Adjust penalty amount by limit"]
    Adjust_penalty_amount_by_limit -->|unnamed| Evaluate_Period_for_Penalty_limit
    Adjust_penalty_amount_by_limit -->|unnamed| Calculate_Available_amount_in_Penalty_limit
```
