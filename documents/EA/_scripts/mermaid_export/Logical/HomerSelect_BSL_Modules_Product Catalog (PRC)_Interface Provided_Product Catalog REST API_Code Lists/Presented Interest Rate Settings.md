# Presented Interest Rate Settings

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Code Lists
- **Diagram ID**: 161074
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class LocalizedString["LocalizedString"]
    class Code_Lists_Code_Lists["Code Lists : Code Lists"]
    class MOD_Presented_IR_Setting["{MOD}Presented IR Setting"]
    class PIRSettingsDto["PIRSettingsDto"]
    PIRSettingsDto ..> MOD_Presented_IR_Setting : unnamed
    PIRSettingsDto ..> LocalizedString : unnamed
```
