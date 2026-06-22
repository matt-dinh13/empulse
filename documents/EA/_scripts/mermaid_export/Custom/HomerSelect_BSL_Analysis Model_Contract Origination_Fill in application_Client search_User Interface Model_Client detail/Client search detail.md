# Client search detail

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/User Interface Model/Client detail
- **Diagram ID**: 133241
- **Elements**: 11
- **Connectors**: 2

```mermaid
graph TD
    IN["IN"]
    KZ["KZ"]
    Client_detail_PH["Client detail - PH"]
    ID["ID"]
    Application_form["Application form"]
    Did_you_identify_this_customer_and_want_to_continue_with_its["Did you identify this customer and want to continue with its data?"]
    Yes["Yes"]
    No["No"]
    Default["Default"]
    VN["VN"]
    Client_search_detail["Client search detail"]
    Yes -->|unnamed| Application_form
    No -->|unnamed| Application_form
```
