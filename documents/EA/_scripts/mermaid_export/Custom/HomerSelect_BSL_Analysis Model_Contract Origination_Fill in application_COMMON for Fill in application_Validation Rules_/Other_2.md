# Other

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Other
- **Diagram ID**: 90373
- **Elements**: 11
- **Connectors**: 8

```mermaid
graph TD
    Length_256["Length 256"]
    X_sell_code_encoding["X-sell code encoding"]
    Mandatory["Mandatory"]
    X_sell_offer_required["X-sell offer required"]
    X_sell_offer_code["X-sell offer code"]
    X_sell_offer_code["X-sell offer code"]
    Character_set_with_space["Character set (with space)"]
    Photo_included["Photo included"]
    Photo_taking_result["Photo taking result"]
    Comment["Comment"]
    Optional["Optional"]
    X_sell_offer_required -->|unnamed| Optional
    Comment -->|unnamed| Optional
    Photo_taking_result -->|unnamed| Photo_included
    Comment -->|unnamed| Character_set_with_space
    X_sell_offer_code -->|unnamed| X_sell_offer_code
    X_sell_offer_code -->|unnamed| Mandatory
    X_sell_offer_code -->|unnamed| X_sell_code_encoding
    Comment -->|unnamed| Length_256
```
