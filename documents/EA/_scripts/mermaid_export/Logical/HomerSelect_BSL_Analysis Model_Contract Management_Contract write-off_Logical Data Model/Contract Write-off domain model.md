# Contract Write-off domain model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Logical Data Model
- **Diagram ID**: 160363
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class Amortization_Tax_Type["Amortization Tax Type"]
    class Amortized_Contract["Amortized Contract"]
    class Amortization_Request_Type["Amortization Request Type"]
    class Processing_Amortization_Status_Type["Processing Amortization Status Type"]
    class Dataset_Type["Dataset Type"]
    class Installment_Part_Type["Installment Part Type"]
    class Batch_Status_Type["Batch Status Type"]
    class Tariff_Item_Type["Tariff Item Type"]
    class Amortized_Installment_Part["Amortized Installment Part"]
    Amortized_Installment_Part ..> Tariff_Item_Type : unnamed
    Amortized_Installment_Part ..> Installment_Part_Type : unnamed
    Amortized_Contract ..> Processing_Amortization_Status_Type : unnamed
    Amortized_Contract ..> Amortization_Request_Type : unnamed
    Amortized_Contract o-- Amortized_Installment_Part : unnamed
    Amortized_Installment_Part ..> Amortization_Tax_Type : unnamed
    Tariff_Item_Type --> Tariff_Item_Type : unnamed
```
