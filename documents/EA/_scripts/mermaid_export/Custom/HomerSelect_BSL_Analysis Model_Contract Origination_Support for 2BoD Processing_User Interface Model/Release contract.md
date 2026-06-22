# Release contract

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/User Interface Model
- **Diagram ID**: 79910
- **Elements**: 9
- **Connectors**: 4

```mermaid
graph TD
    Contract_detail_Panel_of_buttons["Contract detail - Panel of buttons"]
    Application_form["Application form"]
    Contract_will_be_unassigned_from_user_user_name_Choose_type_["Contract will be unassigned from user ‹user name›. Choose type of contract releasing."]
    n_01_300_Search_for_contract["01.300 Search for contract"]
    n_01_031_Release_assigned_contract["01.031 Release assigned contract"]
    Cancel["Cancel"]
    Release_and_assign_to_me["Release and assign to me"]
    Release_and_return_to_queue["Release and return to queue"]
    Release_assigned_contract["Release assigned contract"]
    Contract_detail_Panel_of_buttons -->|unnamed| Release_assigned_contract
    Release_and_return_to_queue -->|unnamed| n_01_300_Search_for_contract
    Release_and_assign_to_me -->|unnamed| Application_form
    n_01_031_Release_assigned_contract -->|unnamed| Release_assigned_contract
```
