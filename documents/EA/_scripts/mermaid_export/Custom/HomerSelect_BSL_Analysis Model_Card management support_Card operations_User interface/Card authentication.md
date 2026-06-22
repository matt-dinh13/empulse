# Card authentication

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface
- **Diagram ID**: 140755
- **Elements**: 11
- **Connectors**: 2

```mermaid
graph TD
    n_12_534_Card_authentication["12.534 Card authentication"]
    Client_authentication["Client authentication"]
    Last_4_digits["Last 4 digits"]
    Card_number_last_4_digits["Card number last 4 digits"]
    XXXX_XXXX_XXXX["XXXX XXXX XXXX"]
    Cancel["Cancel"]
    Identify["Identify"]
    date_picker["date picker"]
    valid_until["valid until"]
    National_identification_number["National identification number"]
    Authentication_1st_step["Authentication 1st step"]
    Identify -->|unnamed| Client_authentication
    Authentication_1st_step -->|unnamed| n_12_534_Card_authentication
```
