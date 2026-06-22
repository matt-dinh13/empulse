# Bank DD settings - ID specific

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/ID
- **Diagram ID**: 152605
- **Elements**: 10
- **Connectors**: 7

```mermaid
graph TD
    Enabled_for_DD_provider_type["Enabled for 'DD' provider type"]
    DD_Provider_type["DD Provider type"]
    Allowed_offset_range["Allowed offset range"]
    Numeric["Numeric"]
    Mandatory["Mandatory"]
    DD_Providers_selection["DD Providers selection"]
    Offset["Offset"]
    DD_Provider["DD Provider"]
    Usable_for_direct_debits["Usable for direct debits"]
    DD_settings_for_bank_ID_specific["DD settings for bank - ID specific"]
    DD_Provider -->|unnamed| DD_Providers_selection
    Offset -->|unnamed| Mandatory
    DD_Provider -->|unnamed| Mandatory
    Offset -->|unnamed| Numeric
    Offset -->|unnamed| Allowed_offset_range
    Offset -->|unnamed| Enabled_for_DD_provider_type
    DD_Provider -->|unnamed| Enabled_for_DD_provider_type
```
