# 2BoD filling decision

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 2SP/User Interface Model
- **Diagram ID**: 42613
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    n_01_083_Fill_in_application_2BoD["01.083 Fill in application - 2BoD"]
    Product_AF["Product AF"]
    Contract_was_switched_to_back_office["Contract was switched to back office"]
    Decide_who_will_fill_in_the_second_block_of_data["Decide who will fill in the second block of data."]
    Ok["Ok"]
    SA_RA["SA / RA"]
    Back_office["Back-office"]
    Decide_who_will_fill_in_the_second_block_of_data["Decide who will fill in the second block of data"]
    Contract_was_switched_to_back_office["Contract was switched to back office"]
    Back_office -->|unnamed| Contract_was_switched_to_back_office
    SA_RA -->|unnamed| Product_AF
    n_01_083_Fill_in_application_2BoD -->|unnamed| Decide_who_will_fill_in_the_second_block_of_data
```
