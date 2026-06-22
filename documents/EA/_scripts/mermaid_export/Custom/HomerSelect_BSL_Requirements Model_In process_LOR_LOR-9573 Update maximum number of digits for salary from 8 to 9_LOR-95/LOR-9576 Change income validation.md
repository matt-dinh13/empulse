# LOR-9576 Change income validation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9573 Update maximum number of digits for salary from 8 to 9/LOR-9576 Change income validation
- **Diagram ID**: 157595
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    Non_negative_number_up_to_99_999_999["Non-negative number up to 99 999 999  "]
    Monthly_income_expenses_ID["Monthly income/expenses ID"]
    ADD_Net_income_ADD["{ADD}Net income{/ADD}"]
    ADD_LOR_9573_Non_negative_number_up_to_999_999_999_ADD["{ADD LOR-9573}Non-negative number up to 999 999 999{/ADD}"]
    LOR_9576_Change_income_validation["LOR-9576 Change income validation"]
    ADD_Net_income_ADD -->|unnamed| ADD_LOR_9573_Non_negative_number_up_to_999_999_999_ADD
```
