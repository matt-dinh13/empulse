# dd.direct-debit-mandate-data.v3

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Direct debit (DD)/Kafka Messages/dd.direct-debit-mandate-data.v3
- **Diagram ID**: 162577
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class FrequencyTypeDto["FrequencyTypeDto"]
    class DDMStatusTypeDto["DDMStatusTypeDto"]
    class DDMConfirmStatusTypeDto["DDMConfirmStatusTypeDto"]
    class AccountTypeDto["AccountTypeDto"]
    class DdmExtendedProperties["DdmExtendedProperties"]
    class dd_direct_debit_mandate_data_v3["dd.direct-debit-mandate-data.v3"]
    dd_direct_debit_mandate_data_v3 --> FrequencyTypeDto : unnamed
    dd_direct_debit_mandate_data_v3 --> AccountTypeDto : unnamed
    dd_direct_debit_mandate_data_v3 --> DDMConfirmStatusTypeDto : unnamed
    dd_direct_debit_mandate_data_v3 --> DDMStatusTypeDto : unnamed
    dd_direct_debit_mandate_data_v3 o-- DdmExtendedProperties : unnamed
```
